import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import TextInput from '../textInput'
import FormContainer from '../FormContainer'
import Validator from 'input-validator-react'
import SelectComponent from '../SelectComponent'

class CreateAgents extends Component{
	constructor(props) {
		super(props);
		
		this.state={data:{fullName:'',email:'',contactNo:'',allowMobile:''},receivedStates:[],
		err:{fullName:'',allowMobile:'',email:'',contactNo:'',all: new Set()},
		disabled:false,submitBtn:this.props.submitBtn
		}
	}

	componentDidMount() {
		console.log(this.props)
	}
 
	handleInputChange=(e)=>{
		this.setState({data:{...this.state.data,[e.target.name]:e.target.value}});
		//this.props.validator({name:e.target.id,value:e.target.value},'agent',this);
        return;
	}

	clear=()=>{
		this.setState({data:{fullName:'',email:'',contactNo:'',allowMobile:''}})
	}

	submit=()=>{
		this.props.validatorAll([{name:'fullName',value:this.state.data.fullName},
			{name:'contactNo',value:this.state.data.contactNo},{name:"email",value:this.state.data.email},{name:"allowMobile",value:this.state.data.allowMobile}],
			'agent',this);
		if (this.state.err.all.size > 0) {
            // this.setState({sending:false,disabled:false})
            return;
        }
		this.props.startRequest.call(this);
		const {data}=this.state;
		const {SALESPEOPLE,CREATEWITHDEALERUSER}=this.props.Constants;
		this.props.ServiceObj.createItem({...data,userId:this.props.user.id},SALESPEOPLE,CREATEWITHDEALERUSER)
		.then(({data})=>{
			this.props.successRequest.call(this,"Agent created.");
			this.clear.call(this)
		})
		.catch(err=>{
			this.props.failedRequest.call(this,"Agent not created.");
		
		})
	}



	render(){
		let selectValues =[{name:"Select",value:""},{name:"Yes",value:"1"},{name:"No",value:"0"}]
		return(
			<FormContainer>
				
						<div className={this.state.err.fullName.length > 0?"has-error form-group":"form-group"}>
							<TextInput label="Name" name="fullName" type="text" id="fullName" value={this.state.data.fullName} handleChange={this.handleInputChange}/>
							<span className="error-text">{this.state.err.fullName}</span>
						</div>
						<div className={this.state.err.email.length > 0?"has-error form-group":"form-group"}>
							<TextInput label="Email" name="email" type="email" id="email" value={this.state.data.email} handleChange={this.handleInputChange}/>
							<span className="error-text">{this.state.err.email}</span>
						</div>
						
						
						<div className={this.state.err.contactNo.length > 0?"has-error form-group":"form-group"}>
							<TextInput label="Contact Number" name="contactNo" type="text" id="contactNo" value={this.state.data.contactNo} handleChange={this.handleInputChange}/>
							<span className="error-text">{this.state.err.contactNo}</span>
						</div>

						<div className={this.state.err.allowMobile.length >0?"has-error form-group":"form-group"}>
							<SelectComponent label="allow Mobile" name="allowMobile" id="allowMobile" value={this.state.data.allowMobile} handleChange={this.handleInputChange} selectValues={selectValues}/>
							<span className="error-text">{this.state.err.allowMobile}</span>
						</div>
						
						<div className="form-actions mt-10">
							<button type="button" className="btn btn-success  mr-10" onClick={this.submit} disabled={this.state.disabled || this.state.err.all.size > 0}> {this.state.submitBtn}</button>
							<button type="button" className="btn btn-default" onClick={this.clear}>Cancel</button>
						</div>
				
			</FormContainer>
								
							
			);
	}
}

export default CreateAgents;