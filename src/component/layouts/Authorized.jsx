import React, { Component } from 'react';
import './Authorized.css';
import Nav from '../nav/Nav.jsx'
import Footer from '../footer/Footer.jsx'
import Home from '../home/Home.jsx'
import CarStand from '../carstand/CarStand.jsx'
import Login from '../login/Login.jsx';
import SideNav from '../sidenav/SideNav.jsx';
import CreateCarStand from '../carstand/CreateCarStand.jsx'
import CreateAgents from '../Agents/CreateAgents.jsx'
import CreateMessage from '../message/CreateMessage.jsx'
import ViewMessage from '../message/ViewMessage.jsx'
import ViewAgents from '../Agents/ViewAgents.jsx'
import CreateSales from '../sales/CreateSales.jsx'
import ViewSales from '../sales/ViewSales.jsx'
import {Link,Route,Switch,Redirect} from 'react-router-dom';
 


class Authorized extends Component{

	constructor(props){
			super(props);
			this.state={name:'',stateId:'',location:'',receivedStates:[]};
	}
	componentDidMount(){
		
	}

	render(){
		return (
			<div>
				
				<div className="wrapper theme-1-active pimary-color-red" >
				<Nav/>
				<SideNav/>
				<main className="page-wrapper" style={{minHeight:window.innerHeight}}>
            <div className="container-fluid pt-25">
				<div className="row">
					<div className="col-md-12">
						<Switch>
				        <Route path={this.props.match.path} exact component={Home} />
				         <Route path={`${this.props.match.path}/car-stand`} component={CarStand} />
				        <Route path={`${this.props.match.path}/foo`} component={Login} />
				        <Route path={`${this.props.match.path}/create-car-stand`} component={CreateCarStand}/>
				        <Route path={`${this.props.match.path}/create-agents`} component={CreateAgents}/>
				        <Route path={`${this.props.match.path}/view-agents`} component={ViewAgents}/>
				        <Route path={`${this.props.match.path}/create-message`} component={CreateMessage}/>
				        <Route path={`${this.props.match.path}/view-message`} component={ViewMessage}/>
				        <Route path={`${this.props.match.path}/create-sales`} component={CreateSales}/>
				        <Route path={`${this.props.match.path}/view-sales`} component={ViewSales}/>
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