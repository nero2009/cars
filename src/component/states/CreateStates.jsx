import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class CreateStates extends Component{
	constructor(props) {
		super(props);
		this.handleInputChange=this.handleInputChange.bind(this);
		this.submit=this.submit.bind(this);
		this.clear=this.clear.bind(this);
		this.state={name:'',stateId:'' }
		
	}

	componentDidMount() {
		
	}

	handleInputChange(e){
		this.setState({[e.target.name]:e.target.value})
	}

	clear(){
		this.setState({name:'',stateId:''})
	}

	submit(){
		const {name,stateId} = this.state;
		const data ={name,stateId}
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
											StateId
										</label>
										<input className="form-control" name="stateid" value={this.state.stateid} onChange={this.handleInputChange} />
									</div>
									<div className="form-group">
										<label htmlFor="">
											Name
										</label>
										<input className="form-control" name="name" value={this.state.stateid} onChange={this.handleInputChange} />
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
			)

	}
}

export default CreateStates