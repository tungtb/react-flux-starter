import React, { Component } from 'react';
import './App.css';
import Home from "../home/Home.react";
import Login from "../login/Login.react";
import UserStore from '../../stores/UserStore';
import { BrowserRouter as Router, Route, Redirect, NavLink } from 'react-router-dom';

class App extends Component {

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
					<Route path="/" render={() => (
						this.state.isLoggedIn ? <Home component={Home} /> : <Login component={Login} />
					)}/>
				</div>
			</Router>
		);
	}
}

export default App;
