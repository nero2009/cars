import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class CreateAgents extends Component{
	constructor(props) {
		super(props);
		this.handleInputChange=this.handleInputChange.bind(this);
		this.submit=this.submit.bind(this);
		this.clear=this.clear.bind(this);
		this.state={data:{fullName:'',email:'',contactNo:'',allowMobile:''},receivedStates:[],
		err:{fullName:'',allowMobile:'',email:'',contactNo:'',all: new Set()},
		disabled:false,submitBtn:this.props.submitBtn
		}
	}

	componentDidMount() {
		const id=this.props.match.params.id;
		const {GET,SALESPEOPLE}=this.props.Constants;
		this.props.ServiceObj.getItem(SALESPEOPLE,GET,id)
		.then(({data})=>{
			this.setState({data:{...data},receivedData:{...data}});
		})
		.catch(err=>{

		})
	}

	handleInputChange(e){
		this.setState({data:{...this.state.data,[e.target.name]:e.target.value}});
		this.props.validator({name:e.target.id,value:e.target.value},'agent',this);
        return;
	}

	clear(){
		this.setState({data:{fullName:'',email:'',contactNo:'',allowMobile:''}})
	}

	submit(){
		this.props.validatorAll([{name:'fullName',value:this.state.data.fullName},
			{name:'contactNo',value:this.state.data.contactNo},{name:"email",value:this.state.data.email},{name:"allowMobile",value:this.state.data.allowMobile}],
			'agent',this);
		if (this.state.err.all.size > 0) {
            // this.setState({sending:false,disabled:false})
            return;
        }
		this.props.startRequest.call(this);
		const {data}=this.state;
		const {SALESPEOPLE,UPDATE}=this.props.Constants;
		this.props.ServiceObj.createItem({...data},SALESPEOPLE,UPDATE)
		.then(({data})=>{
			this.props.successRequest.call(this,"Agent updated.");
			setTimeout(() => this.props.history.goBack(), 0);
		})
		.catch(err=>{
			this.props.failedRequest.call(this,"Agent not updated.");
		
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
									<div className={this.state.err.fullName.length > 0?"has-error form-group":"form-group"}>
										<label htmlFor="" className="control-label">
											Name
										</label>
										<input className="form-control" name="fullName" id="fullName" value={this.state.data.fullName} onChange={this.handleInputChange} />
										<span className="error-text">{this.state.err.fullName}</span>
									</div>
									<div className={this.state.err.email.length > 0?"has-error form-group":"form-group"}>
										<label htmlFor="" className="control-label">
											Email
										</label>
										<input className="form-control" type="email" name="email" id="email" value={this.state.data.email} onChange={this.handleInputChange} />
										<span className="error-text">{this.state.err.email}</span>
									</div>
									
									
									<div className={this.state.err.contactNo.length > 0?"has-error form-group":"form-group"}>
										<label htmlFor="" className="control-label">
											Contact Number
										</label>
										<input className="form-control" name="contactNo" id="contactNo" value={this.state.data.contactNo} onChange={this.handleInputChange} />
										<span className="error-text">{this.state.err.contactNo}</span>
									</div>

									<div className={this.state.err.allowMobile.length >0?"has-error form-group":"form-group"}>
									    <label className="control-label" >allow Mobile</label>
									    <select className="form-control" id="allowMobile" value={this.state.data.allowMobile} onChange={this.handleInputChange} name="allowMobile">
										<option disabled value="">Select</option>
										<option value="1" >Yes</option>
										<option value="0">No</option>
									    </select>
									    <span className="error-text">{this.state.err.allowMobile}</span>
									 </div>
									
									
									<div className="form-actions mt-10">
										<button type="button" className="btn btn-success  mr-10" onClick={this.submit} disabled={this.state.disabled || this.state.err.all.size > 0}> {this.state.submitBtn}</button>
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