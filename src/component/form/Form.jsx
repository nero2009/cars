import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import TextInput from '../textInput.jsx'
class Form extends Component{

	constructor(props) {
		super(props);
		this.state={
			value:'',
			
			
		}
		
	}

	componentDidMount() {
		
	}

	handleChange =(e)=>{
		this.setState({
			value:e.target.value
		})
	}

	render(){
		return(
			<div>
				<TextInput handleChange={this.handleChange} type='text' name='name' id='name' value={this.state.value} label='Input'/>
			</div>
			)
	}
}

export default Form;