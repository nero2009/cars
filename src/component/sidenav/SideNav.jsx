import React, { Component } from 'react';
import './SideNav.css';
import {Link} from 'react-router-dom';


class SideNav extends Component{

	constructor(props){
			super(props);
	}
	componentDidMount(){
		
	}

	render(){
		return (
			<div>
			<div className="fixed-sidebar-left">
			<ul className="nav navbar-nav side-nav nicescroll-bar">
				<li className="navigation-header">
					<span>Main</span> 
					<i className="zmdi zmdi-more"></i>
				</li>
				<li>
					<a href="merchant-dasboard.html"><div className="pull-left"><i className="zmdi zmdi-landscape mr-20 active-page"></i><span className="right-nav-text">Dashboard</span></div><div className="clearfix"></div></a>
				</li>
				<li>
					<a href="javascript:void(0);" data-toggle="collapse" data-target="#dashboard_dr"><div className="pull-left"><i className="zmdi zmdi-car-wash mr-20"></i><span className="right-nav-text">Car Stand</span></div><div className="pull-right"><i className="zmdi zmdi-caret-down"></i></div><div className="clearfix"></div></a>
					<ul id="dashboard_dr" className="collapse collapse-level-1">
						<li>
							<a  href="#">Car Stand List</a>
						</li>
						<li>
							<a  href="#">Add New</a>
						</li>
					</ul>
				</li>
				<li>
					<a className="active" href="javascript:void(0);" data-toggle="collapse" data-target="#ecom_dr"><div className="pull-left"><i className="zmdi zmdi-car mr-20"></i><span className="right-nav-text">Vehicles</span></div><div className="pull-right"><i className="zmdi zmdi-caret-down"></i></div><div className="clearfix"></div></a>
					<ul id="ecom_dr" className="collapse collapse-level-1">
						<li>
							<a href="#">Vehicle List</a>
						</li>
						<li>
							<a href="#">Add New</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="javascript:void(0);" data-toggle="collapse" data-target="#app_dr"><div className="pull-left"><i className="zmdi zmdi-male-female mr-20"></i><span className="right-nav-text">Agents </span></div><div className="pull-right"><i className="zmdi zmdi-caret-down"></i></div><div className="clearfix"></div></a>
					<ul id="app_dr" className="collapse collapse-level-1">
						<li>
							<a href="#">Agent List</a>
						</li>
						<li>
							<a href="#">Add New</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="#"><div className="pull-left"><i className="zmdi zmdi-shopping-cart mr-20"></i><span className="right-nav-text">Sales</span></div><div className="pull-right"><span className="label label-success">3</span></div><div className="clearfix"></div></a>
				</li>
				<li>
					<a href="#"><div className="pull-left"><i className="zmdi zmdi-email mr-20"></i><span className="right-nav-text">Message(s)</span></div><div className="pull-right"><span className="label label-warning">8</span></div><div className="clearfix"></div></a>
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
					<a href="../login.html"><div className="pull-left"><i className="zmdi zmdi-rotate-left mr-20"></i><span className="right-nav-text">Logout</span></div><div className="clearfix"></div></a>
				</li>
			</ul>
		</div>

		<div className="fixed-sidebar-right">
			<ul className="right-sidebar">
				<li>
					<div  className="tab-struct custom-tab-1">
						<ul role="tablist" className="nav nav-tabs" id="right_sidebar_tab">
							<li className="active" role="presentation"><a aria-expanded="true"  data-toggle="tab" role="tab" id="chat_tab_btn" href="#chat_tab">chat</a></li>
							<li role="presentation" className=""><a  data-toggle="tab" id="messages_tab_btn" role="tab" href="#messages_tab" aria-expanded="false">messages</a></li>
							<li role="presentation" className=""><a  data-toggle="tab" id="todo_tab_btn" role="tab" href="#todo_tab" aria-expanded="false">todo</a></li>
						</ul>
						<div className="tab-content" id="right_sidebar_content">
							<div  id="chat_tab" className="tab-pane fade active in" role="tabpanel">
								<div className="chat-cmplt-wrap">
									<div className="chat-box-wrap">
										<div className="add-friend">
											<a href="javascript:void(0)" className="inline-block txt-grey">
												<i className="zmdi zmdi-more"></i>
											</a>	
											<span className="inline-block txt-dark">users</span>
											<a href="javascript:void(0)" className="inline-block text-right txt-grey"><i className="zmdi zmdi-plus"></i></a>
											<div className="clearfix"></div>
										</div>
										<form role="search" className="chat-search pl-15 pr-15 pb-15">
											<div className="input-group">
												<input type="text" id="example-input1-group2" name="example-input1-group2" className="form-control" placeholder="Search"/>
												<span className="input-group-btn">
												<button type="button" className="btn  btn-default"><i className="zmdi zmdi-search"></i></button>
												</span>
											</div>
										</form>
										<div id="chat_list_scroll">
											<div className="nicescroll-bar">
												<ul className="chat-list-wrap">
													<li className="chat-list">
														<div className="chat-body">
															<a  href="javascript:void(0)">
																<div className="chat-data">
																	<img className="user-img img-circle"  src="dist/img/user.png" alt="user"/>
																	<div className="user-data">
																		<span className="name block capitalize-font">Clay Masse</span>
																		<span className="time block truncate txt-grey">No one saves us but ourselves.</span>
																	</div>
																	<div className="status away"></div>
																	<div className="clearfix"></div>
																</div>
															</a>
															<a  href="javascript:void(0)">
																<div className="chat-data">
																	<img className="user-img img-circle"  src="dist/img/user1.png" alt="user"/>
																	<div className="user-data">
																		<span className="name block capitalize-font">Evie Ono</span>
																		<span className="time block truncate txt-grey">Unity is strength</span>
																	</div>
																	<div className="status offline"></div>
																	<div className="clearfix"></div>
																</div>
															</a>
															<a  href="javascript:void(0)">
																<div className="chat-data">
																	<img className="user-img img-circle"  src="dist/img/user2.png" alt="user"/>
																	<div className="user-data">
																		<span className="name block capitalize-font">Madalyn Rascon</span>
																		<span className="time block truncate txt-grey">Respect yourself if you would have others respect you.</span>
																	</div>
																	<div className="status online"></div>
																	<div className="clearfix"></div>
																</div>
															</a>
															<a  href="javascript:void(0)">
																<div className="chat-data">
																	<img className="user-img img-circle"  src="dist/img/user3.png" alt="user"/>
																	<div className="user-data">
																		<span className="name block capitalize-font">Mitsuko Heid</span>
																		<span className="time block truncate txt-grey">I’m thankful.</span>
																	</div>
																	<div className="status online"></div>
																	<div className="clearfix"></div>
																</div>
															</a>
															<a  href="javascript:void(0)">
																<div className="chat-data">
																	<img className="user-img img-circle"  src="dist/img/user.png" alt="user"/>
																	<div className="user-data">
																		<span className="name block capitalize-font">Ezequiel Merideth</span>
																		<span className="time block truncate txt-grey">Patience is bitter.</span>
																	</div>
																	<div className="status offline"></div>
																	<div className="clearfix"></div>
																</div>
															</a>
															<a  href="javascript:void(0)">
																<div className="chat-data">
																	<img className="user-img img-circle"  src="dist/img/user1.png" alt="user"/>
																	<div className="user-data">
																		<span className="name block capitalize-font">Jonnie Metoyer</span>
																		<span className="time block truncate txt-grey">Genius is eternal patience.</span>
																	</div>
																	<div className="status online"></div>
																	<div className="clearfix"></div>
																</div>
															</a>
															<a  href="javascript:void(0)">
																<div className="chat-data">
																	<img className="user-img img-circle"  src="dist/img/user2.png" alt="user"/>
																	<div className="user-data">
																		<span className="name block capitalize-font">Angelic Lauver</span>
																		<span className="time block truncate txt-grey">Every burden is a blessing.</span>
																	</div>
																	<div className="status away"></div>
																	<div className="clearfix"></div>
																</div>
															</a>
															<a  href="javascript:void(0)">
																<div className="chat-data">
																	<img className="user-img img-circle"  src="dist/img/user3.png" alt="user"/>
																	<div className="user-data">
																		<span className="name block capitalize-font">Priscila Shy</span>
																		<span className="time block truncate txt-grey">Wise to resolve, and patient to perform.</span>
																	</div>
																	<div className="status online"></div>
																	<div className="clearfix"></div>
																</div>
															</a>
															<a  href="javascript:void(0)">
																<div className="chat-data">
																	<img className="user-img img-circle"  src="dist/img/user4.png" alt="user"/>
																	<div className="user-data">
																		<span className="name block capitalize-font">Linda Stack</span>
																		<span className="time block truncate txt-grey">Our patience will achieve more than our force.</span>
																	</div>
																	<div className="status away"></div>
																	<div className="clearfix"></div>
																</div>
															</a>
														</div>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="recent-chat-box-wrap">
										<div className="recent-chat-wrap">
											<div className="panel-heading ma-0">
												<div className="goto-back">
													<a  id="goto_back" href="javascript:void(0)" className="inline-block txt-grey">
														<i className="zmdi zmdi-chevron-left"></i>
													</a>	
													<span className="inline-block txt-dark">ryan</span>
													<a href="javascript:void(0)" className="inline-block text-right txt-grey"><i className="zmdi zmdi-more"></i></a>
													<div className="clearfix"></div>
												</div>
											</div>
											<div className="panel-wrapper collapse in">
												<div className="panel-body pa-0">
													<div className="chat-content">
														<ul className="nicescroll-bar pt-20">
															<li className="friend">
																<div className="friend-msg-wrap">
																	<img className="user-img img-circle block pull-left"  src="dist/img/user.png" alt="user"/>
																	<div className="msg pull-left">
																		<p>Hello Jason, how are you, it's been a long time since we last met?</p>
																		<div className="msg-per-detail text-right">
																			<span className="msg-time txt-grey">2:30 PM</span>
																		</div>
																	</div>
																	<div className="clearfix"></div>
																</div>	
															</li>
															<li className="self mb-10">
																<div className="self-msg-wrap">
																	<div className="msg block pull-right"> Oh, hi Sarah I'm have got a new job now and is going great.
																		<div className="msg-per-detail text-right">
																			<span className="msg-time txt-grey">2:31 pm</span>
																		</div>
																	</div>
																	<div className="clearfix"></div>
																</div>	
															</li>
															<li className="self">
																<div className="self-msg-wrap">
																	<div className="msg block pull-right">  How about you?
																		<div className="msg-per-detail text-right">
																			<span className="msg-time txt-grey">2:31 pm</span>
																		</div>
																	</div>
																	<div className="clearfix"></div>
																</div>	
															</li>
															<li className="friend">
																<div className="friend-msg-wrap">
																	<img className="user-img img-circle block pull-left"  src="dist/img/user.png" alt="user"/>
																	<div className="msg pull-left"> 
																		<p>Not too bad.</p>
																		<div className="msg-per-detail  text-right">
																			<span className="msg-time txt-grey">2:35 pm</span>
																		</div>
																	</div>
																	<div className="clearfix"></div>
																</div>	
															</li>
														</ul>
													</div>
													<div className="input-group">
														<input type="text" id="input_msg_send" name="send-msg" className="input-msg-send form-control" placeholder="Type something"/>
														<div className="input-group-btn emojis">
															<div className="dropup">
																<button type="button" className="btn  btn-default  dropdown-toggle" data-toggle="dropdown" ><i className="zmdi zmdi-mood"></i></button>
																<ul className="dropdown-menu dropdown-menu-right">
																	<li><a href="javascript:void(0)">Action</a></li>
																	<li><a href="javascript:void(0)">Another action</a></li>
																	<li className="divider"></li>
																	<li><a href="javascript:void(0)">Separated link</a></li>
																</ul>
															</div>
														</div>
														<div className="input-group-btn attachment">
															<div className="fileupload btn  btn-default"><i className="zmdi zmdi-attachment-alt"></i>
																<input type="file" className="upload"/>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
								
							<div id="messages_tab" className="tab-pane fade" role="tabpanel">
								<div className="message-box-wrap">
									<div className="msg-search">
										<a href="javascript:void(0)" className="inline-block txt-grey">
											<i className="zmdi zmdi-more"></i>
										</a>	
										<span className="inline-block txt-dark">messages</span>
										<a href="javascript:void(0)" className="inline-block text-right txt-grey"><i className="zmdi zmdi-search"></i></a>
										<div className="clearfix"></div>
									</div>
									<div className="set-height-wrap">
										<div className="streamline message-box nicescroll-bar">
											<a href="javascript:void(0)">
												<div className="sl-item unread-message">
													<div className="sl-avatar avatar avatar-sm avatar-circle">
														<img className="img-responsive img-circle" src="dist/img/user.png" alt="avatar"/>
													</div>
													<div className="sl-content">
														<span className="inline-block capitalize-font   pull-left message-per">Clay Masse</span>
														<span className="inline-block font-11  pull-right message-time">12:28 AM</span>
														<div className="clearfix"></div>
														<span className=" truncate message-subject">Themeforest message sent via your envato market profile</span>
														<p className="txt-grey truncate">Neque porro quisquam est qui dolorem ipsu messm quia dolor sit amet, consectetur, adipisci velit</p>
													</div>
												</div>
											</a>
											<a href="javascript:void(0)">
												<div className="sl-item">
													<div className="sl-avatar avatar avatar-sm avatar-circle">
														<img className="img-responsive img-circle" src="dist/img/user1.png" alt="avatar"/>
													</div>
													<div className="sl-content">
														<span className="inline-block capitalize-font   pull-left message-per">Evie Ono</span>
														<span className="inline-block font-11  pull-right message-time">1 Feb</span>
														<div className="clearfix"></div>
														<span className=" truncate message-subject">Pogody theme support</span>
														<p className="txt-grey truncate">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
													</div>
												</div>
											</a>
											<a href="javascript:void(0)">
												<div className="sl-item">
													<div className="sl-avatar avatar avatar-sm avatar-circle">
														<img className="img-responsive img-circle" src="dist/img/user2.png" alt="avatar"/>
													</div>
													<div className="sl-content">
														<span className="inline-block capitalize-font   pull-left message-per">Madalyn Rascon</span>
														<span className="inline-block font-11  pull-right message-time">31 Jan</span>
														<div className="clearfix"></div>
														<span className=" truncate message-subject">Congratulations from design nominees</span>
														<p className="txt-grey truncate">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
													</div>
												</div>
											</a>
											<a href="javascript:void(0)">
												<div className="sl-item unread-message">
													<div className="sl-avatar avatar avatar-sm avatar-circle">
														<img className="img-responsive img-circle" src="dist/img/user3.png" alt="avatar"/>
													</div>
													<div className="sl-content">
														<span className="inline-block capitalize-font   pull-left message-per">Ezequiel Merideth</span>
														<span className="inline-block font-11  pull-right message-time">29 Jan</span>
														<div className="clearfix"></div>
														<span className=" truncate message-subject">Themeforest item support message</span>
														<p className="txt-grey truncate">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
													</div>
												</div>
											</a>
											<a href="javascript:void(0)">
												<div className="sl-item unread-message">
													<div className="sl-avatar avatar avatar-sm avatar-circle">
														<img className="img-responsive img-circle" src="dist/img/user4.png" alt="avatar"/>
													</div>
													<div className="sl-content">
														<span className="inline-block capitalize-font   pull-left message-per">Jonnie Metoyer</span>
														<span className="inline-block font-11  pull-right message-time">27 Jan</span>
														<div className="clearfix"></div>
														<span className=" truncate message-subject">Help with beavis contact form</span>
														<p className="txt-grey truncate">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
													</div>
												</div>
											</a>
											<a href="javascript:void(0)">
												<div className="sl-item">
													<div className="sl-avatar avatar avatar-sm avatar-circle">
														<img className="img-responsive img-circle" src="dist/img/user.png" alt="avatar"/>
													</div>
													<div className="sl-content">
														<span className="inline-block capitalize-font   pull-left message-per">Priscila Shy</span>
														<span className="inline-block font-11  pull-right message-time">19 Jan</span>
														<div className="clearfix"></div>
														<span className=" truncate message-subject">Your uploaded theme is been selected</span>
														<p className="txt-grey truncate">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
													</div>
												</div>
											</a>
											<a href="javascript:void(0)">
												<div className="sl-item">
													<div className="sl-avatar avatar avatar-sm avatar-circle">
														<img className="img-responsive img-circle" src="dist/img/user1.png" alt="avatar"/>
													</div>
													<div className="sl-content">
														<span className="inline-block capitalize-font   pull-left message-per">Linda Stack</span>
														<span className="inline-block font-11  pull-right message-time">13 Jan</span>
														<div className="clearfix"></div>
														<span className=" truncate message-subject"> A new rating has been received</span>
														<p className="txt-grey truncate">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
													</div>
												</div>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div  id="todo_tab" className="tab-pane fade" role="tabpanel">
								<div className="todo-box-wrap">
									<div className="add-todo">
										<a href="javascript:void(0)" className="inline-block txt-grey">
											<i className="zmdi zmdi-more"></i>
										</a>	
										<span className="inline-block txt-dark">todo list</span>
										<a href="javascript:void(0)" className="inline-block text-right txt-grey"><i className="zmdi zmdi-plus"></i></a>
										<div className="clearfix"></div>
									</div>
									<div className="set-height-wrap">
										<ul className="todo-list nicescroll-bar">
											<li className="todo-item">
												<div className="checkbox checkbox-default">
													<input type="checkbox" id="checkbox01"/>
													<label for="checkbox01">Record The First Episode</label>
												</div>
											</li>
											<li>
												<hr className="light-grey-hr"/>
											</li>
											<li className="todo-item">
												<div className="checkbox checkbox-pink">
													<input type="checkbox" id="checkbox02"/>
													<label for="checkbox02">Prepare The Conference Schedule</label>
												</div>
											</li>
											<li>
												<hr className="light-grey-hr"/>
											</li>
											<li className="todo-item">
												<div className="checkbox checkbox-warning">
													<input type="checkbox" id="checkbox03" checked/>
													<label for="checkbox03">Decide The Live Discussion Time</label>
												</div>
											</li>
											<li>
												<hr className="light-grey-hr"/>
											</li>
											<li className="todo-item">
												<div className="checkbox checkbox-success">
													<input type="checkbox" id="checkbox04" checked/>
													<label for="checkbox04">Prepare For The Next Project</label>
												</div>
											</li>
											<li>
												<hr className="light-grey-hr"/>
											</li>
											<li className="todo-item">
												<div className="checkbox checkbox-danger">
													<input type="checkbox" id="checkbox05" checked/>
													<label for="checkbox05">Finish Up AngularJs Tutorial</label>
												</div>
											</li>
											<li>
												<hr className="light-grey-hr"/>
											</li>
											<li className="todo-item">
												<div className="checkbox checkbox-purple">
													<input type="checkbox" id="checkbox06" checked/>
													<label for="checkbox06">Finish Infinity Project</label>
												</div>
											</li>
											<li>
												<hr className="light-grey-hr"/>
											</li>
										</ul>
										
									</div>
								</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
		</div>
			)
	}
}

export default SideNav;