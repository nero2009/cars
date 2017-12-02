import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export const SalesAnalytics =(props)=>{
	return(
		<div className="panel panel-default card-view">
							<div className="panel-heading">
								<div className="pull-left">
									<h6 className="panel-title txt-dark">sales analytics</h6>
								</div>
								<div className="pull-right">
									
									<a href="#" className="pull-left inline-block full-screen">
										<i className="zmdi zmdi-fullscreen"></i>
									</a>
								</div>
								<div className="clearfix"></div>
							</div>
							<div className="panel-wrapper collapse in">
                                <div className="panel-body">
									<ul className="flex-stat mb-10 ml-15">
										<li className="text-left auto-width mr-60">
											<span className="block">Pre-Sales</span>
											<span className="block txt-dark weight-500 font-18"><span className="counter-anim">4,500</span></span>
											<span className="block txt-success mt-5">
												<i className="zmdi zmdi-caret-up pr-5 font-20"></i><span className="weight-500">+15%</span>
											</span>
											<div className="clearfix"></div>
										</li>
										<li className="text-left auto-width mr-60">
											<span className="block">Orders</span>
											<span className="block txt-dark weight-500 font-18"><span className="counter-anim">400</span></span>
											<span className="block txt-success mt-5">
												<i className="zmdi zmdi-caret-up pr-5 font-20"></i><span className="weight-500">+4%</span>
											</span>
											<div className="clearfix"></div>
										</li>
										<li className="text-left auto-width">
											<span className="block">Revenue</span>
											<span className="block txt-dark weight-500 font-18">&#8358;<span className="counter-anim">32,422,200</span></span>
											<span className="block txt-danger mt-5">
												<i className="zmdi zmdi-caret-down pr-5 font-20"></i><span className="weight-500">-5%</span>
											</span>
											<div className="clearfix"></div>
										</li>
									</ul>
									<div id="chart_1" className="morris-chart" style={{height:"345px"}}></div>
								</div>
							</div>
                        </div>
		)
} 

