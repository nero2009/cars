import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {SalesAnalytics,Sales,Conversion,Earnings,TopArrival,SalesGraph,PaidFullRate,TotalCars,Feedback,Invoice,RecentActivity} from './DashboardComponents.jsx'

class DashboardIndex extends Component{
	constructor(props) {
		super(props);
		this.state={};
	}
	componentDidMount(){
		
	}
	render(){
		return(
			<div class="row">
	            <div class="col-md-12">
	            	<div className="row">
	            		<div className="col-lg-8 col-md-6 col-sm-12 col-xs-12">
	            			<SalesAnalytics/>
	            		</div>
	            		<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
	            			<Sales/>
	            			<Conversion/>
	            		</div>
	            	</div>
	            	<div className="row">
	            		<div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
	            			<Earnings/>
	            			<TopArrival/>
	            		</div>
	            		<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
	            			<SalesGraph/>
	            			<PaidFullRate/>
	            			<TotalCars/>
	            		</div>
	            		<div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
	            			<Feedback/>
	            		</div>
	            	</div>
	            	<div className="row">
	            		<div class="col-lg-8 col-md-6 col-xs-12">
	            			<Invoice/>
	            		</div>
	            		<div class="col-lg-4 col-md-6 col-xs-12">
	            			<RecentActivity/>
	            		</div>
	            	</div>
	            	<div className="row">
	            	</div>
	            </div>
            </div>
			)
	}
}

export default DashboardIndex;