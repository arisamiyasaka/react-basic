import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Work from './Work.js'; // const Work = <h1>Hello React.</h1>

ReactDOM.render(<Work time={(new Date()).toLocaleTimeString()} greet={"Hello React!!"} />, document.getElementById('work'));
registerServiceWorker();
