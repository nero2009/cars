import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table } from '../tables/Table.jsx'
import Pagination from '../pagination/Pagination.jsx'


class ViewVehicles extends Component {
	constructor(props) {
		super(props);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.state = {
			header: [], rows: [], data: [], pageOfItems: [], salesPersons:[], pager: {}, salesData: { salesPrice: "", amountPaid: "",personId:""},customerObj:{},
			customerEmail: '', showSalesForm: false, isMakingSale: false,vehicleForSale:{},
			isCheckingCustomerEmail: false, showCustomerDoesNotExistMsg: false,
			err: { customerEmail: '', general: '', salesPrice: "", amountPaid: "", all: new Set() }
		}
	}
	componentDidMount() {
		const { VEHICLE, GETALL,GETUSERAGENTS,DEALERS } = this.props.Constants;
		this.props.ServiceObj.getItems(VEHICLE, GETALL)
			.then(({ data }) => {
				this.setState({ data });
			})
			.catch(err => {

			})
			this.props.ServiceObj.getItem(DEALERS,GETUSERAGENTS,this.props.user.id)
			.then(({ data }) => {
				this.setState({salesPersons: data });
			})
			.catch(err => {

			})	

		this.setState({
			header: ['#', 'manufacturer', 'model', 'modelYear', 'color', 'bodyType', 'registered', 'sold', <i className="fa fa-gear"></i>]
		})
	}
	onChangePage(pageOfItems, pager) {
		this.setState({ pageOfItems, pager });
	}
	openModal(id, e) {
		e.preventDefault();
		this.setState({ singleSaleVehicleId: id }, () => {
			window.$('#myModal').modal({
				keyboard: false
			})
		})
		this.setModalEventHandlers.call(this);
	}
	setModalEventHandlers() {
		window.$('#myModal').on('hide.bs.modal', e => this.resetStateOnModalClose.call(this))
	}
	format(data) {
		return data.map((item, index) => {
			return {
				SN: item.no,
				Manufacturer: item.manufacturer,
				Model: item.model,
				ModelYear: item.modelYear,
				Color: item.color,
				BodyType: item.bodyType,
				Registered: item.isRegistered ? 'Yes' : 'No',
				Sold: item.isSold ? 'Yes' : 'No',
				Actions: <div><Link to={`/home/vehicles/edit/${item.Id}`} className="mr-15 btn btn-info"><i className="fa fa-pencil"></i></Link>
				{
					item.isSold ? 
					'' 
					: 
					<a href="" className="mr-15 btn btn-success" onClick={this.openModal.bind(this, item.Id)}><i className="fa fa-money"></i></a>
				}
				</div>
			}
		})

	}
	getSelectVehicleNameString() {
		const vehicleForSale = this.state.pageOfItems.find(item => item.Id === this.state.singleSaleVehicleId);
		return vehicleForSale ? `${vehicleForSale.manufacturer} ${vehicleForSale.model} (${vehicleForSale.modelYear})` : ''
	}
	confirmCustomerEmail(id) {
		this.setState({ isCheckingCustomerEmail: true });
		this.props.validatorAll([
			{ name: 'customerEmail', value: this.state.customerEmail }],
			'Customer', this)
		if (this.state.err.all.size > 0) {
			this.setState({ isCheckingCustomerEmail: false })
			return;
		}

		const { CUSTOMERS, GETCUSTOMERBYEMAIL } = this.props.Constants;
		this.props.ServiceObj.getItem(CUSTOMERS, GETCUSTOMERBYEMAIL, this.state.customerEmail)
			.then((data) => {
				data.status === 200 ?
					this.setState({ showSalesForm: true, isCheckingCustomerEmail: false,customerObj:data.data })
					:
					this.setState({ showCustomerDoesNotExistMsg: true, isCheckingCustomerEmail: false });
			})
			.catch(err => {
				this.setState({ isCheckingCustomerEmail: false, showCustomerDoesNotExistMsg: true })
			})
	}
	handleInputChange(e) {
		this.setState({ [e.target.name]: e.target.value })
		this.props.validator({ name: e.target.name, value: e.target.value }, 'Customer', this)
		e.target.name === "customerEmail" ? this.setState({ showCustomerDoesNotExistMsg: false }) : ''
		return;
	}
	handleSalesInputChange(e) {
		this.setState({ salesData: { ...this.state.salesData, [e.target.name]: e.target.value } })
		this.props.validator({ name: e.target.name, value: e.target.value }, 'Sales', this)
		return
	}
	resetStateOnModalClose() {
		this.setState({
			customerEmail: "", isCheckingCustomerEmail: false, showSalesForm: false,customerObj:{},
			 isMakingSale: false, salesData: { salesPrice: "", amountPaid: "" },
			showCustomerDoesNotExistMsg: false, err: { customerEmail: '', general: '', salesPrice: "", amountPaid: "", all: new Set() }
		})
	}
	resetStateOnModalBack() {
		this.setState({
			showSalesForm: false, isMakingSale: false, salesData: { salesPrice: "", amountPaid: "" },
			err: { customerEmail: '', general: '', salesPrice: "", amountPaid: "", all: new Set() }
		})
	}
	makeSale() {
		this.setState({ isMakingSale: true });
		if (this.props.user.dealerId) {
			this.props.validatorAll([
				{ name: 'amountPaid', value: this.state.salesData.amountPaid },{ name: 'personId', value: this.state.salesData.personId },{ name: 'salesPrice', value: this.state.salesData.salesPrice }],
				'Sales', this)
		}
		else{
			this.props.validatorAll([{ name: 'amountPaid', value: this.state.salesData.amountPaid },{ name: 'salesPrice', value: this.state.salesData.salesPrice }],
				'Sales', this)
		}
		
		if (this.state.err.all.size > 0) {
			this.setState({ isMakingSale: false })
			return;
		}
		const vehicleForSale = this.state.pageOfItems.find(item => item.Id === this.state.singleSaleVehicleId);
		const data = {
			personId:this.props.user.dealerId? this.state.salesData.personId:this.props.user.personId,
			customerId:this.state.customerObj.customerId,
			amountPaid:parseInt(this.state.salesData.amountPaid),
			cost:parseInt(this.state.salesData.salesPrice),
			vehicles:[{vehicleId:vehicleForSale.vehicleId,amount:parseInt(this.state.salesData.amountPaid),cost:parseInt(this.state.salesData.salesPrice)}]
		}
		
		this.makeSaleRequest.call(this,data)
		.then(data=>{
			this.setState({ isMakingSale: false });
			this.props.successRequest.call(this,"Sale successful.");
			window.$('#myModal').modal('hide');
		})
		.catch(err=>{
			this.setState({ isMakingSale: false });
			this.props.failedRequest.call(this,"sale not created.");
		})

	}
	makeSaleRequest(data){
		const {BULKSALE,SALES} = this.props.Constants;
		return this.props.ServiceObj.createItem(data,SALES,BULKSALE);
	}
	render() {
		return (
			<div>
				<div className="panel panel-default card-view">
					<div className="panel-heading">
						<div className="pull-left">
							<h6 className="panel-title txt-dark">Vehicles</h6>
						</div>
						<div className="clearfix"></div>
					</div>
					<div className="panel-wrapper collapse in">
						<div className="panel-body">
							<div className="table-wrap">
								<Table headers={this.state.header} rows={this.format.call(this, this.state.pageOfItems)} />
								<div className="clearfix"></div>
							</div>
							<Pagination items={this.state.data} onChangePage={this.onChangePage.bind(this)} />
						</div>
					</div>
				</div>
				<div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
								<h4 className="modal-title" id="myModalLabel"></h4>
							</div>
							<div className="modal-body">
								{
									this.state.showSalesForm ?
										<div>
											<form className="pa-15">
												<div className="form-group mb-20">
													<label >Customer Email</label>
													<input type="text" name="customerEmail" className="form-control noBorder" readOnly value={this.state.customerEmail} />
												</div>
												{
													this.props.user.dealerId && 
													<div className="form-group mb-20">
														<select name="personId" className="form-control noBorder" value={this.state.salesData.personId} id="personId" onChange={this.handleSalesInputChange.bind(this)}>
															<option value="">Select sales person</option>
															{
																this.state.salesPersons.map((item,index)=><option value={item.personId} key={++index}>{item.get_user_info.name}</option>)
															}
														</select>
													</div>
												}
												
												<div className="form-group mb-20">
													<label >Vehicle</label>
													<input type="text" name="customerEmail" className="form-control noBorder" readOnly value={this.getSelectVehicleNameString.call(this)} />
												</div>
												<div className="row">
													<div className={this.state.err.salesPrice.length > 0 ? "has-error form-group  col-md-6" : "form-group  col-md-6"}>
														<label htmlFor="salesPrice" className="mr-5">Price</label>
														<div className="input-group">
															<span className="input-group-addon">&#8358;</span>
															<input type="text" id="salesPrice" name="salesPrice" className="form-control" placeholder="Price" value={this.state.salesData.salesPrice} onChange={this.handleSalesInputChange.bind(this)} />
														</div>
														<span className="error-text">{this.state.err.salesPrice}</span>
													</div>
													<div className={this.state.err.amountPaid.length > 0 ? "has-error form-group  col-md-6" : "form-group  col-md-6"}>
														<label htmlFor="amountPaid" className="mr-5">Amount Paid</label>
														<div className="input-group">
															<span className="input-group-addon">&#8358;</span>
															<input type="text" id="amountPaid" name="amountPaid" className="form-control" placeholder="Amount Paid" value={this.state.salesData.amountPaid} onChange={this.handleSalesInputChange.bind(this)} />
														</div>
														<span className="error-text">{this.state.err.amountPaid}</span>
													</div>
												</div>
											</form>
										</div>
										:
										<div className="pa-15">
											<div className={this.state.err.customerEmail.length > 0 ? "has-error input-group" : "input-group"}>
												<span className="input-group-addon"><i className="fa fa-envelope"></i></span>
												<input type="text" className="form-control" name="customerEmail" placeholder="Customer Email" aria-describedby="customer email" onChange={this.handleInputChange} value={this.state.customerEmail} />

											</div>
											<span className="error-text">{this.state.err.customerEmail}</span>
											{
												this.state.showCustomerDoesNotExistMsg && <span className="error-text ml-50">Customer does not exist</span>
											}
										</div>

								}
							</div>
							<div className="modal-footer">
								{
									this.state.showSalesForm ?
										<div>
											<button type="button" className="btn btn-default" onClick={this.resetStateOnModalBack.bind(this)}>Back</button>
											<button type="button" className="btn btn-primary" disabled={this.state.isMakingSale || this.state.err.all.size > 0} onClick={this.makeSale.bind(this)}>{this.state.isMakingSale ? "Loading..." : "Sell"}</button>
										</div>
										:
										<div>
											<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
											<button type="button" className="btn btn-primary" disabled={this.state.isCheckingCustomerEmail || this.state.err.all.size > 0} onClick={this.confirmCustomerEmail.bind(this)}>{this.state.isCheckingCustomerEmail ? "Loading..." : "Next"}</button>
										</div>
								}
							</div>
						</div>
					</div>
				</div>
			</div>


		)
	}
}

export default ViewVehicles