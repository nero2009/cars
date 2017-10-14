import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class CreateMessages extends Component{
	constructor(props) {
		super(props);
		this.handleInputChange=this.handleInputChange.bind(this);
		this.submit=this.submit.bind(this);
		this.clear=this.clear.bind(this);
		this.state={to:'',from:'',subject:'', body:'' }
		
	}

	componentDidMount() {
		
	}

	handleInputChange(e){
		this.setState({[e.target.name]:e.target.value})
	}

	clear(){
		this.setState({to:'',from:'',subject:'',body:''})
	}

	submit(){
		const {to,from,subject,body} = this.state;
		const data ={to,from,subject,body}
		alert(data)
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
											From
										</label>
										<textarea className="form-control" name="from" value={this.state.from} onChange={this.handleInputChange} ></textarea>
									</div>
									<div className="form-group">
										<label htmlFor="">
											To
										</label>
										<textarea className="form-control" name="to" value={this.state.to} onChange={this.handleInputChange} ></textarea>
									</div>
									<div className="form-group">
										<label htmlFor="">
											Subject
										</label>
										<textarea className="form-control" name="subject" value={this.state.subject} onChange={this.handleInputChange} ></textarea>
									</div>
									<div className="form-group">
										<label htmlFor="">
											Body
										</label>
										<textarea className="form-control" name="body" value={this.state.body} rows="7" onChange={this.handleInputChange} ></textarea>
									</div>
									<div className="form-actions mt-10">
										<button type="button" className="btn btn-success  mr-10" onClick={this.submit}> Submit</button>
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