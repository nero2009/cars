import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class EditCarStand extends Component{
	constructor(props) {
		super(props);
		this.handleInputChange=this.handleInputChange.bind(this);
		this.submit=this.submit.bind(this);
		this.clear=this.clear.bind(this);
		this.state={name:'',stateId:'',location:'',receivedStates:[],submitBtn:this.props.submitBtn,disabled:false};

		
	}
	componentDidMount(){
		this.setState({receivedStates:[{Id:1,Name:'Lagos'},{Id:2,Name:'Edo'}]})
		//ajax request here
		const recievedData={name:'foo foo',stateId:1,location:'Ajah'};
		this.setState({recievedData,name:recievedData.name,stateId:recievedData.stateId,location:recievedData.location});
	}
	handleInputChange(e){
		this.setState({[e.target.name]:e.target.value});
	}
	clear(){
		this.setState({name:this.state.recievedData.name,stateId:this.state.recievedData.stateId,location:this.state.recievedData.location})
	}
	submit(){
		this.props.startRequest.call(this);
		const {stateId,name,location}=this.state;
		const data={
				stateId,
				name:name.trim(),
				location:location.trim()
		}
		this.props.failedRequest.call(this,"Car stand not created.");
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
								Name
							</label>
							<input className="form-control" name="name" value={this.state.name} onChange={this.handleInputChange} />
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
						<div className="form-group">
							<label htmlFor="">
								Location
							</label>
							<input className="form-control" name="location" value={this.state.location} onChange={this.handleInputChange}/>
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

export default EditCarStand;