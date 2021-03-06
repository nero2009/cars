import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Table} from '../tables/Table.jsx';

class ViewStates extends Component{
	constructor(props) {
		super(props);
		this.state={header:[],rows:[]}
	}

	componentDidMount() {
		this.setState({
			header:['#','name','state'],
			rows:[{no:1,name:'Isah',state:'Lagos'}]
		})
	}

	render(){
		return(
				<div>
				<div className="panel panel-default card-view">
					<div className="panel-heading">
						<div className="pull-left">
								<h6 className="panel-title txt-dark">States</h6>
							</div>
							<div className="clearfix"></div>
						</div>
						<div className="panel-wrapper collapse in">
							<div className="panel-body">
								<div className="table-wrap">
									<Table headers={this.state.header} rows={this.state.rows}/>
									<div className="clearfix"></div>
								</div>	
							</div>	
						</div>	
					</div>
			</div>
			)
	}

	export default ViewStates;