import React from 'react';
import Route from 'react-router';

import App from 'components/App';
import About from 'components/About';
import Login from 'components/Login';
import Dashboard from 'components/Dashboard';

import UserStore from 'stores/UserStore';

function requireAuth(nextState, transition) {
  if (!UserStore.getState().user.get('authenticated')) {
    transition.to('/login', null, { nextPathname: nextState.location.pathname });
  }
}

export default (
  <Route component={App}>
    <Route path="/" component={Login} />
    <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
    <Route path="about" component={About} onEnter={requireAuth}/>
  </Route>
);
