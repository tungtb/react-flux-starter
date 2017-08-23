import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import UserStore from '../../stores/UserStore';
import LoginActionCreator from '../../actions/LoginActionCreator';
import {
    LOGGED_IN,
} from '../../constants/AppConstants';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        };
    }

    componentDidMount() {
        UserStore.addActionListener(LOGGED_IN, this.onLoggedIn);
    }

    componentWillUnmount() {
        UserStore.removeActionListener(LOGGED_IN, this.onLoggedIn);
    }

    onLoggedIn = () => {
        // alert("You was logged in ! " + UserStore.getSession().userName);
        // console.log(this.props);
        // this.props.history.push('/home')
    }

    handeInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    formIsValid() {
        this.state.formError = '';
        if (!this.state.userName) {
            this.setState({
                formError: this.state.formError += '<p>User name is required !</p>'
            });
        }
        if (!this.state.password) {
            this.setState({
                formError: this.state.formError += '<p>Password is required !</p>'
            });
        }
        return this.state.formError.length > 0 ? false : true;
    }

    doLogin() {
        if (this.formIsValid()) {
            LoginActionCreator.doLogin(this.state.userName, this.state.password);
        }
    }

    handleKeyPress(event) {
        if (event.key == 'Enter') {
            this.doLogin();
        }
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
                {this.state.formError ? <div style={{color: 'red', textAlign: 'center'}} dangerouslySetInnerHTML={{ __html: this.state.formError }}></div> : ''}
                <div className="Login" style={{ textAlign: 'center', marginTop: '10px' }}>
                    <input type="text" name="userName" value={this.state.userName} onKeyPress={this.handleKeyPress.bind(this)} onChange={this.handeInputChange.bind(this)} placeholder="User name" />
                    <br /><br />
                    <input type="password" name="password" value={this.state.password} onKeyPress={this.handleKeyPress.bind(this)} onChange={this.handeInputChange.bind(this)} placeholder="Password" />
                    <br /><br />
                    <button type="submit" onClick={this.doLogin.bind(this)}>Login</button>
                </div>
            </div>
        );
    }
}
