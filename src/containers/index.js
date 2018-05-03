console.log('running in electron: ', require('is-electron-renderer'));
import React from 'react';
import ReactDOM from 'react-dom';
import './style.less';

ReactDOM.render(<h1>Hello World</h1>, document.getElementById('main'));
