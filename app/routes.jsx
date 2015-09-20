import React from 'react';
import Route from 'react-router';

import App from 'components/App';
import About from 'components/About';
import Login from 'components/Login';
import Signup from 'components/Signup';
import Dashboard from 'components/Dashboard';
import NotFound from 'components/NotFound';
import UserStore from 'stores/UserStore';

function requireAuth(nextState, transition) {
  if (!UserStore.getState().user.get('authenticated')) {
    transition.to('/', null, { nextPathname: nextState.location.pathname });
  }
}

export default (
  <Route component={App}>
    <Route name ="login" path="/" component={Login} />
    <Route name ="signup"path="/signup" component={Signup} />
    <Route name ="dashboard" path="/dashboard" component={Dashboard} onEnter={requireAuth} />
    <Route name ="about" path="/about" component={About} onEnter={requireAuth}/>
    <Route path="*" component={NotFound}/>
  </Route>
);
