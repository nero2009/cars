import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class CreateUser extends Component{
	constructor(props) {
		super(props);
		this.handleInputChange=this.handleInputChange.bind(this);
		this.submit=this.submit.bind(this);
		this.clear=this.clear.bind(this);
		this.state={name:'',email:'',password:'',submitBtn:this.props.submitBtn,disabled:false,
		err:{name:'',email:'',password:'',general:'',all: new Set()}};
	}

	componentDidMount(){
		
	}
	handleInputChange(e){
		this.setState({[e.target.name]:e.target.value});
		this.props.validator({name:e.target.id,value:e.target.value},'User',this);
        return;
	}
	clear(){
		this.setState({name:'',email:'',password:''})
	}
	submit(){
		this.props.validatorAll([{name:'name',value:this.state.name},{name:'email',value:this.state.email},
									{name:"password",value:this.state.password}],'User',this);
        if (this.state.err.all.size > 0) {
            // this.setState({sending:false,disabled:false})
            return;
        }
		
		this.props.startRequest.call(this);
		const {name,email,password}=this.state;
		const data={
				name,
				email,
				password
		}
        
		this.props.failedRequest.call(this,"User not created.");

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
						
						
						<div className={this.state.err.name.length > 0?"has-error form-group":"form-group"}>
							<label htmlFor="" className="control-label">
								Name
							</label>
							<input className="form-control" name="name" id="name" value={this.state.name} onChange={this.handleInputChange} />
							<span className="error-text">{this.state.err.name}</span>
						</div>

						<div className={this.state.err.email.length > 0?"has-error form-group":"form-group"}>
							<label htmlFor="" className="control-label">
								Email
							</label>
							<input className="form-control" name="email" id="email" type="email" value={this.state.location} onChange={this.handleInputChange}/>
							<span className="error-text">{this.state.err.email}</span>
						</div>


						<div className={this.state.err.password.length > 0?"has-error form-group":"form-group"}>
							<label htmlFor="" className="control-label">
								Password
							</label>
							<input className="form-control" name="password" id="password" type="password" value={this.state.location} onChange={this.handleInputChange}/>
							<span className="error-text">{this.state.err.password}</span>
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
export default CreateUser;