import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class CreateVehicles extends Component{
	constructor(props) {
		super(props);
		this.handleInputChange=this.handleInputChange.bind(this);
		this.submit=this.submit.bind(this);
		this.clear=this.clear.bind(this);
		this.state={vin:'',manufacturer:'',model:'',modelYear:'',color:'',bodyType:'',registered:'',regNo:'',submitBtn:this.props.submitBtn,
		err:{vin:'',manufacturer:'',model:'',modelYear:'',color:'',bodyType:'',registered:'',regNo:'',general:'',all: new Set()},disabled:false }

	}

	componentDidMount() {
		
	}

	handleInputChange(e){
		this.setState({[e.target.name]:e.target.value})
		this.props.validator({name:e.target.name,value:e.target.value},'Vehicle',this)
		return;
	}

	clear(){
		this.setState({vin:'',manufacturer:'',model:'',modelYear:'',color:'',bodyType:'',registered:'',regNo:''})
	}

	submit(){
		this.props.validatorAll([
				{name:'vin',value:this.state.vin},{name:'manufacturer',value:this.state.manufacturer},
				{name:'model',value:this.state.model},{name:'modelYear',value:this.state.modelYear},
				{name:'color',value:this.state.color},{name:'bodyType',value:this.state.bodyType},
				{name:'registered',value:this.state.registered},{name:'regNo',value:this.state.regNo}],
				'Vehicle',this)
		if (this.state.err.all.size > 0) {
            // this.setState({sending:false,disabled:false})
            return;
        }
        this.props.startRequest.call(this);
		const {vin,manufacturer,model,modelYear,color,bodyType,registered,regNo} = this.state;
		const data ={vin,manufacturer,model,modelYear,color,bodyType,registered,regNo}
		this.props.failedRequest.call(this,"vehicle not created.");
	}

	render(){
		return(
				<div className="row">
				<div className="col-md-6 col-md-offset-3">
					<div className="panel panel-default card-view panel-refresh">
						<div className="panel-heading">
							<div className="clearfix"></div>
						</div>
						<div className="panel-wrapper collapse in">
							<div className="panel-body">
								<form >
									<div className={this.state.err.vin.length > 0?"has-error form-group":"form-group"}>
										<label htmlFor="" className="control-label">
											VIN(Vehicle Identification Number)
										</label>
										<input className="form-control" name="vin" value={this.state.vin}  onChange={this.handleInputChange} />
										<span className="error-text">{this.state.err.vin}</span>
									</div>
									<div className={this.state.err.manufacturer.length > 0?"has-error form-group":"form-group"}>
										<label htmlFor="" className="control-label">
											Manufacturer
										</label>
										<input className="form-control" id="manufacturer" name="manufacturer" value={this.state.manufacturer} onChange={this.handleInputChange} />
										<span className="error-text">{this.state.err.manufacturer}</span>
									</div >
									<div className={this.state.err.model.length > 0?"has-error form-group":"form-group"}>
										<label htmlFor="" className="control-label">
											Model
										</label>
										<input className="form-control" id="model" name="model" value={this.state.model} onChange={this.handleInputChange} />
										<span className="error-text">{this.state.err.model}</span>
									</div>
									<div className={this.state.err.modelYear.length > 0?"has-error form-group":"form-group"}>
										<label htmlFor="" className="control-label">
											Model Year
										</label>
										<input className="form-control" name="modelYear" id="modelYear" value={this.state.modelYear} type="number" onChange={this.handleInputChange} />
										<span className="error-text">{this.state.err.modelYear}</span>
									</div>
									<div className={this.state.err.color.length >0?"has-error form-group":"form-group"}>
										<label htmlFor="" className="control-label">
											Color
										</label>
										<input className="form-control" name="color" id="color" value={this.state.color} onChange={this.handleInputChange} />
										<span className="error-text">{this.state.err.color}</span>
									</div>
									<div className={this.state.err.bodyType.length >0?"has-error form-group":"form-group"}>
										<label htmlFor="" className="control-label">
											Body Type
										</label>
										<input className="form-control" name="bodyType" id="bodyType" value={this.state.bodyType} onChange={this.handleInputChange} />
										<span className="error-text">{this.state.err.bodyType}</span>
									</div>
									<div className={this.state.err.registered.length >0?"has-error form-group":"form-group"}>
									    <label className="control-label" >Registered</label>
									    <select className="form-control" id="registered" value={this.state.registered} onChange={this.handleInputChange} name="registered">
									      <option>Yes</option>
									      <option>No</option>
									    </select>
									    <span className="error-text">{this.state.err.registered}</span>
									 </div>
									 <div className={this.state.err.regNo.length >0?"has-error form-group":"form-group"}>
										<label htmlFor="" className="control-label">
											Reg No
										</label>
										<input className="form-control" id="regNo" name="regNo" value={this.state.regNo}  onChange={this.handleInputChange} />
										<span className="error-text">{this.state.err.regNo}</span>
									</div>
									<div className="form-actions mt-10">
										<button type="button" className="btn btn-success  mr-10" disabled={this.state.disabled || this.state.err.all.size > 0} onClick={this.submit}> Submit</button>
										<button type="button" className="btn btn-default" onClick={this.clear}>Cancel</button>
									</div>
								</form>
							</div>
						</div>
					</div>
						
				</div>
			</div>
			)
	}
}

export default CreateVehicles;