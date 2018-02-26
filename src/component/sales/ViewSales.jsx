import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Table} from '../tables/Table.jsx' 
import Pagination from '../pagination/Pagination.jsx' 

class ViewSales extends Component{
	constructor(props) {
		super(props);
		this.state = { header: [], rows: [], data: [], pageOfItems: [], pager: {} }
	}

	componentDidMount() {
		const { GETUSERSALES, SALES } = this.props.Constants;
		this.props.ServiceObj.getItem(SALES, GETUSERSALES, this.props.user.id)
			.then(({ data }) => {
				this.setState({ data: data || [] });
			})
			.catch(err => {

			})
		this.setState({
			header:['#','Customer','Contact','Amount','Paid','Balance','Status',<i className="fa fa-gear"></i>],
			rows:[{no:1,Customer: 'Danjuma Tata',contactNo: '08098772211',cost:0.00,amountPaid:0.00,balance:0.00,status:'Completed',action:<Link to="#"><i className="fa fa-eye"></i></Link>}]
		})
	}
	onChangePage(pageOfItems, pager) {
		this.setState({ pageOfItems, pager });
	}
	format(data) {
		return data.map((item, index) => {
			return {
				SN: item.no,
				Customer: item.firstName + ' ' + item.lastName,
				Contact: item.contactNo,
				Amount: item.cost,
				Paid: item.amountPaid,
				Balance: item.balance,
				Status: item.isCompleted ? 'Fully Paid' : 'Owing',
				Actions: <Link to={`/home/sales/view/${item.Id}`} className="mr-15 btn btn-info"><i className="fa fa-eye"></i></Link>


			}
		})

	}

	render(){
		return(
			<div>
				<div className="panel panel-default card-view">
					<div className="panel-heading">
						<div className="pull-left">
								<h6 className="panel-title txt-dark">Sales</h6>
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
			</div>
			);
	}
}

export default ViewSales;