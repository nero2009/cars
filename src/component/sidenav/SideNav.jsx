import React, { Component } from 'react';
import './SideNav.css';
import {Link} from 'react-router-dom';
import localforage from 'localforage'
import {USERKEY} from '../../Constants'

class SideNav extends Component{

	constructor(props){
			super(props);
	}
	componentDidMount(){
		
	}
	logOut(e){
		e.preventDefault();
		localforage.removeItem(USERKEY).then(()=>{
			this.props.history.push('/login')
		}).catch(err=>{
			
		});
	}

	render(){
		return (
			<div>
			<div className="fixed-sidebar-left">
			<ul className="nav navbar-nav side-nav nicescroll-bar" style={{overflowX: "hidden"}}>
				<li className="navigation-header">
					<span>Main</span> 
					<i className="zmdi zmdi-more"></i>
				</li>
				<li>
					<Link to="/home/dashboard"><div className="pull-left"><i className="zmdi zmdi-landscape mr-20 active-page"></i><span className="right-nav-text">Dashboard</span></div><div className="clearfix"></div></Link>
				</li>
				<li>
					<a href="javascript:void(0);" data-toggle="collapse" data-target="#d_dr"><div className="pull-left"><i className="zmdi zmdi-car-wash mr-20"></i><span className="right-nav-text">Car Stand</span></div><div className="pull-right"><i className="zmdi zmdi-caret-down"></i></div><div className="clearfix"></div></a>
					<ul id="d_dr" className="collapse collapse-level-1">
						<li>
							<Link  to="/home/car-stand">List</Link>
						</li>
						<li>
							<Link  to="/home/car-stand/create">Add New</Link>
						</li>
					</ul>
				</li>
				<li>
					<a href="javascript:void(0);" data-toggle="collapse" data-target="#dashboard_dr"><div className="pull-left"><i className="zmdi zmdi-sun mr-20"></i><span className="right-nav-text">Dealers</span></div><div className="pull-right"><i className="zmdi zmdi-caret-down"></i></div><div className="clearfix"></div></a>
					<ul id="dashboard_dr" className="collapse collapse-level-1">
						<li>
							<Link  to="/home/dealers">List</Link>
						</li>
					</ul>
				</li>
				<li>
					<a href="javascript:void(0);" data-toggle="collapse" data-target="#ecom_dr"><div className="pull-left"><i className="zmdi zmdi-car mr-20"></i><span className="right-nav-text">Vehicles</span></div><div className="pull-right"><i className="zmdi zmdi-caret-down"></i></div><div className="clearfix"></div></a>
					<ul id="ecom_dr" className="collapse collapse-level-1">
						<li>
							<Link to="/home/vehicles">List</Link>
						</li>
						<li>
							<Link to="/home/vehicles/create">Add New</Link>
						</li>
					</ul>
				</li>
				<li>
							<a href="javascript:void(0);" data-toggle="collapse" data-target="#app_dr"><div className="pull-left"><i className="zmdi zmdi-face mr-20"></i><span className="right-nav-text">Agents </span></div><div className="pull-right"><i className="zmdi zmdi-caret-down"></i></div><div className="clearfix"></div></a>
					<ul id="app_dr" className="collapse collapse-level-1">
						<li>
							<Link to="/home/agents">List</Link>
						</li>
						<li>
						<Link to="/home/agents/create">Add New</Link>
						</li>
					</ul>
				</li>
				<li>
					<a href="javascript:void(0);" data-toggle="collapse" data-target="#app_cs"><div className="pull-left"><i className="zmdi zmdi-male-female mr-20"></i><span className="right-nav-text">Customers </span></div><div className="pull-right"><i className="zmdi zmdi-caret-down"></i></div><div className="clearfix"></div></a>
					<ul id="app_cs" className="collapse collapse-level-1">
						<li>
							<Link to="/home/customer">List</Link>
						</li>
						<li>
						<Link to="/home/customer/create">Add New</Link>
						</li>
					</ul>
				</li>
				<li>
					<a href="javascript:void(0);" data-toggle="collapse" data-target="#sales_dr"><div className="pull-left"><i className="zmdi zmdi-shopping-cart mr-20"></i><span className="right-nav-text">Sales</span></div><div className="pull-right"><i className="zmdi zmdi-caret-down"></i></div><div className="clearfix"></div></a>
					<ul id="sales_dr" className="collapse collapse-level-1">
						<li>
							<Link  to="/home/view-sales">View all sales</Link>
						</li>
						<li>
							<Link  to="/home/create-sales">Add New</Link>
						</li>
					</ul>
				</li>
				<li>
					<a href="javascript:void(0);" data-toggle="collapse" data-target="#message_dr"><div className="pull-left"><i className="zmdi zmdi-email mr-20"></i><span className="right-nav-text">Message(s)</span></div><div className="pull-right"><i className="zmdi zmdi-caret-down"></i></div><div className="clearfix"></div></a>
					<ul id="message_dr" className="collapse collapse-level-1">
						<li>
							<Link  to="/home/view-message">Inbox</Link>
						</li>
						<li>
							<Link to="/home/sent-messages">Sent</Link>
						</li>
						<li>
							<Link  to="/home/create-message">Create message</Link>
						</li>
					</ul>
				</li>
				
				
				<li><hr className="light-grey-hr mb-10"/></li>
				<li className="navigation-header">
					<span>Security and Settings</span> 
					<i className="zmdi zmdi-more"></i>
				</li>
				<li>
					<a href="javascript:void(0);" data-toggle="collapse" data-target="#ui_dr"><div className="pull-left"><i className="zmdi zmdi-lock mr-20"></i><span className="right-nav-text">Security</span></div><div className="pull-right"><i className="zmdi zmdi-caret-down"></i></div><div className="clearfix"></div></a>
					<ul id="ui_dr" className="collapse collapse-level-1 two-col-list">
						<li>
							<a href="#">User Management</a>
						</li>
						<li>
							<a href="#">Your Profile</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="javascript:void(0);" data-toggle="collapse" data-target="#form_dr"><div className="pull-left"><i className="zmdi zmdi-archive mr-20"></i><span className="right-nav-text">Reports</span></div><div className="pull-right"><i className="zmdi zmdi-caret-down"></i></div><div className="clearfix"></div></a>
					<ul id="form_dr" className="collapse collapse-level-1 two-col-list">
						<li>
							<a href="#">Agents Report</a>
						</li>
						<li>
							<a href="#">Sales</a>
						</li>
						<li>
							<a href="#">Car Stand</a>
						</li>
					</ul>
				</li>
				<li className="navigation-header">
					<span>Logout</span> 
					<i className="zmdi zmdi-more"></i>
				</li>
				<li>
					<a href="#" onClick={this.logOut.bind(this)}><div className="pull-left"><i className="zmdi zmdi-rotate-left mr-20"></i><span className="right-nav-text">Logout</span></div><div className="clearfix"></div></a>
				</li>
			</ul>
		</div>

		</div>
			)
	}
}

export default SideNav;