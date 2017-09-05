import React, { Component } from 'react';
import './App.css';
import Login from "../login/Login.react";
import Main from "../main/Main.react";
import UserStore from '../../stores/UserStore';
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
			this.state.isLoggedIn ? <Main component={Main} /> : <Login component={Login} />
		);
	}
}

export default App;
