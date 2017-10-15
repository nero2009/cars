import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class CreateSales extends Component{
	constructor(props) {
		super(props);
		this.handleInputChange=this.handleInputChange.bind(this);
		this.submit=this.submit.bind(this);
		this.clear=this.clear.bind(this);
		this.state={cost:'',amount:'',balance:''}
		
	}

	componentDidMount() {
		
	}

	handleInputChange(e){
		this.setState({[e.target.name]:e.target.value})
	}

	clear(){
		this.setState({cost:'',amount:'',balance:''})
	}

	submit(){
		const {cost,amount,balance} = this.state;
		const data ={cost,amount,balance}
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
											Cost
										</label>
										<textarea className="form-control" name="cost" value={this.state.cost} onChange={this.handleInputChange}></textarea>
									</div>
									<div className="form-group">
										<label htmlFor="">
											Amount
										</label>
										<textarea className="form-control" name="amount" value={this.state.amount} onChange={this.handleInputChange}></textarea>
									</div>
									<div className="form-group">
										<label htmlFor="">
											Balance
										</label>
										<textarea className="form-control" name="balance" value={this.state.balance} onChange={this.handleInputChange}></textarea>
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

export default CreateSales;