import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class CreateStates extends Component{
	constructor(props) {
		super(props);
		this.handleInputChange=this.handleInputChange.bind(this);
		this.submit=this.submit.bind(this);
		this.clear=this.clear.bind(this);
		this.state={name:'',stateId:'',submitBtn:this.props.submitBtn,
				 err:{name:'',state:'',general:'',all:new Set()},disabled:false}
		
	}

	componentDidMount() {
		
	}

	handleInputChange(e){
		this.setState({[e.target.name]:e.target.value})
		this.props.validator({name:e.target.id,value:e.target.value},'State',this);
        return;
	}

	clear(){
		this.setState({name:'',stateId:''})
	}

	submit(){
		this.props.validatorAll([{name:'name',value:this.state.name},{name:"state",value:this.state.stateId}],'User',this);
        if (this.state.err.all.size > 0) {
            // this.setState({sending:false,disabled:false})
            return;
        }
		this.props.startRequest.call(this);
		const {name,stateId} = this.state;
		const data ={name,stateId}
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
									<div className={this.state.err.name.length > 0?"has-error form-group":"form-group"}>
										<label htmlFor="" className="control-label">
											StateId
										</label>
										<input className="form-control" id="state" name="stateid" value={this.state.stateid} onChange={this.handleInputChange} />
										<span className="error-text">{this.state.err.state}</span>
									</div>
									<div className={this.state.err.name.length > 0?"has-error form-group":"form-group"} >
										<label htmlFor="" className="control-label">
											Name
										</label>
										<input className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} />
										<span className="error-text">{this.state.err.name}</span>
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

export default CreateStates