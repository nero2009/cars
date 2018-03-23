import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import TextInput from '../textInput'
import TextAreaComponent from '../TextAreaComponent'
import FormContainer from '../FormContainer'

class CreateCustomer extends Component{
	constructor(props) {
		super(props);
		
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
	handleInputChange=(e)=>{
		this.setState({data:{...this.state.data,[e.target.name]:e.target.value}});
		this.props.validator({name:e.target.id,value:e.target.value},'customer',this);
        return;
	}
	reset=()=>{
		this.setState({data:{firstName:'',lastName:'',otherName:'',contactNo:'',email:'',address:'',stateId:'',dealerId:this.props.user.dealerId || 0}})
	}
	submit=()=>{
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
			<FormContainer>
						
						<div className={this.state.err.firstName.length > 0?"has-error form-group":"form-group"} >
							<TextInput label="First Name" name="firstName" id="firstName" value={this.state.data.firstName} handleChange={this.handleInputChange}/>
							<span className="error-text">{this.state.err.firstName}</span>
						</div>

                        <div className={this.state.err.lastName.length > 0?"has-error form-group":"form-group"} >
							<TextInput label="Last Name" name="lastName" id="lastName" value={this.state.data.lastName} handleChange={this.handleInputChange}/>
							<span className="error-text">{this.state.err.lastName}</span>
						</div>

                        <div className={this.state.err.otherName.length > 0?"has-error form-group":"form-group"} >
							<TextInput label="Other Name" name="otherName" id="otherName" value={this.state.data.otherName} handleChange={this.handleInputChange}/>
							<span className="error-text">{this.state.err.otherName}</span>
						</div>

                        <div className={this.state.err.email.length > 0?"has-error form-group":"form-group"} >
							<TextInput label="Email" name="email" id="email" value={this.state.data.email} handleChange={this.handleInputChange}/>
							<span className="error-text">{this.state.err.email}</span>
						</div>

                        <div className={this.state.err.contactNo.length > 0?"has-error form-group":"form-group"} >
							<TextInput label="Phone" name="contactNo" id="contactNo" value={this.state.data.contactNo} handleChange={this.handleInputChange}/>
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
							<TextAreaComponent label="Addres" name="address" id="address" value={this.state.data.address} handleChange={this.handleInputChange}/>
							<span className="error-text">{this.state.err.address}</span>
						</div>
						
						<div className="form-actions mt-10">
							<button type="button" className="btn btn-success  mr-10" disabled={this.state.disabled || this.state.err.all.size > 0} onClick={this.submit}> {this.state.submitBtn}</button>
							<button type="button" className="btn btn-default" disabled={this.state.disabled} onClick={this.reset}>Cancel</button>
						</div>
			</FormContainer>
						
			)
	}
}

export default CreateCustomer;