import React, { Component } from 'react';
import App from "../app/App.react";
import Home from "../home/Home.react";
import Login from "../login/Login.react";
import UserStore from '../../stores/UserStore';
import LoginActionCreator from '../../actions/LoginActionCreator';
import { BrowserRouter as Router, Route, Redirect, NavLink, Link } from 'react-router-dom';
import {
	LOGIN_SUCCESS,
	LOGGED_IN,
    LOGOUT
} from '../../constants/AppConstants';

class Nav extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: UserStore.isLoggedIn()
		};
	}

	componentDidMount() {
        UserStore.addActionListener(LOGGED_IN, this.onLoggedIn);
    }

    componentWillUnmount() {
        UserStore.removeActionListener(LOGGED_IN, this.onLoggedIn);
	}
	
	onLoggedIn = () => {
		console.log("User was logged in !");
	}

	doLogout() {
		LoginActionCreator.doLogout();
	}	

	render() {
		return (
			<nav className="navbar navbar-inverse" style={{borderRadius: 0}}>
				<div className="container">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false"
							aria-controls="navbar">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="#">Project name</a>
					</div>
					<div id="navbar" className="collapse navbar-collapse">
						<ul className="nav navbar-nav" >
							<li className="active">
								<a >Home</a>
							</li>
							<li>
								<a >About</a>
							</li>
							<li>
								<a href="#" onClick={this.doLogout.bind(this)}>Logout</a>
							</li>
						</ul >
					</div >
				</div >
			</nav >
		);
	}
}

export default Nav;
