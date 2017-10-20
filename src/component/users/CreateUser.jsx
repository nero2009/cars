import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class CreateUser extends Component{
	constructor(props) {
		super(props);
		this.handleInputChange=this.handleInputChange.bind(this);
		this.submit=this.submit.bind(this);
		this.clear=this.clear.bind(this);
		this.state={name:'',email:'',password:'',submitBtn:this.props.submitBtn,disabled:false};
	}

	componentDidMount(){
		
	}
	handleInputChange(e){
		this.setState({[e.target.name]:e.target.value});
	}
	clear(){
		this.setState({name:'',email:'',password:''})
	}
	submit(){
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
						
						
						<div className="form-group">
							<label htmlFor="">
								Name
							</label>
							<input className="form-control" name="name" value={this.state.name} onChange={this.handleInputChange} />
						</div>

						<div className="form-group">
							<label htmlFor="">
								Email
							</label>
							<input className="form-control" name="email" type="email" value={this.state.location} onChange={this.handleInputChange}/>
						</div>


						<div className="form-group">
							<label htmlFor="">
								Password
							</label>
							<input className="form-control" name="password" type="password" value={this.state.location} onChange={this.handleInputChange}/>
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
export default CreateUser;