export const successRequest=function(message){
	this.setState({submitBtn:"Success"});
	this.props.swal({   
            title: "Success!",   
            text: message,
           icon: "success",  
            timer: 2000,   
            buttons: false 
        });
	setTimeout(()=>{
		this.setState({submitBtn:this.props.submitBtn,disabled:false});
	},2000)
		
}

export const failedRequest=function(message){
		this.setState({submitBtn:this.props.submitBtn,disabled:false});
		this.props.swal({   
            title: "Sorry!",   
            text: message,
           icon: "error",  
            timer: 2000,   
            buttons: false 
        });
}

export const startRequest=function(){
		this.setState({submitBtn:this.props.LoaderButton,disabled:true});
}