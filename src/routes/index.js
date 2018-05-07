import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import App from '@containers/app';

export default function () {
  return (
    <Router>
      <Route path={'/'} component={App} />
    </Router>
  )
}
