import React,{Component} from 'react'
import localforage from 'localforage'
import Preloader from '../loaders/Preloader.jsx'
import  {BASEURI,TOKENKEY, USERKEY} from '../../Constants'
import Authorized from './Authorized.jsx'

class Auth extends Component{
    constructor(props){
        super(props)
        this.state={
            content: Preloader
        }

    }

    componentDidMount(){
        this.authenticate()
        
    }

    authenticate=()=>{
        
        localforage.getItem(USERKEY)
		.then((user)=>{
			if (user && user.token) {
                
                Promise.resolve(true)
                .then((status)=>{
                    console.log(status)
                    if(status){

                        if(this.props.location.pathname == '/login'){
                            this.props.history.push('/home/dashboard')
                        }else{
                            this.setState({
                                content:Authorized
                            })
                        }
                    }
                })

                
            }else{
                this.props.history.push('/login')
            }
        })
    }

    render(){
        
        return(
            <div>
                <this.state.content {...this.props}/>
            </div>
        )
    }
}

export default Auth
