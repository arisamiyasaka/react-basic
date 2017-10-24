import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './work.js';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('work'));
registerServiceWorker();
