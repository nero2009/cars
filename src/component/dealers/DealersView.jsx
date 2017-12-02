import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Table} from '../tables/Table.jsx'
import Pagination from '../pagination/Pagination.jsx' 


class DealerView extends Component{

	constructor(props){
			super(props);
            this.state={header:[],rows:[],data:{name:'',location:''},pageOfItems2:[],pager2:{},pageOfItems3:[],pager3:{},
            pageOfItems:[],pager:{},vehicles:[],data2:[],data3:[],data4:[],sold:'',inStock:''}
    }
    componentWillMount(){
        
    }
	componentDidMount(){
        const id=this.props.match.params.id;
		const {GET,DEALERS}=this.props.Constants;
		this.props.ServiceObj.getItem(DEALERS,GET,id)
		.then(({data})=>{
			this.setState({data},()=>this.getVehicles.call(this));
		})
		.catch(err=>{

		})
	
    }
    getVehicles(){
        const id=this.state.data.dealerId;
		const {GETVEHICLES,DEALERS,GETCARSTANDS,GETAGENTS}=this.props.Constants;
		this.props.ServiceObj.getItem(DEALERS,GETVEHICLES,id)
		.then(({data})=>{
			this.setState({data2:data});
		})
		.catch(err=>{

        })
        this.props.ServiceObj.getItem(DEALERS,GETCARSTANDS,id)
		.then(({data})=>{
            this.setState({data3:data});
            return this.props.ServiceObj.getItem(DEALERS,GETAGENTS,id)
        })
        .then(({data})=>{
            this.setState({data4:data});
        })
		.catch(err=>{

        })
        

    }
	onChangePage(pageOfItems,pager){
		this.setState({pageOfItems,pager});
    }
    onChangePage2(pageOfItems2,pager2){
		this.setState({pageOfItems2,pager2});
    }
    onChangePage3(pageOfItems3,pager3){
		this.setState({pageOfItems3,pager3});
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
					RegNo:item.regNo
					
				}
			})
	
	}
    format2(data){
		return  data.map((item,index)=>{
				return{
					SN:item.no,
					Name:item.name,
					Location:item.location
				}
			})
	
    }
    format3(data){
		return  data.map((item,index)=>{
				return{
					SN:item.no,
					Name:item.fullName,
                    Email:item.email,
                    Phone:item.contactNo
				}
			})
	
	}
	render(){
        const vehiclesHeader=['#','VIN','Manufacturer','Model','Model Year','Color','BodyType','Registered','RegNo'];
        const carstandHeader=['#','Name','Location'];
        const agentsHeader=['#','Name','Email','Phone'];

		return (
            <div className="row carStandView">
                <div className="col-md-12">
                    <div className="panel panel-default card-view">
                        <div className="panel-heading panel-heading2">
                            <div className="pull-left">
                                <h6 className="panel-title txt-dark">Dealership details</h6>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="panel-wrapper collapse in">
                            <div className="panel-body">

                                <div className="panel-wrapper collapse in">
                                    <div className="panel-body">
                                        <ul className="flex-stat mt-40">
                                            <li>
                                                <span className="block grey-text">Name</span>
                                                <span className="block  txt-dark weight-500 font-18"><span className="counter-anim blue-text">{this.state.data.dealershipName}</span></span>
                                            </li>

                                            <li>
                                                <span className="block grey-text">Contact name</span>
                                                <span className="block  txt-dark weight-500 font-18"><span className="counter-anim blue-text">{this.state.data.contactName}</span></span>
                                            </li>
                                            <li>
                                                <span className="block grey-text">Contact number</span>
                                                <span className="block  txt-dark weight-500 font-18"><span className="counter-anim blue-text">{this.state.data.contactNumber}</span></span>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                    <hr/>

                                </div>

                                <div className="tab-struct custom-tab-1 mt-40">
                                    <ul role="tablist" className="nav nav-tabs " id="myTabs_7" >
                                        <li className="" role="presentation">
                                        <a aria-expanded="false" data-toggle="tab" role="tab" id="home_tab_7" href="#home_8">Agents</a>
                                        </li>
                                        <li role="presentation" className="active">
                                        <a data-toggle="tab" id="profile_tab_7" role="tab" href="#profile_8" aria-expanded="true">Car Stands</a>
                                        </li>
                                        <li role="presentation" className="">
                                        <a data-toggle="tab" id="profile_tab_8" role="tab" href="#profile_9" aria-expanded="true">Vehicles</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent_8" style={{ minHeight: "170px" }}>
                                        <div id="home_8" className="tab-pane fade" role="tabpanel">
                                        {
                                                this.state.data4.length > 0 &&
                                                <div className="table-wrap">

                                                    <Table headers={agentsHeader} rows={this.format3.call(this, this.state.pageOfItems3)} />
                                                    <div className="clearfix"></div>
                                                </div>
                                            }
                                            {
                                                this.state.data4.length === 0 && <h3 style={{ textAlign: 'center' }}>No agents</h3>
                                            }
                                            <Pagination items={this.state.data4} onChangePage={this.onChangePage3.bind(this)} />
                                        </div>
                                        <div id="profile_8" className="tab-pane fade active in" role="tabpanel">
                                        {
                                                this.state.data3.length > 0 &&
                                                <div className="table-wrap">

                                                    <Table headers={carstandHeader} rows={this.format2.call(this, this.state.pageOfItems2)} />
                                                    <div className="clearfix"></div>
                                                </div>
                                            }
                                            {
                                                this.state.data3.length === 0 && <h3 style={{ textAlign: 'center' }}>No carstands</h3>
                                            }
                                            <Pagination items={this.state.data3} onChangePage={this.onChangePage2.bind(this)} />
                                        </div>
                                        <div id="profile_9" className="tab-pane fade " role="tabpanel">
                                            {
                                                this.state.data2.length > 0 &&
                                                <div className="table-wrap">

                                                    <Table headers={vehiclesHeader} rows={this.format.call(this, this.state.pageOfItems)} />
                                                    <div className="clearfix"></div>
                                                </div>
                                            }
                                            {
                                                this.state.data2.length === 0 && <h3 style={{ textAlign: 'center' }}>No vehicles</h3>
                                            }
                                            <Pagination items={this.state.data2} onChangePage={this.onChangePage.bind(this)} />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
			)
	}
}

export default DealerView;

