import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class EditVehicles extends Component{
	constructor(props) {
		super(props);
		this.handleInputChange=this.handleInputChange.bind(this);
		this.submit=this.submit.bind(this);
		this.clear=this.clear.bind(this);
		this.state={vin:'',manufacturer:'',model:'',modelYear:'',color:'',bodyType:'',registered:'',regNo:'',submitBtn:this.props.submitBtn,disabled:false}
	}

	componentDidMount() {

		const recievedData={vin:'FACL1486',manufacturer:'Ford',model:'Edge',modelYear:'2011',color:'Blue',bodyType:'SUV',
							registered:'Yes',regNo:'!0Cj011160'};
		this.setState({recievedData,vin:recievedData.vin,manufacturer:recievedData.manufacturer,
			model:recievedData.model,modelYear:recievedData.modelYear,color:recievedData.color,bodyType:recievedData.bodyType,
			registered:recievedData.registered,regNo:recievedData.regNo});
	}

	handleInputChange(e){
		this.setState({[e.target.name]:e.target.value})
	}

	clear(){
		this.setState({vin:this.state.recievedData.vin,manufacturer:this.state.recievedData.manufacturer,
			model:this.state.recievedData.model,modelYear:this.state.recievedData.modelYear,color:this.state.recievedData.color,
			bodyType:this.state.recievedData.bodyType,registered:this.state.recievedData.registered,regNo:this.state.recievedData.regNo})
	}

	submit(){
		this.props.startRequest.call(this);
		const {vin,manufacturer,model,modelYear,color,bodyType,registered,regNo} = this.state;
		const data ={vin,manufacturer,model,modelYear,color,bodyType,registered,regNo}
		alert(data)
		this.props.failedRequest.call(this,"Vehicle is not created.");
	}

	render(){
		return(
				<div className="row">
				<div className="col-md-6 col-md-offset-3">
					<div className="panel panel-default card-view panel-refresh">
						<div className="panel-heading">
							<div className="clearfix"></div>
						</div>
						<div className="panel-wrapper collapse in">
							<div className="panel-body">
								<form >
									<div className="form-group">
										<label htmlFor="">
											VIN(Vehicle Identification Number)
										</label>
										<input className="form-control" name="vin" value={this.state.vin} type="number" onChange={this.handleInputChange} />
									</div>
									<div className="form-group">
										<label htmlFor="">
											Manufacturer
										</label>
										<input className="form-control" name="manufacturer" value={this.state.manufacturer} onChange={this.handleInputChange} />
									</div>
									<div className="form-group">
										<label htmlFor="">
											Model
										</label>
										<input className="form-control" name="model" value={this.state.model} onChange={this.handleInputChange} />
									</div>
									<div className="form-group">
										<label htmlFor="">
											Model Year
										</label>
										<input className="form-control" name="modelYear" value={this.state.modelYear} type="number" onChange={this.handleInputChange} />
									</div>
									<div className="form-group">
										<label htmlFor="">
											Color
										</label>
										<input className="form-control" name="color" value={this.state.color} onChange={this.handleInputChange} />
									</div>
									<div className="form-group">
										<label htmlFor="">
											Body Type
										</label>
										<input className="form-control" name="bodyType" value={this.state.bodyType} onChange={this.handleInputChange} />
									</div>
									<div class="form-group">
									    <label >Registered</label>
									    <select class="form-control" value={this.state.registered} onChange={this.handleInputChange} name="registered">
									      <option>Yes</option>
									      <option>No</option>
									    </select>
									 </div>
									 <div className="form-group">
										<label htmlFor="">
											Reg No
										</label>
										<input className="form-control" name="regNo" value={this.state.regNo} type="number" onChange={this.handleInputChange} />
									</div>
									<div className="form-actions mt-10">
										<button type="button" className="btn btn-success  mr-10" disabled={this.state.disabled} onClick={this.submit}> {this.state.submitBtn}</button>
										<button type="button" className="btn btn-default" disabled={this.state.disabled} onClick={this.clear}>Cancel</button>
									</div>
								</form>
							</div>
						</div>
					</div>
						
				</div>
			</div>
			)
	}
}

export default EditVehicles;