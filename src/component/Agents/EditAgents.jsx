import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class EditAgents extends Component{
constructor(props) {
		super(props);
		this.handleInputChange=this.handleInputChange.bind(this);
		this.submit=this.submit.bind(this);
		this.clear=this.clear.bind(this);
		this.state={name:'',dealershipName:'',contactName:'',phone:'', stateId:'',receivedStates:[],
		err:{dealershipName:'',contactName:'',phone:'',state:'',all: new Set(), disabled:false} }
	}

	componentDidMount() {
		this.setState({receivedStates:[{Id:1,Name:'Lagos'},{Id:2,Name:'Edo'}]})
		const recievedData={name:'foo foo',dealershipName:'Goody',contact:'Yaba',phone:'345930', stateId:1};
		this.setState({recievedData,name:recievedData.name,stateId:recievedData.stateId,dealershipName:recievedData.dealershipName,contact:recievedData.contact
		,phone:recievedData.phone});
	}

	handleInputChange(e){
		this.setState({[e.target.name]:e.target.value})
		this.props.validator({name:e.target.id,value:e.target.value},'agents',this);
        return;
	}
	

	clear(){
		this.setState({name:this.state.recievedData.name,dealershipName:this.state.recievedData.dealershipName,
			contact:this.state.recievedData.contact,phone:this.state.recievedData.phone,stateId:this.state.recievedData.stateId})
	}

	submit(){
		this.props.validatorAll([{name:'dealershipName',value:this.state.dealershipName},
			{name:'contact',value:this.state.contactName},{name:"state",value:this.state.stateId},{name:"phone",value:this.state.phone}],
			'agents',this);
		if (this.state.err.all.size > 0) {
            // this.setState({sending:false,disabled:false})
            return;
        }
		this.props.startRequest.call(this);
		const {name,dealershipName,contactName,phone,stateId} = this.state;
		const data ={name,dealershipName,contactName,phone,stateId}
		this.props.failedRequest.call(this,"Agent not created.");
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
									<div className={this.state.err.dealershipName.length > 0?"has-error form-group":"form-group"}>
										<label htmlFor="" className="control-label">
											Dealership Name
										</label>
										<input className="form-control" name="dealershipName" id="dealershipName" value={this.state.dealershipName} onChange={this.handleInputChange} />
										<span className="error-text">{this.state.err.dealershipName}</span>
									</div>
									<div className={this.state.err.contactName.length > 0?"has-error form-group":"form-group"}>
										<label htmlFor="" className="control-label">
											Contact Name
										</label>
										<input className="form-control" name="contactName" id="contactName" value={this.state.contactName} onChange={this.handleInputChange} />
										<span className="error-text">{this.state.err.contactName}</span>
									</div>
									
									
									<div className={this.state.err.phone.length > 0?"has-error form-group":"form-group"}>
										<label htmlFor="" className="control-label">
											Phone No
										</label>
										<input className="form-control" name="phone" id="phone" value={this.state.phone} onChange={this.handleInputChange} />
										<span className="error-text">{this.state.err.phone}</span>
									</div>
									<div className={this.state.err.state.length > 0?"has-error form-group":"form-group"}>
										<label htmlFor="" className="control-label">
											State
										</label>
										<select className="form-control" id="state" value={this.state.stateId} onChange={this.handleInputChange} name="stateId">
										  <option disabled value="">Select a state</option>
										  {this.state.receivedStates.map((item,index)=><option value={item.Id} key={++index}>{item.Name}</option>)}
										  
										</select>
										<span className="error-text">{this.state.err.state}</span>
									</div>
									
									<div className="form-actions mt-10">
										<button type="button" className="btn btn-success  mr-10" onClick={this.submit} disabled={this.state.disabled || this.state.err.all.size > 0}> Submit</button>
										<button type="button" className="btn btn-default" onClick={this.clear}>Cancel</button>
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