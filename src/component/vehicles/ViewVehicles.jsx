import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Table} from '../tables/Table.jsx' 

class ViewVehicles extends Component{
	constructor(props) {
		super(props);
		this.state={header:[],rows:[]}
	}

	componentDidMount() {
		this.setState({
			header:['#','vin','manufacturer','model','modelYear','color','bodyType','registered','regNo',<i className="fa fa-gear"></i>],
			rows:[{no:1,vin:'',manufacturer:'',model:'',modelYear:'',color:'',bodyType:'',registered:'',regNo:'',action:<Link to="#"><i className="fa fa-pencil"></i></Link>}]
		})
	}

	render(){
		return(
				<div>
				<div className="panel panel-default card-view">
					<div className="panel-heading">
						<div className="pull-left">
								<h6 className="panel-title txt-dark">Vehicles</h6>
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

export default ViewVehicles