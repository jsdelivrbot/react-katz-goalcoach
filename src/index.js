import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
// Components Import
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


ReactDOM.render(
  // Setup Router
  // Use push, pop, and replace to redirect...
  <Router path="/" history={browserHistory}>
    // Set paths
    <Route path="/app" component={App} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
  </Router>,
  document.getElementById('root')
);
