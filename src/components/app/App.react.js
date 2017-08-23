import React, { Component } from 'react';
import './App.css';
import Home from "../home/Home.react";
import Login from "../login/Login.react";
import UserStore from '../../stores/UserStore';
import { BrowserRouter as Router, Route, Redirect, NavLink } from 'react-router-dom';
import {
	LOGGED_IN,
    LOGOUT
} from '../../constants/AppConstants';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: UserStore.isLoggedIn()
		};
	}

	componentDidMount() {
        UserStore.addActionListener(LOGGED_IN, this.onLoggedIn);
        UserStore.addActionListener(LOGOUT, this.onLogout);
    }

    componentWillUnmount() {
        UserStore.removeActionListener(LOGGED_IN, this.onLogout);
        UserStore.removeActionListener(LOGOUT, this.onLogout);
	}
	
	onLoggedIn = () => {
		console.log("You was logged in ! " + UserStore.getSession().userName);
		this.setState({
			isLoggedIn: true
		});
	}
	
	onLogout = () => {
		console.log("Logout");
		this.setState({
			isLoggedIn: false
		});
	}

	render() {
		return (
			<div>
				{this.state.isLoggedIn ? <Home component={Home} /> : <Login component={Login} />}
			</div>
		);
	}
}

export default App;
