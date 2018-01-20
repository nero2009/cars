import React, { Component } from 'react';
import './Main.css';
import {Link,Route} from 'react-router-dom';
import AuthHoc from '../hocs/ShellHoc.jsx';
import AuthorizedLayout from '../layouts/Authorized.jsx'
import asyncComponent from "../hocs/AsyncComponent";
//import UnauthorizedLayout from '../layouts/Unauthorized.jsx'
import swal from 'sweetalert';


const AsyncUnauthorizedLayout = asyncComponent(() => import('../layouts/Unauthorized.jsx'));

class Main extends Component{

	constructor(props){
			super(props);
	}
	componentDidMount(){
		
	}

	render(){
		return (
			<div>
			<Route path="/" exact render={(props)=><AsyncUnauthorizedLayout  {...props} swal={swal}  {...this.props}/>}  />
			<Route path="/home" component={AuthorizedLayout} />
			<Route  path="/login" render={(props)=><AsyncUnauthorizedLayout  {...props} swal={swal} {...this.props}/>} />
			</div>
			)
	}
}

export default Main;