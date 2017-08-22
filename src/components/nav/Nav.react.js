import React, { Component } from 'react';
import App from "../app/App.react";
import Home from "../home/Home.react";
import Login from "../login/Login.react";
import UserStore from '../../stores/UserStore';
import { BrowserRouter as Router, Route, Redirect, NavLink, Link } from 'react-router-dom';

class Nav extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: UserStore.isLoggedIn()
		};
	}


	render() {
		return (
			<Router>
				<div>
					<ul>
						<li><Link to="/home">Home</Link></li>
						<li><Link to="/">Login</Link></li>
					</ul>
					<Route path="/login" component={Login} />
					<Route path="/home" component={Home} />
				</div>
			</Router>
		);
	}
}

export default Nav;
