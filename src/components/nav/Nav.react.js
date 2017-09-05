import React, { Component } from 'react';
import './Nav.css';
import UserStore from '../../stores/UserStore';
import LoginActionCreator from '../../actions/LoginActionCreator';
import { NavLink } from 'react-router-dom';
import {
	LOGGED_IN,
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

	navLinkActive = (match, location) => {
		console.log('navLink clicked ', match, location);
	}

	render() {
		return (
			<nav className="navbar navbar-inverse" style={{ borderRadius: 0 }}>
				<div className="container">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false"
							aria-controls="navbar">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" >Project name</a>
					</div>
					<div id="navbar" className="collapse navbar-collapse">
						<ul className="nav navbar-nav" >
							<li>
								<NavLink to={'/home'} exact activeClassName="selected" >Home</NavLink>
							</li>
							<li>
								<NavLink to={'/about'} exact activeClassName="selected">About</NavLink>
							</li>
							<li>
								<a onClick={this.doLogout.bind(this)}>Logout</a>
							</li>
						</ul >
					</div >
				</div >
			</nav >
		);
	}
}

export default Nav;
