import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class EditAgents extends Component{
	constructor(props) {
		super(props);
		this.handleInputChange=this.handleInputChange.bind(this);
		this.submit=this.submit.bind(this);
		this.clear=this.clear.bind(this);
		this.state={name:'',dealershipName:'',contact:'',phone:'', stateId:'',receivedStates:[],submitBtn:this.props.submitBtn,disabled:false}
	}

	componentDidMount() {
		const recievedData={name:'foo foo',dealershipName:'Goody',contact:'Yaba',phone:'345930', stateId:1};
		this.setState({recievedData,name:recievedData.name,stateId:recievedData.stateId,dealershipName:recievedData.dealershipName,contact:recievedData.contact
		,phone:recievedData.phone});
	}

	handleInputChange(e){
		this.setState({[e.target.name]:e.target.value})
	}

	clear(){
		this.setState({name:this.state.recievedData.name,dealershipName:this.state.recievedData.dealershipName,
			contact:this.state.recievedData,contact,phone:this.state.recievedData.phone,stateId:this.state.recievedData.stateId})
	}

	submit(){
		this.props.startRequest.call(this);
		const {name,dealershipName,contact,phone,stateId} = this.state;
		const data ={name,dealershipName,contact,phone,stateId}
		alert(data)
		this.props.failedRequest.call(this,"Agents not created.");
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
											Dealership Name
										</label>
										<input className="form-control" name="dealershipName" value={this.state.dealershipName} onChange={this.handleInputChange} />
									</div>
									<div className="form-group">
										<label htmlFor="">
											Contact Name
										</label>
										<input className="form-control" name="contact" value={this.state.contact} onChange={this.handleInputChange} />
									</div>
									
									
									<div className="form-group">
										<label htmlFor="">
											Phone No
										</label>
										<input className="form-control" name="phone" value={this.state.phone} onChange={this.handleInputChange} />
									</div>
									<div className="form-group">
										<label htmlFor="">
											State
										</label>
										<select className="form-control" value={this.state.stateId} onChange={this.handleInputChange} name="stateId">
										  <option disabled value="">Select a state</option>
										  {this.state.receivedStates.map((item,index)=><option value={item.Id} key={++index}>{item.Name}</option>)}
										  
										</select>
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
			);
	}
}

export default EditAgents;