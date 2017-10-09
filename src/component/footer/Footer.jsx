import React, { Component } from 'react';
import './Footer.css'


class Footer extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<footer className="footer container-fluid pl-30 pr-30">
				<div className="row">
					<div className="col-sm-12">
						<p>2017 &copy; Carfacts Nigeria. A HDQ Studio Initiative</p>
					</div>
				</div>
			</footer>
			)
	}

}

export default Footer;