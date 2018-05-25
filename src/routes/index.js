import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from '@containers/app';
import Login from '@containers/login';

export default function () {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  );
}
