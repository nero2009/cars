import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {SalesAnalytics,Sales,Conversion} from './DashboardComponents.jsx'

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
	            		<div class="col-lg-8 col-md-6 col-sm-12 col-xs-12">
	            			<SalesAnalytics/>
	            		</div>
	            		<div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
	            			<Sales/>
	            			<Conversion/>
	            		</div>
	            	</div>
	            	<div className="row">
	            	</div>
	            	<div className="row">
	            	</div>
	            	<div className="row">
	            	</div>
	            </div>
            </div>
			)
	}
}

export default DashboardIndex;