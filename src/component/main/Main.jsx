import React, { Component } from 'react';
import './Main.css';
import {Link,Route} from 'react-router-dom';
import AuthHoc from '../hocs/ShellHoc.jsx';
import AuthorizedLayout from '../layouts/Authorized.jsx'
import UnauthorizedLayout from '../layouts/Unauthorized.jsx'
import swal from 'sweetalert';


class Main extends Component{

	constructor(props){
			super(props);
	}
	componentDidMount(){
		
	}

	render(){
		return (
			<div>
			<Route path="/" exact render={props=><UnauthorizedLayout swal={swal} {...this.props} {...props} submitBtn={`Submit`}/> }  />
			<Route path="/home" component={AuthHoc(AuthorizedLayout)} />
			<Route  path="/login" render={props=><UnauthorizedLayout swal={swal} {...this.props} {...props} submitBtn={`Submit`}/> } />
			</div>
			)
	}
}

export default Main;