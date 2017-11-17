import React, { Component } from 'react';
import './Preloader.css'


class PreLoader extends Component{
	constructor(props){
		super(props);
	}

	render(){
		
		return (
			<div className="preloader2" >
		        <div className="loader">
		            <div className="loader__figure"></div>
		            <p className="loader__label">Auto dealer</p>
		        </div>
		    </div>
			)
	}
}

export default PreLoader;



