import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Table} from '../tables/Table.jsx' 
import Pagination from '../pagination/Pagination.jsx'

class ViewVehicles extends Component{
	constructor(props) {
		super(props);
		this.state={header:[],rows:[],data:[],pageOfItems:[],pager:{}}
	}

	componentDidMount() {
		const {VEHICLE,GETALL}=this.props.Constants;
		this.props.ServiceObj.getItems(VEHICLE,GETALL)
		.then(({data})=>{
			this.setState({data});
		})
		.catch(err=>{

		})
		this.setState({
			header:['#','vin','manufacturer','model','modelYear','color','bodyType','registered','regNo',<i className="fa fa-gear"></i>],
			rows:[{no:1,vin:'drt455HQ',manufacturer:'Ford',model:'Ranger',modelYear:'2017',color:'black',bodyType:'muscle',registered:'yes',regNo:'10092hq',action:<Link to="#"><i className="fa fa-pencil"></i></Link>}]
		})
	}
	onChangePage(pageOfItems,pager){
		this.setState({pageOfItems,pager});
	}
	format(data){
		return  data.map((item,index)=>{
				return{
					SN:item.no,
					Vin:item.vin,
					Manufacturer:item.manufacturer,
					Model:item.model,
					ModelYear:item.modelYear,
					Color:item.color,
					BodyType:item.bodyType,
					Registered:item.isRegistered?'Yes':'No',
					RegNo:item.regNo,
					Actions:<Link to={`/home/vehicles/edit/${item.Id}`}><i className="fa fa-pencil"></i></Link>
					
				}
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
									<Table headers={this.state.header} rows={this.format.call(this,this.state.pageOfItems)}/>
									<div className="clearfix"></div>
								</div>	
								<Pagination items={this.state.data} onChangePage={this.onChangePage.bind(this)} />
							</div>	
						</div>	
					</div>
			</div>
			)
	}
}

export default ViewVehicles