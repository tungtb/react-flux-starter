import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import Nav from './components/nav/Nav.react';
import App from './components/app/App.react';
import registerServiceWorker from './registerServiceWorker';
// import { BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router-dom';

ReactDOM.render(<Router routes={Nav} />, document.getElementById('root'));
registerServiceWorker();
