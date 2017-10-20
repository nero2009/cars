import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import {Table} from '../tables/Table.jsx' 


class ViewUser extends Component{

	constructor(props){
			super(props);
			this.state={header:[],rows:[]}
	}
	componentDidMount(){
		this.setState({
			header:['#','Name','Email','Password',<i className="fa fa-gear"></i>],
			rows:[{no:1,name:'nero',email:'Nero209@yahoo.com',password:'abcd1234',action:<Link to="#"><i className="fa fa-pencil"></i></Link>}]
		})
	}

	render(){
		return (
			<div>
				<div className="panel panel-default card-view">
							<div className="panel-heading">
							<div className="pull-left">
									<h6 className="panel-title txt-dark">Users</h6>
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
}

export default ViewUser;