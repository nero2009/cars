import React, { Component } from 'react';
import './Unauthorized.css';
import {Link,Route} from 'react-router-dom';
import logoDark from '../../media/logo-dark.png'
import logoLight from '../../media/logo-light.png'
import BG from '../../media/inner.jpg'


class Unauthorized extends Component{

	constructor(props){
			super(props);
	}
	componentDidMount(){
		
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
		                <div className="background-image-holder">
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
		                            
		                            <p>Login using your CarFacts account</p>
		                            <form className="form-email" action="login.php" method="POST" data-success="Authenticating Your Credentials" data-error="Please provide your email address and password.">
		                                <div className="row">
		                                    <div className="col-sm-12">
		                                        <input type="email" name="email" className="validate-required validate-email" placeholder="Email Address" />
		                                    </div>
		                                    <div className="col-sm-12">
		                                        <input type="password" className="validate-required" placeholder="Password" />
		                                    </div>
		                                    <div className="col-sm-12">
		                                        <button className="btn btn--primary type--uppercase" type="submit">Login</button>
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