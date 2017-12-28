import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table } from '../tables/Table.jsx'
import Pagination from '../pagination/Pagination.jsx' 

class SentMessages extends Component{
	constructor(props) {
		super(props);
		this.state = { header: [], rows: [], data: [], pageOfItems: [], pager: {}}
	}

	componentDidMount() {
		const { GETSENTMESSAGES, MESSAGES } = this.props.Constants;
		const Id = this.props.user.id;
		this.props.ServiceObj.getItem(MESSAGES, GETSENTMESSAGES, Id)
		.then(({ data }) => {
			this.setState({ data: data || [] });
		})
		.catch(err => {

		})

		this.setState({
			header: ['#', 'To', 'Subject', 'Read', 'Actions'],
			rows: [{ no: 1, to: 'Nero', subject: 'Test Mail', read: <Link to="#"><i className="fa fa-eye"></i></Link>, Actions: <Link to="#"><i className="fa fa-archive"></i></Link>}]
		})
	}

	onChangePage(pageOfItems, pager) {
		this.setState({ pageOfItems, pager });
	}
	format(data) {
		return data.map((item, index) => {
			return {
				SN: item.no,
				To: item.to,
				Subject: item.subject,
				Read: <Link to={`/home/messages/view/${item.messageId}`} className="mr-15 btn btn-info"><i className="fa fa-eye"></i></Link>,
				Actions: <Link to={`/home/messages/archive/${item.messageId}`} className="mr-15 btn btn-info"><i className="fa fa-archive"></i></Link>
			}
		})

	}

	render(){
		return(
			<div>
				<div className="panel panel-default card-view">
					<div className="panel-heading">
						<div className="pull-left">
							<h6 className="panel-title txt-dark">Messages</h6>
						</div>
						<div className="clearfix"></div>
					</div>
					<div className="panel-wrapper collapse in">
						<div className="panel-body">
							<div className="table-wrap">
								<Table headers={this.state.header} rows={this.format.call(this, this.state.pageOfItems)} />
								<div className="clearfix"></div>
							</div>
							<Pagination items={this.state.data} onChangePage={this.onChangePage.bind(this)} />
						</div>
					</div>
					</div>
			</div>
			);
	}
}

export default SentMessages;