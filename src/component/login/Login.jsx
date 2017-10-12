import React, { Component } from 'react';
import './Login.css';
import {Link} from 'react-router-dom';


class Login extends Component{

	constructor(props){
			super(props);
	}
	componentDidMount(){
		
	}

	render(){
		return (
			<div className='container'>
				<div className='col-sm-12'>
					<div className="table-responsive">
						<table className='table'>
							<thead>
								<tr>
									<th>#</th>
									<th>First Name</th>
									<th>Last name</th>
									<th>UserName</th>
									<th>Role</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th>1</th>
									<td>Mark</td>
									<td>Otto</td>
									<td>Oto</td>
									<td>Engineer</td>
								</tr>
								<tr>
									<th>2</th>
									<td>Jacob</td>
									<td>Tunde</td>
									<td>Tunen</td>
									<td>DevOps</td>
								</tr>
								<tr>
									<th>3</th>
									<td>Larry</td>
									<td>Bird</td>
									<td>Birdman</td>
									<td>Work</td>
								</tr>
								<tr>
									<th>4</th>
									<td>New</td>
									<td>Man</td>
									<td>Newman</td>
									<td>Artist</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			)
	}
}

export default Login;