import React, { Component } from 'react';
import './CarStand.css';
import {Link} from 'react-router-dom';
import {Table} from '../tables/Table.jsx' 


class CarStand extends Component{

	constructor(props){
			super(props);
	}
	componentDidMount(){
		
	}

	render(){
		return (
			<div>
				<div class="panel panel-default card-view panel-refresh">
					<div class="panel-heading">
						<div class="clearfix"></div>
					</div>
					<div class="panel-wrapper collapse in">
						<div class="panel-body row pa-0">
							<Table/>
						</div>
					</div>
				</div>
			
			</div>
			)
	}
}

export default CarStand;