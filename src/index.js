import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WebApp from './WebApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<WebApp />, document.getElementById('root'));

serviceWorker.unregister();
