import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Table} from '../tables/Table.jsx'
import Pagination from '../pagination/Pagination.jsx' 


class Customer extends Component{

	constructor(props){
			super(props);
			this.state={header:[],rows:[],data:[],pageOfItems:[],pager:{}}
	}
	componentDidMount(){
		const {GETUSERCUSTOMERS,DEALERS} = this.props.Constants;
		const Id=this.props.user.dealerId;
		this.props.ServiceObj.getItem(DEALERS,GETUSERCUSTOMERS,Id)
		.then(({data})=>{
			this.setState({data:data || []});
		})
		.catch(err=>{

		})

		this.setState({
			header:['#','First Name','Last Name','Other Name','Email','Phone','Address',"Actions"]
		})
	}
	onChangePage(pageOfItems,pager){
		this.setState({pageOfItems,pager});
	}
	format(data){
		return  data.map((item,index)=>{
				return{
					SN:item.no,
                    FirstName:item.firstName,
                    lastName:item.lastName,
                    otherName:item.otherName,
                    Email:item.email,
                    Phone:item.contactNo,
					address:item.address,
					Actions:<div><Link to={`/home/customer/edit/${item.customerId}`} className="mr-15 btn btn-info"><i className="fa fa-pencil"></i></Link>
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
									<h6 className="panel-title txt-dark">Customers</h6>
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

export default Customer;