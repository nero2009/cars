import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class EditCarStand extends Component{
	constructor(props) {
		super(props);
		
	}

	render(){
		return(
			<div>
				<div className="form-wrap">
					<form >
						
						<div className="form-group">
							<label htmlFor="">
								State
							</label>
							<select class="custom-select">
							  <option selected>Open this select menu</option>
							  <option value="1">One</option>
							  <option value="2">Two</option>
							  <option value="3">Three</option>
							</select>
						</div>
						<div className="form-group">
							<label htmlFor="">
								Location
							</label>
							<textarea className="form-control" placeholder="Text"></textarea>
						</div>
						<div className="form-group">
							<label htmlFor="">
								Name
							</label>
							<textarea className="form-control" placeholder="Text"></textarea>
						</div>
						
					</form>
				</div>	
			</div>
			)
	}
}

export default = EditCarStand;