import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class EditCarStand extends Component{
	constructor(props) {
		super(props);
		this.handleInputChange=this.handleInputChange.bind(this);
		this.submit=this.submit.bind(this);
		this.clear=this.clear.bind(this);
		this.state={name:'',stateId:'',location:'',receivedStates:[],submitBtn:this.props.submitBtn,requestingStates:true,
		err:{name:'',location:'',state:'',general:'',all:new Set()},
		disabled:false};
		
	}
	componentWillMount(){
		const id=this.props.match.params.id;
		const {GET,CARSTAND}=this.props.Constants;
		this.props.ServiceObj.getItem(CARSTAND,GET,id)
		.then(({data:{stateId,name,location,Id,recordStatus}})=>{
			this.setState({name,stateId,location,Id,recordStatus});
		})
		.catch(err=>{

		})
	}
	componentDidMount(){
		this.props.ServiceObj.getAllStates()
		.then(({data})=>{
			this.setState({receivedStates:data,requestingStates:false});
		})
		.catch(err=>{

		})
		
	}
	handleInputChange(e){
		this.setState({[e.target.name]:e.target.value});
		this.props.validator({name:e.target.id,value:e.target.value},'car stand',this);
        return;
	}
	clear(){
		this.setState({name:this.state.recievedData.name,stateId:this.state.recievedData.stateId,location:this.state.recievedData.location})
	}
	submit(){
		this.props.validatorAll([{name:'name',value:this.state.name},{name:'location',value:this.state.location},{name:"state",value:this.state.stateId}],'car stand',this);
        if (this.state.err.all.size > 0) {
            // this.setState({sending:false,disabled:false})
            return;
        }
		this.props.startRequest.call(this);
		const {stateId,name,location,Id,recordStatus}=this.state;
		const {CARSTAND,UPDATE}=this.props.Constants;
		const data={
				dealerId:"04ca8dc5-1ac2-4d7c-9566-d5343ec7d813",
				stateId,
				name:name.trim(),
				location:location.trim(),
				recordStatus
		}

		this.props.ServiceObj.updateItem(CARSTAND,UPDATE,data,Id)
		.then(({data})=>{
			this.props.successRequest.call(this,"Car stand updated.");
			setTimeout(() => this.props.history.goBack(), 0);
			
		})
		.catch(err=>{
			this.props.failedRequest.call(this,"Car stand not updated.");
		
		})
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
						
						
						<div className={this.state.err.name.length > 0?"has-error form-group":"form-group"} >
							<label htmlFor="" className="control-label">
								Name
							</label>
							<input className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} />
							<span className="error-text">{this.state.err.name}</span>
						</div>

						<div className={this.state.err.state.length > 0?"has-error form-group":"form-group"}>
							<label htmlFor="" className="control-label">
								State
							</label>
							<select className="form-control" id="state" value={this.state.stateId} onChange={this.handleInputChange} name="stateId">
							<option disabled value="">{this.state.requestingStates?'loading...':'Select a state'}</option>
							{this.state.receivedStates.map((item,index)=><option value={item.stateId} key={++index}>{item.name}</option>)}
							
						  </select>
							<span className="error-text">{this.state.err.state}</span>
						</div>
						<div className={this.state.err.location.length > 0?"has-error form-group":"form-group"}>
							<label htmlFor="" className="control-label">
								Location
							</label>
							<input className="form-control" id="location" name="location" value={this.state.location} onChange={this.handleInputChange}/>
							<span className="error-text">{this.state.err.location}</span>
						</div>

						<div className="form-actions mt-10">
							<button type="button" className="btn btn-success  mr-10" disabled={this.state.disabled || this.state.err.all.size > 0} onClick={this.submit}> {this.state.submitBtn}</button>
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