import React, { Component } from 'react';
import './Main.css';
import {Link,Route} from 'react-router-dom';
import AuthHoc from '../hocs/ShellHoc.jsx';
import AuthorizedLayout from '../layouts/Authorized.jsx'
import asyncComponent from "../hocs/AsyncComponent";
//import UnauthorizedLayout from '../layouts/Unauthorized.jsx'
import swal from 'sweetalert';


const AsyncUnauthorizedLayout = asyncComponent(() => import('../layouts/Unauthorized.jsx'));
console.log(AsyncUnauthorizedLayout)

class Main extends Component{

	constructor(props){
			super(props);
	}
	componentDidMount(){
		
	}

	render(){
		return (
			<div>
			<Route path="/" exact component={AsyncUnauthorizedLayout}  />
			<Route path="/home" component={AuthorizedLayout} />
			<Route  path="/login" component={AsyncUnauthorizedLayout} />
			</div>
			)
	}
}

export default Main;