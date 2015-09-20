import React from 'react';
import { Link } from 'react-router';

import UserActions from 'actions/UserActions';



export default class Navigation extends React.Component {

  _onLogout = () => {
    UserActions.logout();
  }

  render() {
    return (
      <div>
      <p> We are inside to do stuff</p>
      </div>
    );
  }

}

Navigation.propTypes = { UserStore: React.PropTypes.object };
