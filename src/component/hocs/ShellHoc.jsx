import React, { Component } from 'react';
import {failedRequest,startRequest,successRequest,validatorAll,validator} from '../../CommonFunc'
import swal from 'sweetalert';


const ShellHoc = (Comp)=>{
	class Home extends Component{
		constructor(props){
			super(props);
		}

		render(){
			const LoaderButton=<span><i className="fa fa-circle-o-notch fa-spin"></i> Loading</span>;
			return (
				<Comp {...this.props} swal={swal}  LoaderButton={LoaderButton} submitBtn={`Submit`} validator={validator} validatorAll={validatorAll} failedRequest={failedRequest} startRequest={startRequest} successRequest={successRequest}/>
				)
		}
	}

	return Home;


}

export default ShellHoc;