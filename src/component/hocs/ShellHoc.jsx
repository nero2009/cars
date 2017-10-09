import React, { Component } from 'react';



const ShellHoc = (Comp)=>{
	class Home extends Component{
		constructor(props){
			super(props);
		}

		render(){
			return (
				<Comp {...this.props}/>
				)
		}
	}

	return Home;


}

export default ShellHoc;