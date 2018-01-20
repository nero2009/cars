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
import EditAgents from '../Agents/EditAgents.jsx'
import CreateMessage from '../message/CreateMessage.jsx'
import ViewMessage from '../message/ViewMessage.jsx'
import SentMessages from '../message/SentMessages.jsx'
import ViewAgents from '../Agents/ViewAgents.jsx'
import CreateSales from '../sales/CreateSales.jsx'
import EditSales from '../sales/EditSales.jsx'
import ViewSales from '../sales/ViewSales.jsx'
import CreateVehicles from '../vehicles/CreateVehicles.jsx'
import ViewVehicles from '../vehicles/ViewVehicles.jsx'
import EditVehicles from '../vehicles/EditVehicles.jsx'
import DashboardIndex from '../dashboard/DashboardIndex.jsx'
import CarStandView from '../carstand/CarStandView.jsx'
import Dealer from '../dealers/Dealers.jsx'
import EditDealer from '../dealers/EditDealer.jsx'
import DealerView from '../dealers/DealersView.jsx'

import CreateCustomer from '../customers/CreateCustomer.jsx'
import Customers from '../customers/Customer.jsx'
import EditCustomer from '../customers/EditCustomer.jsx'

import {Link,Route,Switch,Redirect} from 'react-router-dom'
import Axios from 'axios'
import localforage from 'localforage'
import Preloader from '../loaders/Preloader.jsx'
import  {BASEURI,TOKENKEY, USERKEY} from '../../Constants'
import {Service} from '../../Service'
import {failedRequest,startRequest,successRequest,validatorAll,validator} from '../../CommonFunc'
import swal from 'sweetalert';
import * as Constants from '../../Constants'

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
				<span>{routeMap(match.url) ||  match.url.split('/').pop()}</span>&nbsp;/
            </Link>
           } 
        </li>
        <Route path={`${match.url}/:path`} component={BreadcrumbsItem} />
    </span>
)


class Authorized extends Component{

	constructor(props){
			super(props);
			this.state={isSignedIn:false,user:{},token:'',fakeProps:{},sending:true,page:{}};
	}
	componentWillMount(){
		const LoaderButton=<span><i className="fa fa-circle-o-notch fa-spin"></i> Loading</span>;
		localforage.getItem(USERKEY)
		.then((user)=>{
			if (user && user.token) {
				//console.log(Service(BASEURI,Axios,user.token))
				const ServiceObj=Service(BASEURI,Axios,user.token);
				this.setState({user})
				this.setState({isSignedIn:true,sending:false,fakeProps:{swal,ServiceObj,user:this.state.user,Constants,
					 failedRequest,
					 validator,validatorAll,LoaderButton,startRequest,successRequest,submitBtn:`Submit`}})
				return;
			}
			
			this.props.history.push('/login')
			
		})
		.catch(err=>{

		})
	}
	componentDidMount(){
		
	}

