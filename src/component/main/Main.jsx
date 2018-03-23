import React, { Component } from 'react';
import './Main.css';
import {Link,Route} from 'react-router-dom';
import AuthHoc from '../hocs/ShellHoc.jsx';
import AuthorizedLayout from '../layouts/Authorized.jsx'
import asyncComponent from "../hocs/AsyncComponent";
//import UnauthorizedLayout from '../layouts/Unauthorized.jsx'
import swal from 'sweetalert';
import Login from '../layouts/Login.jsx'
import Auth from '../layouts/Auth.jsx'
import Form from '../form/Form.jsx'


const AsyncUnauthorizedLayout = asyncComponent(() => import('../layouts/Unauthorized.jsx'));
const AsyncLogin = asyncComponent(() => import('../layouts/Login.jsx'));

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
			<Route path="/login1" component={AsyncLogin}/>
			<Route path="/auth" component={Auth}/>
			<Route path="/form" component={Form}/>
			</div>
			)
	}
}

export default Main;