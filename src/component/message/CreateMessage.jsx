import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Select from 'react-select';
import TextInput from '../textInput'
import TextAreaComponent from '../TextAreaComponent'

import 'react-select/dist/react-select.css';

class CreateMessages extends Component{
	constructor(props) {
		super(props);
		this.state={to:'',from:'',subject:'', body:'',submitBtn:this.props.submitBtn,mailingList:[],
		err:{to:'',subject:'', body:'',general:'',all:new Set()},disabled:false }
		
	}
	componentDidMount() {
		const { MAILINGLIST, ACCOUNTS} = this.props.Constants;

		this.props.ServiceObj.getItem(ACCOUNTS, MAILINGLIST,this.props.user.id)
		.then(({data}) => {
			const selectAllArray=[{value:'all',label:'all'}];
			const recievedArray= data.map(item=>({value:item.email,label:item.name,isAdmin:item.isAdmin?item.isAdmin:false }));
			const mailingList = selectAllArray.concat(recievedArray);
			this.setState({mailingList});
		})
		.catch(err => {

		})
	}
	handleInputChange=(e)=>{
		this.setState({[e.target.name]:e.target.value})
		this.props.validator({name:e.target.id,value:e.target.value},'Message',this);
        return;
	}

	clear=()=>{
		this.setState({to:'',from:'',subject:'',body:''})
	}
	handleSelectChange=(data)=>{
		const containsAll=data.find(item=>item.value === "all");
		if(containsAll){
			this.setState({to:[containsAll]})
			return;
		}
		const containsAdmin=data.find(item=>item.isAdmin === true);
		if(containsAdmin){
			this.setState({to:[containsAdmin]})
			return;
		}
		this.setState({to:data})
		this.props.validator({name:"to",value:data},'Message',this);
        return;
	}

	submit=()=>{
		this.props.validatorAll([{name:'to',value:this.state.to},{name:"subject",value:this.state.subject},
			{name:"body",value:this.state.body}],'Message',this);
        if (this.state.err.all.size > 0) {
            // this.setState({sending:false,disabled:false})
            return;
        }
		this.props.startRequest.call(this);

		const {to,subject,body} = this.state;
		const from = this.props.user.email;
		const {SENDMAIL,MESSAGES}=this.props.Constants;
		let TO;

		if (to.length == 1) {
			TO = to[0].value;
		}
		else{
			TO= to.map(item=>item.value);
		}
		
		const data ={to:TO,from,subject,body};
		this.props.ServiceObj.createItem(data,MESSAGES,SENDMAIL)
		.then(({data})=>{
			this.props.successRequest.call(this,"Message sent.");
			this.setState({sending:false});
			this.clear.call(this)
		})
		.catch(err=>{
			this.setState({sending:false});
			this.props.failedRequest.call(this,"Message not sent.");

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
									<div className={this.state.err.to.length > 0?"has-error form-group":"form-group"}>
										<label htmlFor="" className="control-label">
											To
										</label>
										<Select  clearable={true} multi={true} id="to" name="to" value={this.state.to} onChange={this.handleSelectChange.bind(this)} options={this.state.mailingList}/>
										<span className="error-text">{this.state.err.to}</span>
									</div>
									<div className={this.state.err.subject.length > 0?"has-error form-group":"form-group"}>
										<TextInput label="Subject" name="subject" id="subject" value={this.state.subject} handleChange={this.handleInputChange}/>
										<span className="error-text">{this.state.err.subject}</span>
									</div>
									<div className={this.state.err.body.length > 0?"has-error form-group":"form-group"}>
										
										<TextAreaComponent label="Body" name="body" id="body" value={this.state.body} handleChange={this.handleInputChange}/>

										<span className="error-text">{this.state.err.body}</span>
									</div>
									<div className="form-actions mt-10">
										<button type="button" className="btn btn-success  mr-10" disabled={this.state.disabled || this.state.err.all.size > 0} onClick={this.submit}> Submit</button>
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

export default CreateMessages;