import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import TextInput from '../textInput'
import FormContainer from '../FormContainer'

class CreateCarStand extends Component{
	constructor(props) {
		super(props);
		
		this.state={data:{name:'',stateId:'',location:'',userId: 0},receivedStates:[],requestingStates:true,
		submitBtn:this.props.submitBtn,
		err:{name:'',location:'',state:'',general:'',all:new Set()},
		disabled:false};

		
	}
	componentDidMount(){
		this.props.ServiceObj.getAllStates()
		.then(({data})=>{
			this.setState({receivedStates:data,requestingStates:false});
		})
		.catch(err=>{

		})
		
	}
	handleInputChange=(e)=>{
		this.setState({data:{...this.state.data,[e.target.name]:e.target.value}});
		this.props.validator({name:e.target.id,value:e.target.value},'car stand',this);
        return;
	}
	clear=()=>{
		this.setState({name:'',stateId:'',location:''})
	}
	reset=()=>{
		this.setState({data:{...this.state.data,name:'',stateId:'',location:''}})
	}
	submit=()=>{
		this.props.validatorAll([{name:'name',value:this.state.data.name},{name:'location',value:this.state.data.location},{name:"state",value:this.state.data.stateId}],'car stand',this);
        if (this.state.err.all.size > 0) {
            // this.setState({sending:false,disabled:false})
            return;
        }
		this.props.startRequest.call(this);
		const {data}=this.state;
		const {CARSTAND,USERCREATE}=this.props.Constants;
		this.props.ServiceObj.createItem(data,CARSTAND,USERCREATE)
		.then(({data})=>{
			this.props.successRequest.call(this,"Car stand created.");
			this.reset.call(this)
		})
		.catch(err=>{
			this.props.failedRequest.call(this,"Car stand not created.");
		
		})
        
		
		
	}

	render(){
		return(
			<FormContainer>
							
						<div className={this.state.err.name.length > 0?"has-error form-group":"form-group"} >
							
							<TextInput label="Name" type="text" id="name" name="name" value={this.state.data.name} handleChange={this.handleInputChange}/>
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
						<div className={this.state.err.location.length > 0?"has-error form-group":"form-group"}>
							<TextInput label="Location" name="location" id="location" value={this.state.data.location} handleChange={this.handleInputChange}/>
							<span className="error-text">{this.state.err.location}</span>
						</div>

						<div className="form-actions mt-10">
							<button type="button" className="btn btn-success  mr-10" disabled={this.state.disabled || this.state.err.all.size > 0} onClick={this.submit}> {this.state.submitBtn}</button>
							<button type="button" className="btn btn-default" disabled={this.state.disabled} onClick={this.clear}>Cancel</button>
						</div>
					
			</FormContainer>
			
							
					
			)
	}
}

export default CreateCarStand;