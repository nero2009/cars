import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class DashboardIndex extends Component{
	constructor(props) {
		super(props);
		this.state={};
	}
	componentDidMount(){
		
	}
	render(){
		return(
			<div class="page-wrapper">
	            <div class="container-fluid pt-25">
	            	<div className="row">
	            		<div class="col-lg-8 col-md-6 col-sm-12 col-xs-12">
	            		</div>
	            		<div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
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