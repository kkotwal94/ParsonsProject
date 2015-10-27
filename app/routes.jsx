import React from 'react';
import {Route,Router,Link} from 'react-router';

import App from 'components/App';
import About from 'components/About';
import Login from 'components/Login';
import Signup from 'components/Signup';
import Dashboard from 'components/Dashboard';
import NotFound from 'components/NotFound';
import UserStore from 'stores/UserStore';
import Assignments from 'components/Assignments';
import RandomProblem from 'components/RandomProblem';
import Statistics from 'components/Statistics';
import Profile from 'components/Profile';
import Inbox from 'components/Inbox';
import Settings from 'components/Settings';
import Chat from 'components/Chat';
import DashboardDisplay from 'components/DashboardDisplay';
import CreateProblem from 'components/CreateProblem';

function requireAuth(nextState, transition) {
  if (!UserStore.getState().user.get('authenticated')) {
    transition.to('/', null, { nextPathname: nextState.location.pathname });
  }
}

export default (
  <Router>
  <Route component={App}>
    <Route path="/" component={Login} />
    <Route path="/register" component={Signup} />
    <Route path="/dashboard" component={Dashboard} onEnter={requireAuth} >
      <Route path="/about" component={About} onEnter={requireAuth}/>
      <Route path="/main" component={DashboardDisplay} onEnter={requireAuth}/>
      <Route path="/profile" component={Profile} onEnter={requireAuth}/>    
      <Route path="/assignments" component={Assignments} onEnter={requireAuth}/>
      <Route path="/randomproblem" component={RandomProblem} onEnter={requireAuth}/> 
      <Route path="/statistics" component={Statistics} onEnter={requireAuth}/> 
      <Route path="/inbox" component={Inbox} onEnter={requireAuth}/>
      <Route path="/settings" component={Settings} onEnter={requireAuth}/>
      <Route path="/chat" component={Chat} onEnter={requireAuth}/>   
      <Route path="/createproblem" component={CreateProblem} onEnter={requireAuth}/>       
      <Route path="*" component={NotFound}/>
  </Route>
  </Route>
  </Router>
);
