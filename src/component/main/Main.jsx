import React, { Component } from 'react';
import './Main.css';
import {Link,Route} from 'react-router-dom';
import AuthHoc from '../hocs/ShellHoc.jsx';
import AuthorizedLayout from '../layouts/Authorized.jsx'
import UnauthorizedLayout from '../layouts/Unauthorized.jsx'


class Main extends Component{

	constructor(props){
			super(props);
	}
	componentDidMount(){
		
	}

	render(){
		return (
			<div>
			<Route path="/" exact component={UnauthorizedLayout}  />
			<Route path="/home" component={AuthHoc(AuthorizedLayout)} />
			<Route  path="/dashboard" component={UnauthorizedLayout} />
			</div>
			)
	}
}

export default Main;