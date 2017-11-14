import React, { Component } from 'react';
import './Unauthorized.css';
import {Link,Route} from 'react-router-dom';
import logoDark from '../../media/logo-dark.png'
import logoLight from '../../media/logo-light.png'
import BG from '../../media/inner.jpg'

import {failedRequest,startRequest,successRequest,validatorAll,validator} from '../../CommonFunc'

class Unauthorized extends Component{

	constructor(props){
			super(props);
			this.state = {
				email:'',password:'',submitButton:'Login',isSuccessful:false,failed:false,err:{email:'',password:'',all: new Set(), disabled:false}
			}
			this.handleInputChange = this.handleInputChange.bind(this)
			this.submit = this.submit.bind(this)
			this.nero='nero'
	}
	componentDidMount(){
		
	}

	handleInputChange(e){
		this.setState({[e.target.name]:e.target.value})
		validator({name:e.target.id,value:e.target.value},'Login',this);
        return;
	}

	submit(e){
		validatorAll([{name:'email',value:this.state.email},
			{name:'password',value:this.state.password}],'Login',this);
		if (this.state.err.all.size > 0) {
            // this.setState({sending:false,disabled:false})
            return;
        }
        this.setState({submitButton: '...Sending'});

		// startRequest.call(this);
		// const {email,password} = this.state;
		// const data ={email,password}
		// Axios.put(url,data).then((function(res){
		// 	this.setState({submitButton: 'Login Success',isSuccessful:true});			
			
		// 	alert(res.data);
		// }).bind(this)).catch((err)=>{
		// 	this.setState({submitButtonText: 'Login',isSuccessful:false});
			
		// 	alert(err);
		// })
		failedRequest.call(this,"Login Unsuccessful");
	}



	render(){
		
		return (
			<div>
			    <div className="nav-container ">
		            <div className="bar bar--sm visible-xs bar--transparent bar--absolute">
		                <div className="container">
		                    <div className="row">
		                        <div className="col-xs-3 col-sm-2">
		                            <a href="index.html">
		                                <img className="logo logo-dark" alt="logo" src={logoDark} />
		                                <img className="logo logo-light" alt="logo" src={logoLight} />
		                            </a>
		                        </div>
		                        <div className="col-xs-9 col-sm-10 text-right">
		                            <a href="#" className="hamburger-toggle" data-toggle-className="#menu1;hidden-xs">
		                                <i className="icon icon--sm stack-interface stack-menu"></i>
		                            </a>
		                        </div>
		                    </div>
		                   
		                </div>
		                
		            </div>
		            
		            <nav id="menu1" className="bar bar--sm bar-1 hidden-xs bar--transparent bar--absolute">
		                <div className="container">
		                    <div className="row">
		                        <div className="col-md-1 col-sm-2 hidden-xs">
		                            <div className="bar__module">
		                                <a href="index.html">
		                                    <img className="logo logo-dark" alt="logo" src={logoDark} />
		                                    <img className="logo logo-light" alt="logo" src={logoLight} />
		                                </a>
		                            </div>
		                            
		                        </div>
		                        <div className="col-md-11 col-sm-12 text-right text-left-xs text-left-sm">
		                            <div className="bar__module">
		                                <ul className="menu-horizontal">
		                                    <li><a href="index.html">Home</a></li>
		                                    <li><a href="#">Features</a></li>
		                                    <li><a href="#">Download</a></li>
		                                    <li><a href="#">Contact</a></li>
		                                </ul>
		                            </div>
		                            
		                            <div className="bar__module">
		                                <a className="btn btn--sm type--uppercase" href="register.html">
		                                    <span className="btn__text">
		                                        Register
		                                    </span>
		                                </a>
		                                <a className="btn btn--sm btn--primary type--uppercase" href="#">
		                                    <span className="btn__text">
		                                        Login
		                                    </span>
		                                </a>
		                            </div>
		                            
		                        </div>
		                    </div>
		                    
		                </div>
		                
		            </nav>
		            
		        </div>
		        <div className="main-container">
		            <section className="height-100 imagebg text-center" data-overlay="4">
		                <div className="background-image-holder" style={{backgroundImage:`url(${BG})`,opacity:1}}>
		                    <img alt="background" src={BG} />
		                </div>
		                <div className="container pos-vertical-center">
		                    <div className="row">
		                        <div className="col-sm-7 col-md-5">
		                            <h2>Login to continue</h2>
		                            <a className="btn block btn--icon bg--facebook type--uppercase" href="#">
		                                <span className="btn__text">
		                                    <i className="socicon-facebook"></i>
		                                    Login with Facebook
		                                </span>
		                            </a>
		                            <a className="btn block btn--icon bg--googleplus type--uppercase" href="#">
		                                <span className="btn__text">
		                                    <i className="socicon-google"></i>
		                                    Login with Google
		                                </span>
		                            </a>
		                            <hr/>
		                            <p>Login using your CarFacts account</p>
		                            <form className="form-email" action="login.php" method="POST" data-success="Authenticating Your Credentials" data-error="Please provide your email address and password.">
		                                <div className="row">
		                                    <div className={this.state.err.email.length > 0?"has-error col-sm-12":"col-sm-12"}>
		                                        <input type="email" name="email" id="email" value={this.state.email} className="validate-required validate-email" onChange={this.handleInputChange} placeholder="Email Address" />
		                                        <span className="error-text">{this.state.err.email}</span>
		                                    </div>
		                                    <div className={this.state.err.password.length > 0?"has-error col-sm-12":"col-sm-12"}>
		                                        <input type="password" name="password" id="password" value={this.state.password} className="validate-required" placeholder="Password" onChange={this.handleInputChange} />
		                                        <span className="error-text">{this.state.err.password}</span>
		                                    </div>
		                                    <div className="col-sm-12">
		                                        <button className="btn btn--primary "  type="submit" onClick={this.submit} disabled={this.state.disabled || this.state.err.all.size > 0}>{this.state.submitButton}</button>
		                                    </div>
		                                </div>
		                                
		                            </form>
		                            <span className="type--fine-print block">Dont have an account yet?
		                                <a href="register.html">Create account</a>
		                            </span>
		                            <span className="type--fine-print block">Forgot your username or password?
		                                <a href="recover.html">Recover account</a>
		                            </span>
		                        </div>
		                    </div>
		                    
		                </div>
		                
		            </section>
		        </div>
			</div>
			)
	}
}

export default Unauthorized;