export const Sales= (props)=>{
	return(
			<div className="panel panel-default card-view panel-refresh">
							<div className="refresh-container">
								<div className="la-anim-1"></div>
							</div>
							<div className="panel-heading">
								<div className="pull-left">
									<h6 className="panel-title txt-dark">top 5 sales</h6>
								</div>
								<div className="clearfix"></div>
							</div>
							<div className="panel-wrapper collapse in">
								<div className="panel-body row">
									<div className="col-sm-6 pa-0">
										<canvas id="chart_7" height="164"></canvas>
									</div>
									<div className="col-sm-6 pr-0 pt-25">
										<div className="label-chatrs">
											<div className="mb-5">
												<span className="clabels inline-block bg-yellow mr-5"></span>
												<span className="clabels-text font-12 inline-block txt-dark capitalize-font">Toyota Camry</span>
											</div>
											<div className="mb-5">
												<span className="clabels inline-block bg-pink mr-5"></span>
												<span className="clabels-text font-12 inline-block txt-dark capitalize-font">Toyota Corolla</span>
											</div>
											<div className="mb-5">
												<span className="clabels inline-block bg-blue mr-5"></span>
												<span className="clabels-text font-12 inline-block txt-dark capitalize-font">Hyundai</span>
											</div>
											<div className="mb-5">
												<span className="clabels inline-block bg-red mr-5"></span>
												<span className="clabels-text font-12 inline-block txt-dark capitalize-font">Kia Optima</span>
											</div>	
											<div className="">
												<span className="clabels inline-block bg-green mr-5"></span>
												<span className="clabels-text font-12 inline-block txt-dark capitalize-font">Toyota Matrix</span>
											</div>												
										</div>
									</div>										
								</div>	
							</div>
						</div>
		)
}
export const Conversion= (props)=>{
	return(
		<div className="panel panel-default card-view sm-data-box-3">
							<div className="panel-heading">
								<div className="pull-left">
									<h6 className="panel-title txt-dark">conversion rate</h6>
								</div>
								<div className="clearfix"></div>
							</div>
							<div className="panel-wrapper collapse in">
								<div className="panel-body">
									<div className="col-sm-6 pa-0">
										<span id="pie_chart_4" className="easypiechart" data-percent="33">
											<span className="percent block txt-dark weight-500"></span>
											<span className="block txt-success text-center">
												<i className="zmdi zmdi-caret-up pr-5 font-20"></i><span className="weight-500">+33%</span>
											</span>
										</span>
									</div>	
									<div className="col-sm-6 pr-0">
										<ul className="flex-stat mb-15">
											<li className="text-left block no-float full-width mb-15">
												<span className="block">Order Abandonment</span>
												<span className="block txt-dark weight-500  font-18"><span className="counter-anim">73</span>%</span>
												<span className="block txt-success pull-left mt-5">
													<i className="zmdi zmdi-caret-up pr-5 font-20 pull-left"></i><span className="weight-500 pull-left">+15%</span>
												</span>
												<div className="clearfix"></div>
											</li>
											<li className="text-left block no-float full-width">
												<span className="block">Revenue Loss</span>
												<span className="block txt-dark weight-500  font-18">&#8358;<span className="counter-anim">120,000,000</span></span>
												<span className="block txt-success pull-left mt-5">
													<i className="zmdi zmdi-caret-up pr-5 font-20 pull-left"></i><span className="weight-500 pull-left">+4%</span>
												</span>
												<div className="clearfix"></div>
											</li>
										</ul>
									</div>	
								</div>	
							</div>
						</div>
		)
}
export const Earnings = (props)=>{
	return(

						<div className="panel panel-default card-view panel-refresh">
							<div className="refresh-container">
								<div className="la-anim-1"></div>
							</div>
							<div className="panel-heading">
								<div className="pull-left">
									<h6 className="panel-title txt-dark">earnings by Car Stands</h6>
								</div>
								<div className="clearfix"></div>
							</div>
							<div className="panel-wrapper collapse in">
								<div className="panel-body row">
									<div className="col-sm-6 pa-0">
										<canvas id="chart_8" height="185"></canvas>
									</div>
									<div className="col-sm-6 pr-0 pt-30">
										<div className="label-chatrs">
											<div className="mb-5">
												<span className="clabels circular-clabels inline-block bg-yellow mr-5"></span>
												<span className="clabels-text font-12 inline-block txt-dark capitalize-font">Abuja</span>
											</div>
											<div className="mb-5">
												<span className="clabels circular-clabels inline-block bg-pink mr-5"></span>
												<span className="clabels-text font-12 inline-block txt-dark capitalize-font">Lagos</span>
											</div>
											<div className="mb-5">
												<span className="clabels circular-clabels inline-block bg-blue mr-5"></span>
												<span className="clabels-text font-12 inline-block txt-dark capitalize-font">Ibadan</span>
											</div>
											<div className="">
												<span className="clabels circular-clabels inline-block bg-red mr-5"></span>
												<span className="clabels-text font-12 inline-block txt-dark capitalize-font">product-checkoutarcourt</span>
											</div>											
										</div>
									</div>										
								</div>	
							</div>
						</div>
						
					
		)
}
export const TopArrival =(props)=>{
	return(
		<div className="panel panel-default card-view">
							<div className="panel-heading">
								<div className="pull-left">
									<h6 className="panel-title txt-dark">Top Arrivals</h6>
								</div>
								<div className="pull-right">
									<a href="#" className="pull-left inline-block mr-15">
										<i className="zmdi zmdi-download"></i>
									</a>
									<a href="#" className="pull-left inline-block close-panel" data-effect="fadeOut">
										<i className="zmdi zmdi-close"></i>
									</a>
								</div>
								<div className="clearfix"></div>
							</div>
							<div className="panel-wrapper collapse in">
								<div className="panel-body row pa-0">
										<div className="table-wrap sm-data-box-2">
										<div className="table-responsive">
										  <table className="table table-striped mb-0">
											<thead>
											  <tr>
												<th>Car</th>
												<th>Revenue</th>
												<th>Conversion Rate</th>
											  </tr>
											</thead>
											<tbody>
											  <tr>
												<td>Toyota Matrix 2013</td>
												<td>&#8358;4,900,000</td>
												<td>8.61%</td>
											  </tr>
											  <tr>
												<td>Mercedes Benz C350</td>
												<td>&#8358;15,400,000</td>
												<td>2.10%</td>
											  </tr>
											  <tr>
												<td>Toyota FJ Cruiser</td>
												<td>&#8358;7,550,000</td>
												<td>4.35%</td>
											  </tr>
											  <tr>
												<td>Honda Pilot 2014</td>
												<td>&#8358;10,000,500</td>
												<td>1.58%</td>
											  </tr>
											   <tr>
												<td>Lexus ES350 2005</td>
												<td>&#8358;3,000,000</td>
												<td>56%</td>
											  </tr>
											   <tr>
												<td>Hyundai Accent 2014</td>
												<td>&#8358;7,100,000</td>
												<td>47.6%</td>
											  </tr>
											</tbody>
										  </table>
										</div>
									</div>
								</div>	
							</div>
						</div>
					
		)
}
export const SalesGraph = (props)=>{
	return(
		<div className="panel panel-default card-view pt-0">
							<div className="panel-wrapper collapse in">
								<div className="panel-body pa-0">
									<div className="sm-data-box bg-white">
										<div className="container-fluid">
											<div className="row">
												<div className="col-xs-6 text-left pl-0 pr-0 data-wrap-left">
													<span className="txt-dark block counter">&#8358;<span className="counter-anim">5,670,000</span></span>
													<span className="block"><span className="weight-500 uppercase-font txt-grey font-13">Sales</span><i className="zmdi zmdi-caret-down txt-danger font-21 ml-5 vertical-align-middle"></i></span>
												</div>
												<div className="col-xs-6 text-left  pl-0 pr-0 pt-25 data-wrap-right">
													<div id="sparkline_4" style={{width:"100px",overflow:"hidden",margin:"0px auto"}}></div>
												</div>
											</div>	
										</div>
									</div>
								</div>
							</div>
						</div>
		)
}
export const PaidFullRate =(props)=>{
	return(
		<div className="panel panel-default card-view pt-0">
							<div className="panel-wrapper collapse in">
								<div className="panel-body pa-0">
									<div className="sm-data-box bg-white">
										<div className="container-fluid">
											<div className="row">
												<div className="col-xs-6 text-left pl-0 pr-0 data-wrap-left">
													<span className="txt-dark block counter"><span className="counter-anim">46.41</span>%</span>
													<span className="block"><span className="weight-500 uppercase-font txt-grey font-13">Paid-Full Rate</span><i className="zmdi zmdi-caret-up txt-success font-21 ml-5 vertical-align-middle"></i></span>
												</div>
												<div className="col-xs-6 text-left  pl-0 pr-0 pt-25 data-wrap-right">
													<div id="sparkline_5" style={{width:"100px",overflow:"hidden",margin:"0px auto"}}></div>
												</div>
											</div>	
										</div>
									</div>
								</div>
							</div>
						</div>
		)
}
export const TotalCars =(props)=>{
	return(
		<div className="panel panel-default card-view pt-0">
							<div className="panel-wrapper collapse in">
								<div className="panel-body pa-0">
									<div className="sm-data-box bg-white">
										<div className="container-fluid">
											<div className="row">
												<div className="col-xs-6 text-left pl-0 pr-0 data-wrap-left">
													<span className="txt-dark block counter"><span className="counter-anim">2,357</span></span>
													<span className="block"><span className="weight-500 uppercase-font txt-grey font-13">Total Cars</span><i className="zmdi zmdi-caret-down txt-danger font-21 ml-5 vertical-align-middle"></i></span>
												</div>
												<div className="col-xs-6 text-left  pl-0 pr-0 pt-25 data-wrap-right">
													<div id="sparkline_6" style={{width:"100px",overflow:"hidden",margin:"0px auto"}}></div>
												</div>
											</div>	
										</div>
									</div>
								</div>
							</div>
						</div>
		)
}
export const Feedback =(props)=>{
	return(
		<div className="panel panel-default border-panel  review-box card-view">
							<div className="panel-heading">
								<div className="pull-left">
									<h6 className="panel-title txt-dark">recent feedback</h6>
								</div>
								<div className="pull-right">
									<div className="form-group mb-0 sm-bootstrap-select">
										<select className="selectpicker" data-style="form-control">
											<option>Sort by Newest</option>
											<option>Sort by Highest Rating</option>
											<option>Sort by Lowest Rating</option>
										</select>
									</div>	
								</div>
								<div className="clearfix"></div>
							</div>
							<div className="panel-wrapper collapse in">
							<div className="panel-body row pa-0">
									<div className="streamline">
										<div className="sl-item">
											<div className="sl-content">
												<div className="per-rating inline-block pull-left">
													<a href="javascript:void(0);" className="zmdi zmdi-star"></a><a href="javascript:void(0);" className="zmdi zmdi-star"></a><a href="javascript:void(0);" className="zmdi zmdi-star"></a><a href="javascript:void(0);" className="zmdi zmdi-star"></a><a href="javascript:void(0);" className="zmdi zmdi-star-outline"></a>
													<span className="inline-block">for Benz E450 2014</span>
												</div>
												<a href="javascript:void(0);"  className=" pull-right txt-grey"><i className="zmdi zmdi-mail-reply"></i></a>
												<div className="clearfix"></div>
												<div className="inline-block pull-left">
													<span className="reviewer font-13">
														<span>By</span>
														<a href="javascript:void(0)" className="inline-block capitalize-font  mb-5">Jens Brincker (Abuja)</a>
													</span>	
													<span className="inline-block font-13  mb-5">11 day ago</span>
												</div>	
												<div className="clearfix"></div>
												<p className="mt-5">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
											</div>
										</div>
										<hr className="light-grey-hr"/>
										<div className="sl-item">
											<div className="sl-content">
												<div className="per-rating inline-block pull-left">
													<a href="javascript:void(0);" className="zmdi zmdi-star"></a><a href="javascript:void(0);" className="zmdi zmdi-star"></a><a href="javascript:void(0);" className="zmdi zmdi-star"></a><a href="javascript:void(0);" className="zmdi zmdi-star"></a><a href="javascript:void(0);" className="zmdi zmdi-star"></a>
													<span className="inline-block">for Dodge Camero</span>
												</div>
												<a href="javascript:void(0);"  className=" pull-right txt-grey"><i className="zmdi zmdi-mail-reply"></i></a>
												<div className="clearfix"></div>
												<div className="inline-block pull-left">
													<span className="reviewer font-13">
														<span>By</span>
														<a href="javascript:void(0)" className="inline-block capitalize-font  mb-5">Madalyn Rascon (Lagos)</a>
													</span>	
													<span className="inline-block font-13  mb-5">11 day ago</span>
												</div>	
												<div className="clearfix"></div>
												<p className="mt-5">Neque porro quisquam est qui dolorem ipsum quiipsum quia dolor sit amet.</p>
											</div>
										</div>
										<hr className="light-grey-hr"/>
										<div className="sl-item">
											<div className="sl-content">
												<div className="per-rating inline-block pull-left">
													<a href="javascript:void(0);" className="zmdi zmdi-star"></a><a href="javascript:void(0);" className="zmdi zmdi-star"></a><a href="javascript:void(0);" className="zmdi zmdi-star"></a><a href="javascript:void(0);" className="zmdi zmdi-star"></a><a href="javascript:void(0);" className="zmdi zmdi-star-outline"></a>
													<span className="inline-block">for Toyota Camry 2016</span>
												</div>
												<a href="javascript:void(0);"  className=" pull-right txt-grey"><i className="zmdi zmdi-mail-reply"></i></a>
												<div className="clearfix"></div>
												<div className="inline-block pull-left">
													<span className="reviewer font-13">
														<span>By</span>
														<a href="javascript:void(0)" className="inline-block capitalize-font  mb-5">Evie Ono (Lagos)</a>
													</span>	
													<span className="inline-block font-13  mb-5">13 day ago</span>
												</div>	
												<div className="clearfix"></div>
												<p className="mt-5">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur.ipsum quia dolor sit amet.</p>
											</div>
										</div>
											<hr className="light-grey-hr"/>
										<div className="sl-item">
											<div className="sl-content">
												<div className="per-rating inline-block pull-left">
													<a href="javascript:void(0);" className="zmdi zmdi-star"></a><a href="javascript:void(0);" className="zmdi zmdi-star"></a><a href="javascript:void(0);" className="zmdi zmdi-star"></a><a href="javascript:void(0);" className="zmdi zmdi-star"></a><a href="javascript:void(0);" className="zmdi zmdi-star-outline"></a>
													<span className="inline-block">for Honda Crosstour 2016</span>
												</div>
												<a href="javascript:void(0);"  className=" pull-right txt-grey"><i className="zmdi zmdi-mail-reply"></i></a>
												<div className="clearfix"></div>
												<div className="inline-block pull-left">
													<span className="reviewer font-13">
														<span>By</span>
														<a href="javascript:void(0)" className="inline-block capitalize-font  mb-5">Evie Ono (Lagos)</a>
													</span>	
													<span className="inline-block font-13  mb-5">13 day ago</span>
												</div>	
												<div className="clearfix"></div>
												<p className="mt-5">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur.ipsum quia dolor sit amet, consectetur.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					
		)
}
export const Invoice =(props)=>{
	return(
		<div className="panel panel-default card-view panel-refresh">
							<div className="refresh-container">
								<div className="la-anim-1"></div>
							</div>
							<div className="panel-heading">
								<div className="pull-left">
									<h6 className="panel-title txt-dark">Invoice List</h6>
								</div>
								<div className="pull-right">
									<a href="javascript:void(0)" className="pull-left btn btn-primary btn-xs mr-15">view all</a>
									<a href="#" className="pull-left inline-block refresh mr-15">
										<i className="zmdi zmdi-replay"></i>
									</a>
									<a href="#" className="pull-left inline-block full-screen mr-15">
										<i className="zmdi zmdi-fullscreen"></i>
									</a>
									<div className="pull-left inline-block dropdown">
										<a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false" role="button"><i className="zmdi zmdi-more-vert"></i></a>
										<ul className="dropdown-menu bullet dropdown-menu-right"  role="menu">
											<li role="presentation"><a href="javascript:void(0)" role="menuitem"><i className="icon wb-reply" aria-hidden="true"></i>option 1</a></li>
											<li role="presentation"><a href="javascript:void(0)" role="menuitem"><i className="icon wb-share" aria-hidden="true"></i>option 2</a></li>
											<li role="presentation"><a href="javascript:void(0)" role="menuitem"><i className="icon wb-trash" aria-hidden="true"></i>option 3</a></li>
										</ul>
									</div>
								</div>
								<div className="clearfix"></div>
							</div>
							<div className="panel-wrapper collapse in">
								<div className="panel-body row pa-0">
									<div className="table-wrap">
										<div className="table-responsive">
											<table id="datable_1" className="table  display table-hover border-none">
												<thead>
													<tr>
														<th>#Invoice</th>
														<th>Description</th>
														<th>Amount</th>
														<th>Status</th>
														<th>issue date</th>
														<th>due date</th>
														<th>View</th>
													</tr>
												</thead>

												<tbody>
													<tr>
														<td>#5012</td>
														<td>System Architect</td>
														<td>$205,500</td>
														<td>
															<span className="label label-danger">unpaid</span>
														</td>
														<td>2011/04/25</td>
														<td>2012/12/02</td>
														<td>
															<a href="#">
																<i className="fa fa-file-text-o" aria-hidden="true"></i>
															</a>	
														</td>
													</tr>
													<tr>
														<td>#5013</td>
														<td>Accountant</td>
														<td>$205,500</td>
														<td>
															<span className="label label-success">paid</span>
														</td>
														<td>2011/07/25</td>
														<td>2012/12/02</td>
														<td>
															<a href="#">
																<i className="fa fa-file-text-o" aria-hidden="true"></i>
															</a>	
														</td>
													</tr>
													<tr>
														<td>#5014</td>
														<td>Junior Technical Author</td>
														<td>$205,500</td>
														<td>
															<span className="label label-warning">pending</span>
														</td>
														<td>2009/01/12</td>
														<td>2012/12/02</td>
														<td>
															<a href="#">
																<i className="fa fa-file-text-o" aria-hidden="true"></i>
															</a>	
														</td>
													</tr>
													<tr>
														<td>#5015</td>
														<td>Senior Javascript Developer</td>
														<td>$205,500</td>
														<td>
															<span className="label label-success">paid</span>
														</td>
														<td>2012/03/29</td>
														<td>2012/12/02</td>
														<td>
															<a href="#">
																<i className="fa fa-file-text-o" aria-hidden="true"></i>
															</a>	
														</td>
													</tr>
													<tr>
														<td>#5010</td>
														<td>Integration Specialist</td>
														<td>$205,500</td>
														<td>
															<span className="label label-success">paid</span>
														</td>
														<td>2010/10/14</td>
														<td>2014/09/15</td>
														<td>
															<a href="#">
																<i className="fa fa-file-text-o" aria-hidden="true"></i>
															</a>	
														</td>
													</tr>
													<tr>
														<td>#5011</td>
														<td>Javascript Developer</td>
														<td>$205,500</td>
														<td>
															<span className="label label-success">paid</span>
														</td>
														<td>2009/09/15</td>
														<td>2013/09/15</td>
														<td>
															<a href="#">
																<i className="fa fa-file-text-o" aria-hidden="true"></i>
															</a>	
														</td>
													</tr>
													
												</tbody>
											</table>
										</div>
									</div>	
								</div>	
							</div>
						</div>
		)
}
export const RecentActivity =(props)=>{
	return(
		<div className="panel panel-default border-panel card-view">
							<div className="panel-heading">
								<div className="pull-left">
									<h6 className="panel-title txt-dark">recent activity</h6>
								</div>
								<a className="txt-danger pull-right right-float-sub-text inline-block" href="javascript:void(0)"> clear all </a>
								<div className="clearfix"></div>
							</div>
							<div className="panel-wrapper task-panel collapse in">
								<div className="panel-body row pa-0">
									<div className="list-group mb-0">
										<a href="#" className="list-group-item">
											<span className="badge transparent-badge badge-info capitalize-font">just now</span>
											<i className="zmdi zmdi-calendar-check pull-left"></i><p className="pull-left">Calendar updated</p>
											<div className="clearfix"></div>
										</a>
										<a href="#" className="list-group-item">
											<span className="badge transparent-badge badge-success capitalize-font">4 min</span>
											<i className="zmdi zmdi-comment-alert pull-left"></i><p className=" pull-left">Commented on a post</p>
											<div className="clearfix"></div>
										</a>
										<a href="#" className="list-group-item">
											<span className="badge transparent-badge badge-warning capitalize-font">23 min </span>
											<i className="zmdi zmdi-truck pull-left"></i><p className=" pull-left">Order 392 shipped</p>
											<div className="clearfix"></div>
										</a>
										<a href="#" className="list-group-item">
											<span className="badge transparent-badge badge-success capitalize-font">46 min</span>
											<i className="zmdi zmdi-money pull-left"></i><p className=" pull-left">Invoice 653 has been paid</p>
											<div className="clearfix"></div>
										</a>
										<a href="#" className="list-group-item">
											<span className="badge transparent-badge badge-danger capitalize-font">1 hr</span>
											<i className="zmdi zmdi-account pull-left"></i><p className="pull-left">A new user has been added</p>
											<div className="clearfix"></div>
										</a>
										<a href="#" className="list-group-item">
											<span className="badge transparent-badge badge-warning capitalize-font">just now</span>
											<i className="zmdi zmdi-picture-in-picture pull-left"></i><p className=" pull-left">Finance report for 2016-17 has been released</p>
											<div className="clearfix"></div>
										</a>
										<a href="#" className="list-group-item">
											<span className="badge transparent-badge badge-success capitalize-font">1 hr</span>
											<i className="zmdi zmdi-device-hub pull-left"></i><p className="pull-left">Web server hardware updated</p>
											<div className="clearfix"></div>
										</a>
									</div>
								</div>
							</div>
						</div>
					
		)
}