import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Foo from './Work.js'; // const Work = <h1>Hello React.</h1>

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Foo />, document.getElementById('work'));
registerServiceWorker();
