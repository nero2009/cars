import React, { Component } from 'react';
import './CarStand.css';
import {Link} from 'react-router-dom';
import {Table} from '../tables/Table.jsx'
import Pagination from '../pagination/Pagination.jsx' 


class CarStandView extends Component{

	constructor(props){
			super(props);
			this.state={header:[],rows:[],data:{name:'',location:''},pageOfItems:[],pager:{},vehicles:[],data2:[],sold:'',inStock:''}
    }
    componentWillMount(){
        const id=this.props.match.params.id;
		const {GET,CARSTAND}=this.props.Constants;
		this.props.ServiceObj.getItem(CARSTAND,GET,id)
		.then(({data})=>{
			this.setState({data},()=>this.getVehicles.call(this));
		})
		.catch(err=>{

		})
    }
	componentDidMount(){
		this.setState({
			header:['#','vin','manufacturer','model','modelYear','color','bodyType','registered','regNo'],
			rows:[{no:1,vin:'drt455HQ',manufacturer:'Ford',model:'Ranger',modelYear:'2017',color:'black',bodyType:'muscle',registered:'yes',regNo:'10092hq',action:<Link to="#"><i className="fa fa-pencil"></i></Link>}]
		})
    }
    getVehicles(){
        const id=this.state.data.standId;
		const {GETVEHICLES,CARSTAND,GETVEHICLESSOLD,GETVEHICLESNOTSOLD}=this.props.Constants;
		this.props.ServiceObj.getItem(CARSTAND,GETVEHICLES,id)
		.then(({data})=>{
			this.setState({data2:data});
		})
		.catch(err=>{

        })
        this.props.ServiceObj.getItem(CARSTAND,GETVEHICLESSOLD,id)
		.then(({data})=>{
            this.setState({sold:data});
            return this.props.ServiceObj.getItem(CARSTAND,GETVEHICLESNOTSOLD,id)
        })
        .then(({data})=>{
            this.setState({inStock:data});
        })
		.catch(err=>{

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
					RegNo:item.regNo
					
				}
			})
	
	}
    
	render(){
		return (
			<div className="row carStandView">
                <div className="col-md-12">
                    <div className="panel panel-default card-view">
                        <div className="panel-heading">
                            <div className="pull-left">
                                <h6 className="panel-title txt-dark">Stand details</h6>
                            </div>
                        </div>    
                                    
                        <div className="panel-wrapper collapse in">
                            <div className="panel-body">
                                <ul className="flex-stat mt-40">
                                    <li>
                                        <span className="block">Name</span>
                                        <span className="block txt-dark weight-500 font-18"><span className="counter-anim">{this.state.data.name}</span></span>
                                    </li>
                                    
                                    <li>
                                        <span className="block">Location</span>
                                        <span className="block txt-dark weight-500 font-18"><span className="counter-anim">{this.state.data.location}</span></span>
                                    </li>
                                    <li>
                                        <span className="block">In stock</span>
                                       <span className="block txt-dark weight-500 font-18"><span className="counter-anim">{this.state.inStock}</span></span>
                                    </li>
                                    <li>
                                        <span className="block">Sold</span>
                                       <span className="block txt-dark weight-500 font-18"><span className="counter-anim">{this.state.sold}</span></span>
                                    </li>
                                </ul>
                            </div>
                                
                        </div>
                    </div>
                </div>
                
                <div className="col-md-12">
                    <div className="panel panel-default card-view">
                        <div className="panel-heading">
                            <div className="pull-left">
                                <h6 className="panel-title txt-dark">Vehicles </h6>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="panel-wrapper collapse in">
                            <div className="panel-body">
                                {
                                    this.state.data2.length > 0 && 
                                    <div className="table-wrap">
                                    
                                        <Table headers={this.state.header} rows={this.format.call(this,this.state.pageOfItems)}/>
                                        <div className="clearfix"></div>
                                    </div>
                                }
                                {
                                    this.state.data2.length === 0 && <h3 style={{textAlign:'center'}}>No Vehicles</h3>
                                }
                                <Pagination items={this.state.data2} onChangePage={this.onChangePage.bind(this)} />	
                            </div>	
                        </div>	
                    </div>
                </div> 
				
			
			</div>
			)
	}
}

export default CarStandView;