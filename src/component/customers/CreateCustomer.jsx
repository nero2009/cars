import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class CreateCustomer extends Component{
	constructor(props) {
		super(props);
		this.handleInputChange=this.handleInputChange.bind(this);
		this.submit=this.submit.bind(this);
		this.state={data:{firstName:'',lastName:'',otherName:'',contactNo:'',email:'',address:'',stateId:'',dealerId:this.props.user.dealerId || 0},receivedStates:[],requestingStates:true,
		submitBtn:this.props.submitBtn,
		err:{firstName:'',lastName:'',otherName:'',contactNo:'',address:'',state:'',email:'',general:'',all:new Set()},
		disabled:false};

		
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
		this.setState({data:{...this.state.data,[e.target.name]:e.target.value}});
		this.props.validator({name:e.target.id,value:e.target.value},'customer',this);
        return;
	}
	reset(){
		this.setState({data:{firstName:'',lastName:'',otherName:'',contactNo:'',email:'',address:'',stateId:'',dealerId:this.props.user.dealerId || 0}})
	}
	submit(){
        this.props.validatorAll([{name:'firstName',value:this.state.data.firstName},
        {name:'lastName',value:this.state.data.lastName},{name:'otherName',value:this.state.data.otherName},
        {name:'contactNo',value:this.state.data.contactNo},{name:'address',value:this.state.data.address},
        {name:"state",value:this.state.data.stateId}],'customer',this);
        if (this.state.err.all.size > 0) {
            // this.setState({sending:false,disabled:false})
            return;
        }
		this.props.startRequest.call(this);
		const {data}=this.state;
		const {CUSTOMERS,CREATE}=this.props.Constants;
		this.props.ServiceObj.createItem(data,CUSTOMERS,CREATE)
		.then(({data})=>{
			this.props.successRequest.call(this,"Customer created.");
			this.reset.call(this)
		})
		.catch(err=>{
			this.props.failedRequest.call(this,"Customer not created.");
		
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
						
						
						<div className={this.state.err.firstName.length > 0?"has-error form-group":"form-group"} >
							<label htmlFor="" className="control-label">
								First Name
							</label>
							<input className="form-control" id="firstName" name="firstName" value={this.state.data.firstName} onChange={this.handleInputChange} />
							<span className="error-text">{this.state.err.firstName}</span>
						</div>

                        <div className={this.state.err.lastName.length > 0?"has-error form-group":"form-group"} >
							<label htmlFor="" className="control-label">
								Last Name
							</label>
							<input className="form-control" id="lastName" name="lastName" value={this.state.data.lastName} onChange={this.handleInputChange} />
							<span className="error-text">{this.state.err.lastName}</span>
						</div>

                        <div className={this.state.err.otherName.length > 0?"has-error form-group":"form-group"} >
							<label htmlFor="" className="control-label">
								Other Name
							</label>
							<input className="form-control" id="otherName" name="otherName" value={this.state.data.otherName} onChange={this.handleInputChange} />
							<span className="error-text">{this.state.err.otherName}</span>
						</div>

                        <div className={this.state.err.email.length > 0?"has-error form-group":"form-group"} >
							<label htmlFor="" className="control-label">
								Email
							</label>
							<input className="form-control" type="email" id="email" name="email" value={this.state.data.email} onChange={this.handleInputChange} />
							<span className="error-text">{this.state.err.email}</span>
						</div>

                        <div className={this.state.err.contactNo.length > 0?"has-error form-group":"form-group"} >
							<label htmlFor="" className="control-label">
								Phone
							</label>
							<input className="form-control" id="contactNo" name="contactNo" value={this.state.data.contactNo} onChange={this.handleInputChange} />
							<span className="error-text">{this.state.err.contactNo}</span>
						</div>

						<div className={this.state.err.state.length > 0?"has-error form-group":"form-group"}>
							<label htmlFor="" className="control-label">
								State
							</label>
							<select className="form-control" id="state" value={this.state.data.stateId} onChange={this.handleInputChange} name="stateId">
							  <option disabled value="">{this.state.requestingStates?'loading...':'Select a state'}</option>
							  {this.state.receivedStates.map((item,index)=><option value={item.stateId} key={++index}>{item.name}</option>)}
							  
							</select>
							<span className="error-text">{this.state.err.state}</span>
						</div>

                        <div className={this.state.err.address.length > 0?"has-error form-group":"form-group"}>
							<label htmlFor="" className="control-label">
								Address
							</label>
							<textarea className="form-control" id="address" value={this.state.data.address} onChange={this.handleInputChange} name="address">
							</textarea>
							<span className="error-text">{this.state.err.address}</span>
						</div>
						
						<div className="form-actions mt-10">
							<button type="button" className="btn btn-success  mr-10" disabled={this.state.disabled || this.state.err.all.size > 0} onClick={this.submit}> {this.state.submitBtn}</button>
							<button type="button" className="btn btn-default" disabled={this.state.disabled} onClick={this.reset}>Cancel</button>
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

export default CreateCustomer;