import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class EditDealer extends Component{
	constructor(props) {
		super(props);
		this.state={data:{stateId:'',contactNumber:'',contactName:'',dealershipName:''},receivedStates:[],submitBtn:this.props.submitBtn,requestingStates:true,
		err:{name:'',contactName:'',contactNumber:'',state:'',general:'',all:new Set()},
		disabled:false};
		
	}
	componentWillMount(){
		
	}
	componentDidMount(){
        const id=this.props.match.params.id;
		const {GET,DEALERS}=this.props.Constants;
		this.props.ServiceObj.getItem(DEALERS,GET,id)
		.then(({data})=>{
			this.setState({data:{...data},receivedData:{...data}});
		})
		.catch(err=>{

		})

		this.props.ServiceObj.getAllStates()
		.then(({data})=>{
			this.setState({receivedStates:data,requestingStates:false});
		})
		.catch(err=>{

		})
		
	}
	handleInputChange=(e)=>{
		this.setState({data:{...this.state.data,[e.target.name]:e.target.value}});
		this.props.validator({name:e.target.id,value:e.target.value},'dealer',this);
        return;
	}
	clear=()=>{
		this.setState({data:this.state.receivedData})
	}
	submit=()=>{
		//this.props.validatorAll([{name:'name',value:this.state.name},{name:'location',value:this.state.location},{name:"state",value:this.state.stateId}],'car stand',this);
        if (this.state.err.all.size > 0) {
            // this.setState({sending:false,disabled:false})
            return;
        }
		this.props.startRequest.call(this);
		const {data}=this.state;
		const {DEALERS,UPDATE}=this.props.Constants;
		

		this.props.ServiceObj.updateItem(DEALERS,UPDATE,{...data,userId:this.props.user.id},data.Id)
		.then(({data})=>{
			this.props.successRequest.call(this,"Dealer updated.");
			setTimeout(() => this.props.history.goBack(), 0);
			
		})
		.catch(err=>{
			this.props.failedRequest.call(this,"Dealer not updated.");
		
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
						
						
						<div className={this.state.err.name.length > 0?"has-error form-group":"form-group"} >
							<label htmlFor="" className="control-label">
								Name
							</label>
							<input className="form-control" id="name" name="dealershipName" value={this.state.data.dealershipName} onChange={this.handleInputChange} />
							<span className="error-text">{this.state.err.name}</span>
						</div>

						<div className={this.state.err.state.length > 0?"has-error form-group":"form-group"}>
							<label htmlFor="" className="control-label">
								State
							</label>
							<select className="form-control" id="state" value={this.state.data.stateId} onChange={this.handleInputChange} name="stateId">
							<option disabled value="">{this.state.requestingStates?'loading...':'Select a state'}</option>
							{this.state.receivedStates.map((item,index)=><option value={item.stateId} key={++index}>{item.name}</option>)}
							
						  </select>
							<span className="error-text">{this.state.err.state}</span>
						</div>
						<div className={this.state.err.contactName.length > 0?"has-error form-group":"form-group"}>
							<label htmlFor="" className="control-label">
								Contact Name
							</label>
							<input className="form-control" id="contactName" name="contactName" value={this.state.data.contactName} onChange={this.handleInputChange}/>
							<span className="error-text">{this.state.err.contactName}</span>
						</div>
                        <div className={this.state.err.contactNumber.length > 0?"has-error form-group":"form-group"}>
							<label htmlFor="" className="control-label">
								Contact Phone
							</label>
							<input className="form-control" id="contactNumber" name="contactNumber" value={this.state.data.contactNumber} onChange={this.handleInputChange}/>
							<span className="error-text">{this.state.err.contactNumber}</span>
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

export default EditDealer;