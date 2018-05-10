import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '@containers/login';

export default function () {
  return (
    <Router>
      <Switch>
        <Route path={'/'} component={Login} />
      </Switch>
    </Router>
  )
}
