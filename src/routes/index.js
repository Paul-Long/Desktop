import React from 'react';
import {HashRouter as Router} from 'react-router-dom';

import App from '@containers/app';

console.log(App);

export default function () {
  return (
    <Router>
      <App />
    </Router>
  )
}
