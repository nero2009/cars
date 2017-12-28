import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Table} from '../tables/Table.jsx'
import Pagination from '../pagination/Pagination.jsx' 

class ViewAgents extends Component{
	constructor(props) {
		super(props);
		this.state={header:[],rows:[],data:[],pageOfItems:[],pager:{}}
	}

	componentDidMount() {
		const {GETUSERAGENTS,DEALERS} = this.props.Constants;
		this.props.ServiceObj.getItem(DEALERS,GETUSERAGENTS,this.props.user.id)
		.then(({data})=>{
			this.setState({data:data || []});
		})
		.catch(err=>{

		})
		this.setState({
			header:['#','Name',"Email",'Contact No','Mobile User','Actions']
		})
	}
	onChangePage(pageOfItems,pager){
		this.setState({pageOfItems,pager});
	}
	format(data){
		return  data.map((item,index)=>{
				return{
					SN:item.no,
					Name: item.get_user_info.name,
					Email: item.get_user_info.email,
					contactNo:item.contactNo,
					allowMobile:item.allowMobile?'Yes':'No',
					Actions:<Link to={`/home/agents/edit/${item.Id}`} className="mr-15 btn btn-info"><i className="fa fa-pencil"></i></Link>
					
					
				}
			})
	
	}

	render(){
		return(
			<div>
				<div className="panel panel-default card-view">
					<div className="panel-heading">
						<div className="pull-left">
							<h6 className="panel-title txt-dark">Agents</h6>
						</div>
						<div className="clearfix"></div>
					</div>
					<div className="panel-wrapper collapse in">
						<div className="panel-body">
							<div className="table-wrap">
								<Table headers={this.state.header} rows={this.format.call(this, this.state.pageOfItems)} />
								<div className="clearfix"></div>
							</div>
							<Pagination items={this.state.data} onChangePage={this.onChangePage.bind(this)} />
						</div>
					</div>
				</div>
			</div>
			);
	}
}

export default ViewAgents;