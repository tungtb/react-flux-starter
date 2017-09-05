import React, { Component } from 'react';
import UserStore from '../../stores/UserStore';

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
			<div className="Home">
				<div className="home-header">
					<h2>Home page</h2>
					<h3>Hello {!!this.state.session ? this.state.session.userName : ""}</h3>
				</div>
			</div>
		);
	}
}
