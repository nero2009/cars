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