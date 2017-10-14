import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class CreateAgents extends Component{
	constructor(props) {
		super(props);
		this.handleInputChange=this.handleInputChange.bind(this);
		this.submit=this.submit.bind(this);
		this.clear=this.clear.bind(this);
		this.state={name:'',dealershipName:'',contact:'',phone:'', stateId:'',receivedStates:[] }
	}

	componentDidMount() {
		
	}

	handleInputChange(e){
		this.setState({[e.target.name]:e.target.value})
	}

	clear(){
		this.setState({name:'',dealershipName:'',contact:'',phone:'',stateId:''})
	}

	submit(){
		const {name,dealershipName,contact,phone,stateId} = this.state;
		const data ={name,dealershipName,contact,phone,stateId}
		alert(data)
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
										<button type="button" className="btn btn-success  mr-10" onClick={this.submit}> Submit</button>
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

export default CreateAgents;