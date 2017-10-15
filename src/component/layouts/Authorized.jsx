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
import ViewAgents from '../Agents/ViewAgents.jsx'
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
				
				<div className="wrapper theme-1-active pimary-color-red" >
				<Nav/>
				<SideNav/>
				<main className="page-wrapper" style={{minHeight:window.innerHeight}}>
            <div className="container-fluid pt-25">
				<div className="row">
					<div className="col-md-12">
						<Switch>
				        <Route path={this.props.match.path} exact render={(props)=>(<Home {...props} {...this.props}/>)} />
				         <Route path={`${this.props.match.path}/car-stand`} render={(props)=>(<CarStand {...props} {...this.props}/>)}/>
				        <Route path={`${this.props.match.path}/foo`}  render={(props)=>(<Login {...props} {...this.props}/>)}/>
				        <Route path={`${this.props.match.path}/create-car-stand`}  render={(props)=>(<CreateCarStand {...props} {...this.props}/>)}/>
				        <Route path={`${this.props.match.path}/create-agents`} render={(props)=>(<CreateAgents {...props} {...this.props}/>)}/>
				        <Route path={`${this.props.match.path}/view-agents`} render={(props)=>(<ViewAgents {...props} {...this.props}/>)}/>
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