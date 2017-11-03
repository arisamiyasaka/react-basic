import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Work from './Work.js';

ReactDOM.render(<Work />, document.getElementById('work'));
registerServiceWorker();
