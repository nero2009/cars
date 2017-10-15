import React, { Component } from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import {Table} from '../tables/Table.jsx' 
import Formy from '../form/Form.jsx'


class Home extends Component{

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
							
							<Formy/>
						</div>
					</div>
				</div>
			
			</div>
			)
	}
}

export default Home;