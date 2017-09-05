import React, { Component } from 'react';
import Nav from "../nav/Nav.react";
import Home from "../home/Home.react";
import About from "../about/About.react";
import Login from "../login/Login.react";
import UserStore from '../../stores/UserStore';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';

function getSessionData() {
	return UserStore.getSession();
}

export default class Main extends Component {

	constructor(props) {
		super(props);
		this.state = {
			session: getSessionData()
		};
	}

	componentDidMount() {

	}

	componentWillUnmount() {

	}

	render() {
		return (
			<Router>
				<div className="Main">
					<Nav />
					<Route path='/' component={Home} exact={true}></Route>
					<Route path='/home' component={Home} ></Route>
					<Route path='/about' component={About}></Route>
					<Route path='/login' component={Login}></Route>
				</div>
			</Router>
		);
	}
}