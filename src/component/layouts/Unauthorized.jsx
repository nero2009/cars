import React, { Component } from 'react';
import './Unauthorized.css';
import {Link,Route} from 'react-router-dom';
import logoDark from '../../media/logo-dark.png'
import logoLight from '../../media/logo-light.png'
import BG from '../../media/inner.jpg'
import {AuthService} from '../../Service'
import {BASEURI,USERKEY} from '../../Constants'
import Axios from 'axios'
import localforage from 'localforage'
import Preloader from '../loaders/Preloader.jsx'

import {failedRequest,startRequest,successRequest,validatorAll,validator} from '../../CommonFunc'

class Unauthorized extends Component{

	constructor(props){
			super(props);
			this.state = {
				showEror:false,
				isSignedIn:true,
				email:'',password:'',submitButton:'Login',isSuccessful:false,failed:false,err:{email:'',password:'',all: new Set(), disabled:false}
			}
			this.handleInputChange = this.handleInputChange.bind(this)
			this.submit = this.submit.bind(this)
	}
	componentWillMount(){
		localforage.getItem(USERKEY)
		.then((user)=>{
			if (user && user.token) {
				this.props.history.push('/home/dashboard#home')
				return;
			}
			this.setState({isSignedIn:false})
		})
		.catch(err=>{

		})
	}
	componentDidMount(){
		const foo=require('../../assets/css/theme.css')
		
	}
	dummy(e){
		e.preventDefault();
		return;
	}
	handleInputChange(e){
		this.setState({[e.target.name]:e.target.value});
		if (this.state.showEror) {
			this.setState((prevState, props)=>{
				return {showEror: !prevState.showEror}
			 })
		}
		
		validator({name:e.target.id,value:e.target.value},'Login',this);
        return;
	}

	submit(e){
		e.preventDefault();
		validatorAll([{name:'email',value:this.state.email},
			{name:'password',value:this.state.password}],'Login',this);
		if (this.state.err.all.size > 0) {
            // this.setState({sending:false,disabled:false})
            return;
        }
		this.setState({submitButton: '...Sending'});
		const Auth_Service = AuthService(BASEURI,Axios);
		Auth_Service.login({password:this.state.password,email:this.state.email})
		.then(res=>{
			return localforage.setItem(USERKEY,res.data);
		})
		.then( ()=> {
			this.props.history.push('/home/dashboard#home')
		})
		.catch(err=>{
			this.setState({submitButton: 'Login'});
			//console.log(err.response);
			//failedRequest.call(this,"Login Unsuccessful");
			this.setState((prevState, props)=>{
				return {showEror: !prevState.showEror}
			 })

			// setTimeout(()=>this.setState((prevState, props)=>{
			// 	return {showEror: !prevState.showEror}
			//  }),3000) 
		})
		
	}



	render(){
		
		return (
			<div>
				{
					this.state.isSignedIn && <Preloader/>
				}
				{
					!this.state.isSignedIn && 
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
											<a href="#" className="hamburger-toggle" data-toggle-class="#menu1;hidden-xs">
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
											<a className="btn block btn--icon bg--facebook type--uppercase" href="#" onClick={this.dummy.bind(this)}>
												<span className="btn__text">
													<i className="socicon-facebook"></i>
													Login with Facebook
												</span>
											</a>
											<a className="btn block btn--icon bg--googleplus type--uppercase" href="#" onClick={this.dummy.bind(this)}>
												<span className="btn__text">
													<i className="socicon-google"></i>
													Login with Google
												</span>
											</a>
											<hr/>
											<p>Login using your CarFacts account</p>
											<form className="form-email">
												<div className="row">
													<div className={this.state.err.email.length > 0?"has-error col-sm-12 form-group":"col-sm-12 form-group"}>
														<input type="email" name="email" id="email" value={this.state.email} className="validate-required validate-email" onChange={this.handleInputChange} placeholder="Email Address" />
														<span className="error-text">{this.state.err.email}</span>
													</div>
													<div className={this.state.err.password.length > 0?"has-error col-sm-12 form-group":"col-sm-12 form-group"}>
														<input type="password" name="password" id="password" value={this.state.password} className="validate-required" placeholder="Password" onChange={this.handleInputChange} />
														<span className="error-text">{this.state.err.password}</span>
													</div>
													<div className="col-sm-12">
														<button className="btn btn--primary "  type="submit" onClick={this.submit} disabled={this.state.disabled || this.state.err.all.size > 0}>{this.state.submitButton}</button>
													</div>
												</div>
												
											</form>
											
												<div className="alert alert-danger alert-d mt--1" style={{display:this.state.showEror?'block':'none'}}>
													Invalid username or password.
											    </div>
											
											
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
				}
			    
			</div>
			)
	}
}

export default Unauthorized;