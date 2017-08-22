import React, { Component } from 'react';
import App from "../app/App.react";
import Home from "../home/Home.react";
import Login from "../login/Login.react";
import UserStore from '../../stores/UserStore';
import { IndexRoute } from 'react-router';
import { BrowserRouter as Router, Route, Redirect, NavLink } from 'react-router-dom';

class Nav extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: UserStore.isLoggedIn()
		};
	}


	render() {
		return (
			<Route path="/" component={App} >
				<div>
					{/* <ul>
						<li><NavLink to="/home">Home</NavLink></li>
						<li><NavLink to="/">Login</NavLink></li>
					</ul> */}
					<IndexRoute component={Home} />
					<Route path="/login" component={Login} />
					<Route path="/home" component={Home} />
				</div>
			</Route>
			// <h1>OKOK</h1>
		);
	}
}

export default Nav;
