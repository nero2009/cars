import React, { Component } from 'react';
import './CarStand.css';
import {Link} from 'react-router-dom';
import {Table} from '../tables/Table.jsx'
import Pagination from '../pagination/Pagination.jsx' 


class CarStand extends Component{

	constructor(props){
			super(props);
			this.state={header:[],rows:[],data:[],pageOfItems:[],pager:{}}
	}
	componentDidMount(){
		const {GETUSERSTANDS,CARSTAND} = this.props.Constants;
		const Id=this.props.user.id;
		this.props.ServiceObj.getItem(CARSTAND,GETUSERSTANDS,Id)
		.then(({data})=>{
			this.setState({data:data || []});
		})
		.catch(err=>{

		})

		this.setState({
			header:['#','Name','Location',"Actions"],
			rows:[{no:1,name:'gaga motors',stateName:'Lagos',Location:'Ajah',action:<Link to="#"><i className="fa fa-pencil"></i></Link>}]
		})
	}
	onChangePage(pageOfItems,pager){
		this.setState({pageOfItems,pager});
	}
	format(data){
		return  data.map((item,index)=>{
				return{
					SN:item.no,
					Name:item.name,
					Location:item.location,
					Actions:<div><Link to={`/home/car-stand/edit/${item.Id}`} className="mr-15 btn btn-info"><i className="fa fa-pencil"></i></Link>
					<Link to={`/home/car-stand/${item.Id}`} className="mr-15 btn btn-info"><i className="fa fa-eye"></i></Link>
					<a className="btn btn-danger" href="#"><i className="fa fa-trash"></i></a>
					</div>
					
				}
			})
	
	}
	render(){
		return (
			<div>
				<div className="panel panel-default card-view">
							<div className="panel-heading">
							<div className="pull-left">
									<h6 className="panel-title txt-dark">Car stands</h6>
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

export default CarStand;