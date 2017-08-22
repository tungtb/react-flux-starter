import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import Nav from './components/nav/Nav.react';
import App from './components/app/App.react';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
