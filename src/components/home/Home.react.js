import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import Nav from "../nav/Nav.react";
import UserStore from '../../stores/UserStore';
import ItemActionCreator from '../../actions/ItemActionCreator';

function getSessionData() {
	return UserStore.getSession();
}

export default class Home extends Component {

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
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Home page</h2>
					<h3>Hello {!!this.state.session ? this.state.session.userName : ""}</h3>
				</div>
				{/* <Nav /> */}
			</div>
		);
	}
}