	render(){
		return (
			<div>
				{
					!this.state.isSignedIn && <Preloader/>
				}
				{
					this.state.isSignedIn && 
					<div className="wrapper theme-1-active pimary-color-red" >
					<Nav {...this.props}/>
					<SideNav {...this.props}/>
					<main className="page-wrapper" style={{minHeight:window.innerHeight}}>
					<div className="row heading-bg">
						<div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
						  <h4 className="txt-dark">{routeMap(this.props.location.pathname)}</h4>
						</div>
						<div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
						  <Breadcrumbs/>
						</div>
					</div>
				<div className="container-fluid ">
					<div className="row">
						<div className="col-md-12">
							<Switch>
							<Route path={this.props.match.path} exact render={(props)=>(<DashboardIndex {...props} {...this.state.fakeProps} {...this.props} match={props.match}/>)} />
							 <Route path={`${this.props.match.path}/car-stand`} exact render={(props)=>(<CarStand {...props} {...this.state.fakeProps} {...this.props} match={props.match}/>)}/>
							 <Route path={`${this.props.match.path}/car-stand/create`}   render={(props)=>(<CreateCarStand {...props} {...this.state.fakeProps} {...this.props} match={props.match}/>)}/>
							 <Route path={`${this.props.match.path}/car-stand/:id`} exact render={(props)=>(<CarStandView {...props} {...this.state.fakeProps} {...this.props} match={props.match}/>)}/>
							 <Route path={`${this.props.match.path}/car-stand/edit/:id`}  render={(props)=>(<EditCarStand {...props} {...this.state.fakeProps} {...this.props} match={props.match}/>)}/>

							<Route path={`${this.props.match.path}/customer/create`}   render={(props)=>(<CreateCustomer {...props} {...this.state.fakeProps} {...this.props} match={props.match}/>)}/>
							<Route path={`${this.props.match.path}/customer`} exact render={(props)=>(<Customers {...props} {...this.state.fakeProps} {...this.props} match={props.match}/>)}/>
							<Route path={`${this.props.match.path}/customer/edit/:id`}  render={(props)=>(<EditCustomer {...props} {...this.state.fakeProps} {...this.props} match={props.match}/>)}/>

							<Route path={`${this.props.match.path}/agents/create`} render={(props)=>(<CreateAgents {...props} {...this.state.fakeProps} {...this.props} match={props.match}/>)}/>
							<Route path={`${this.props.match.path}/agents/edit/:id`} render={(props)=>(<EditAgents {...props} {...this.state.fakeProps} {...this.props} match={props.match}/>)}/>
							<Route path={`${this.props.match.path}/agents`} exact render={(props)=>(<ViewAgents {...props} {...this.state.fakeProps} {...this.props} match={props.match}/>)}/>

							<Route path={`${this.props.match.path}/dealers`} exact render={(props)=>(<Dealer {...props} {...this.state.fakeProps} {...this.props} match={props.match}/>)}/>
							<Route path={`${this.props.match.path}/dealers/edit/:id`}  render={(props)=>(<EditDealer {...props} {...this.state.fakeProps} {...this.props} match={props.match}/>)}/>
							<Route path={`${this.props.match.path}/dealers/:id`}  render={(props)=>(<DealerView {...props} {...this.state.fakeProps} {...this.props} match={props.match}/>)}/>

							<Route path={`${this.props.match.path}/create-message`} render={(props)=>(<CreateMessage {...props} {...this.state.fakeProps} {...this.props} match={props.match}/>)}/>
							<Route path={`${this.props.match.path}/view-message`} render={(props) => (<ViewMessage {...props} {...this.state.fakeProps} {...this.props} match={props.match} />)} />
							<Route path={`${this.props.match.path}/sent-messages`} render={(props)=>(<SentMessages {...props} {...this.state.fakeProps} {...this.props} match={props.match}/>)}/>
							<Route path={`${this.props.match.path}/create-sales`} render={(props)=>(<CreateSales {...props} {...this.state.fakeProps} {...this.props} match={props.match}/>)}/>
							<Route path={`${this.props.match.path}/edit-sales/:id`} render={(props)=>(<EditSales {...props} {...this.state.fakeProps} {...this.props} match={props.match}/>)}/>
							<Route path={`${this.props.match.path}/view-sales`} render={(props)=>(<ViewSales {...props} {...this.state.fakeProps} {...this.props} match={props.match}/>)}/>
							<Route path={`${this.props.match.path}/vehicles/create`}  render={(props)=>(<CreateVehicles {...props} {...this.state.fakeProps} {...this.props} match={props.match}/>)}/>
							<Route path={`${this.props.match.path}/vehicles/edit/:id`}  render={(props)=>(<EditVehicles {...props} {...this.state.fakeProps} {...this.props} match={props.match}/>)}/>
							<Route path={`${this.props.match.path}/vehicles`} exact  render={(props)=>(<ViewVehicles {...props} {...this.state.fakeProps} {...this.props} match={props.match}/>)}/>
							
							<Route path={`${this.props.match.path}/dashboard`}  render={(props)=>(<DashboardIndex {...props} {...this.state.fakeProps} {...this.props} match={props.match}/>)}/>
							<Redirect to="/" />
						 </Switch>
						</div>
						
					</div>
				</div>
						 <Footer/>
					</main>
					  
				</div>
				}
				
				
			</div>
			
			)
	}
}

export default Authorized;