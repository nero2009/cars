import React, { Component } from 'react';
import './Authorized.css';
import Nav from '../nav/Nav.jsx'
import Footer from '../footer/Footer.jsx'
import Home from '../home/Home.jsx'
import CarStand from '../carstand/CarStand.jsx'
import Login from '../login/Login.jsx';
import SideNav from '../sidenav/SideNav.jsx';
import CreateCarStand from '../carstand/CreateCarStand.jsx'
import EditCarStand from '../carstand/EditCarStand.jsx'
import CreateAgents from '../Agents/CreateAgents.jsx'
import CreateMessage from '../message/CreateMessage.jsx'
import ViewMessage from '../message/ViewMessage.jsx'
import ViewAgents from '../Agents/ViewAgents.jsx'
import CreateSales from '../sales/CreateSales.jsx'
import ViewSales from '../sales/ViewSales.jsx'
import CreateVehicles from '../vehicles/CreateVehicles.jsx'
import ViewVehicles from '../vehicles/ViewVehicles.jsx'
import EditVehicles from '../vehicles/EditVehicles.jsx'
import {Link,Route,Switch,Redirect} from 'react-router-dom';
 
const routeMap= path=>{
	const obj ={
		['/home/create-car-stand']:'Create car stand'
	}
	
	return obj[path];
}
const Breadcrumbs = (props) => (
    <div className="">
        <ol className="breadcrumb">
            <Route path='/:path' component={BreadcrumbsItem} />
        </ol>
    </div>
)

const BreadcrumbsItem = ({ ...rest, match }) => (
    <span>
        <li className={match.isExact ? 'active bc-link' : ""}>
        {
        	match.isExact && 
               <span> {routeMap(match.url) ||  match.url.split('/').pop()}</span>
           

        }
           {
           	! match.isExact && <Link to={match.url || ''}>
               <span> {routeMap(match.url) ||  match.url.split('/').pop()}</span>
            </Link>
           } 
        </li>
        <Route path={`${match.url}/:path`} component={BreadcrumbsItem} />
    </span>
)


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
				<div className="row heading-bg">
					<div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
					  <h4 className="txt-dark">{routeMap(this.props.location.pathname)}</h4>
					</div>
					<div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
					  <Breadcrumbs/>
					</div>
				</div>
            <div className="container-fluid pt-25">
				<div className="row">
					<div className="col-md-12">
						<Switch>
				        <Route path={this.props.match.path} exact render={(props)=>(<Home {...props} {...this.props}/>)} />
				         <Route path={`${this.props.match.path}/car-stand`} render={(props)=>(<CarStand {...props} {...this.props}/>)}/>
				        <Route path={`${this.props.match.path}/foo`}  render={(props)=>(<Login {...props} {...this.props}/>)}/>
				        <Route path={`${this.props.match.path}/create-car-stand`}  render={(props)=>(<CreateCarStand {...props} {...this.props}/>)}/>
				        <Route path={`${this.props.match.path}/edit-car-stand/:id`}  render={(props)=>(<EditCarStand {...props} {...this.props}/>)}/>
				        <Route path={`${this.props.match.path}/create-agents`} render={(props)=>(<CreateAgents {...props} {...this.props}/>)}/>
				        <Route path={`${this.props.match.path}/view-agents`} render={(props)=>(<ViewAgents {...props} {...this.props}/>)}/>
				        <Route path={`${this.props.match.path}/create-message`} render={(props)=>(<CreateMessage {...props} {...this.props}/>)}/>
				        <Route path={`${this.props.match.path}/view-message`} render={(props)=>(<ViewMessage {...props} {...this.props}/>)}/>
				        <Route path={`${this.props.match.path}/create-sales`} render={(props)=>(<CreateSales {...props} {...this.props}/>)}/>
				        <Route path={`${this.props.match.path}/view-sales`} render={(props)=>(<ViewSales {...props} {...this.props}/>)}/>
				        <Route path={`${this.props.match.path}/create-vehicles`}  render={(props)=>(<CreateVehicles {...props} {...this.props}/>)}/>
				        <Route path={`${this.props.match.path}/view-vehicles`}  render={(props)=>(<ViewVehicles {...props} {...this.props}/>)}/>
				        <Route path={`${this.props.match.path}/edit-vehicle/:id`}  render={(props)=>(<EditVehicles {...props} {...this.props}/>)}/>
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