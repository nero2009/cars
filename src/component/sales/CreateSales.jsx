import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class CreateSales extends Component{
	constructor(props) {
		super(props);
		this.handleInputChange=this.handleInputChange.bind(this);
		this.submit=this.submit.bind(this);
		this.clear=this.clear.bind(this);
		this.state={cost:'',amount:'',balance:'',submitBtn:this.props.submitBtn,
		err:{cost:'',amount:'',balance:'',general:'',all:new Set()},disabled:false}
		
	}

	componentDidMount() {
		
	}

	handleInputChange(e){
		this.setState({[e.target.name]:e.target.value})
		this.props.validator({name:e.target.id,value:e.target.value},'Sales',this);
        return;
	}

	clear(){
		this.setState({cost:'',amount:'',balance:''})
	}

	submit(){
		this.props.validatorAll([{name:'cost',value:this.state.cost},{name:'amount',value:this.state.amount},{name:"balance",value:this.state.balance}],'Sales',this);
        if (this.state.err.all.size > 0) {
            // this.setState({sending:false,disabled:false})
            return;
        }
        this.props.startRequest.call(this);	
		const {cost,amount,balance} = this.state;
		const data ={cost,amount,balance}
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
									<div className={this.state.err.cost.length > 0?"has-error form-group":"form-group"}>
										<label htmlFor="" className="control-label">
											Cost
										</label>
										<input className="form-control" name="cost" id="cost" value={this.state.cost} onChange={this.handleInputChange}/>
										<span className="error-text">{this.state.err.cost}</span>
									</div>
									<div className={this.state.err.amount.length > 0?"has-error form-group":"form-group"}>
										<label htmlFor="" className="control-label">
											Amount
										</label>
										<input className="form-control" name="amount" id="amount" value={this.state.amount} onChange={this.handleInputChange}/>
										<span className="error-text">{this.state.err.amount}</span>
									</div>
									<div className={this.state.err.balance.length > 0?"has-error form-group":"form-group"}>
										<label htmlFor="" className="control-label">
											Balance
										</label>
										<input className="form-control" name="balance" id="balance" value={this.state.balance} onChange={this.handleInputChange}/>
										<span className="error-text">{this.state.err.balance}</span>
									</div>
									
									<div className="form-actions mt-10">
										<button type="button" className="btn btn-success  mr-10" onClick={this.submit} disabled={this.state.disabled || this.state.err.all.size > 0} > Submit</button>
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