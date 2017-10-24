import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Clock, Greet } from './Work.js'; // const Work = <h1>Hello React.</h1>

ReactDOM.render(<Greet />, document.getElementById('root'));
ReactDOM.render(<Clock />, document.getElementById('work'));
registerServiceWorker();
