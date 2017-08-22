import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import UserStore from '../../stores/UserStore';
import LoginActionCreator from '../../actions/LoginActionCreator';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        };
    }

    componentDidMount() {
        UserStore.addLoggedInListener(this.onLoggedIn);
    }

    componentWillUnmount() {
        UserStore.removeChangeListener(this.onLoggedIn);
    }

    onLoggedIn = () => {
        alert("You was logged in ! " + UserStore.getSession().userName);
        console.log(this.props);
        this.props.history.push('/home')
    }

    handeInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    doLogin() {
        console.log(this.state);
        LoginActionCreator.doLogin(this.state.userName, this.state.password);
    }

    render() {
        return (
            <div>
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h2>Login page</h2>
                    </div>
                </div>
                <div className="Login" style={{textAlign: 'center', marginTop: '10px'}}>
                    <input type="text" name="userName" value={this.state.userName} onChange={this.handeInputChange.bind(this)} placeholder="User name" />
                    <br /><br />
                    <input type="password" name="password" value={this.state.password} onChange={this.handeInputChange.bind(this)} placeholder="Password" />
                    <br /><br />
                    <button onClick={this.doLogin.bind(this)}>Login</button>
                </div>
            </div>
        );
    }
}
