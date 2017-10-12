import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Form extends Component{

	constructor(props) {
		super(props);
		
	}

	componentDidMount() {
		
	}

	render(){
		return(
			<div>
				<div className="form-wrap">
					<form >
						<div className="form-group">
							<label >
								Firstname
							</label>
							<input type="text" className="form-control" placeholder="Firstname"/>
						</div>
						<div className="form-group">
							<label >
								Lastname
							</label>
							<input type="text" className="form-control" placeholder="Lastname"/>
						</div>
						<div className="form-group">
							<label htmlFor="">
								Email
							</label>
							<input type="email" className="form-control" placeholder="Lastname"/>
						</div>
						<div className="form-group">
							<label htmlFor="">
								TextArea
							</label>
							<textarea className="form-control" placeholder="Text"></textarea>
						</div>
						<button type="button" class="btn btn-success btn-animate">
							<span className="btn-text">Submit</span>
						</button>
					</form>
				</div>	
			</div>
			)
	}
}

export default Form;