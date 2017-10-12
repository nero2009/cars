import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export const Table = ({props})=>{
	return (
		<div className="table-responsive">
					<table class='table'>
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
		)
}

