import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class CreateMessages extends Component{
	constructor(props) {
		super(props);
		this.handleInputChange=this.handleInputChange.bind(this);
		this.submit=this.submit.bind(this);
		this.clear=this.clear.bind(this);
		this.state={to:'',from:'',subject:'', body:'',submitBtn:this.props.submitBtn,
		err:{to:'',from:'',subject:'', body:'',general:'',all:new Set()},disabled:false }
		
	}

	componentDidMount() {
		
	}

	handleInputChange(e){
		this.setState({[e.target.name]:e.target.value})
		this.props.validator({name:e.target.id,value:e.target.value},'Message',this);
        return;
	}

	clear(){
		this.setState({to:'',from:'',subject:'',body:''})
	}

	submit(){
		this.props.validatorAll([{name:'to',value:this.state.to},{name:'from',value:this.state.from},{name:"subject",value:this.state.subject},
			{name:"body",value:this.state.body}],'Message',this);
        if (this.state.err.all.size > 0) {
            // this.setState({sending:false,disabled:false})
            return;
        }
		this.props.startRequest.call(this);
		const { data } = this.state;
		const { MESSAGES, CREATE } = this.props.Constants;
		this.props.ServiceObj.createItem({ ...data }, MESSAGES, CREATE)
		.then(({ data }) => {
			this.props.successRequest.call(this, "Message Sent.");
			this.clear.call(this)
		})
		.catch(err => {
			this.props.failedRequest.call(this, "Message not Sent.");

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
									<div className={this.state.err.from.length > 0?"has-error form-group":"form-group"}>
										<label htmlFor="" className="control-label">
											From
										</label>
										<input className="form-control" id="from" name="from" value={this.state.from} onChange={this.handleInputChange} />
										<span className="error-text">{this.state.err.from}</span>
									</div>
									<div className={this.state.err.to.length > 0?"has-error form-group":"form-group"}>
										<label htmlFor="" className="control-label">
											To
										</label>
										<input className="form-control" id="to" name="to" value={this.state.to} onChange={this.handleInputChange} />
										<span className="error-text">{this.state.err.to}</span>
									</div>
									<div className={this.state.err.subject.length > 0?"has-error form-group":"form-group"}>
										<label htmlFor="" className="control-label">
											Subject
										</label>
										<input className="form-control" id="subject" name="subject" value={this.state.subject} onChange={this.handleInputChange} />
										<span className="error-text">{this.state.err.subject}</span>
									</div>
									<div className={this.state.err.body.length > 0?"has-error form-group":"form-group"}>
										<label htmlFor="" className="control-label">
											Body
										</label>
										<input className="form-control" id="body" name="body" value={this.state.body} rows="7" onChange={this.handleInputChange} />
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