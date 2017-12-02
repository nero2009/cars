import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Table} from '../tables/Table.jsx'
import Pagination from '../pagination/Pagination.jsx' 


class Dealers extends Component{

	constructor(props){
			super(props);
			this.state={header:[],rows:[],data:[],pageOfItems:[],pager:{}}
	}
	componentDidMount(){
		const {GETALL,DEALERS} = this.props.Constants;
		this.props.ServiceObj.getItems(DEALERS,GETALL)
		.then(({data})=>{
			this.setState({data:data || []});
		})
		.catch(err=>{

		})

		this.setState({
			header:['#','Name','Contact Name',"Contact Phone","Actions"],
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
					Name:item.dealershipName,
					contactName:item.contactName,
					contactNumber:item.contactNumber,
					Actions:<div><Link to={`/home/dealers/edit/${item.Id}`} className="mr-15 btn btn-info"><i className="fa fa-pencil"></i></Link>
					<Link to={`/home/dealers/${item.Id}`} className="mr-15 btn btn-info"><i className="fa fa-eye"></i></Link>
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
									<h6 className="panel-title txt-dark">Dealers</h6>
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

export default Dealers;