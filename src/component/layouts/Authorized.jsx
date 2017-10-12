import React, { Component } from 'react';
import './Authorized.css';
import Nav from '../nav/Nav.jsx'
import Footer from '../footer/Footer.jsx'
import Home from '../home/Home.jsx'
import CarStand from '../carstand/CarStand.jsx'
import Login from '../login/Login.jsx';
import SideNav from '../sidenav/SideNav.jsx'
import {Link,Route,Switch,Redirect} from 'react-router-dom';
 


class Authorized extends Component{

	constructor(props){
			super(props);
	}
	componentDidMount(){
		
	}

	render(){
		return (
			<div>
				<div className="preloader-it">
				<div className="la-anim-1"></div>
			</div>
				<div className="wrapper theme-1-active pimary-color-red" >
				<Nav/>
				<SideNav/>
				<main className="page-wrapper">
            <div className="container-fluid pt-25">
				<div className="row">
					<div className="col-md-12">
						<Switch>
				        <Route path={this.props.match.path} exact component={Home} />
				         <Route path={`${this.props.match.path}/car-stand`} component={CarStand} />
				        <Route path={`${this.props.match.path}/foo`} component={Login} />
				        <Redirect to="/" />
				     </Switch>
					</div>
					
				</div>
			</div>
				     <Footer/>
				</main>
		      	
			</div>
			</div>
			
			)
	}
}

export default Authorized;