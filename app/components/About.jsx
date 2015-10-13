import React from 'react';
import {Link} from 'react-router';


export default class About extends React.Component {
  render() {
    return (
      <div>
      <p>About us and this</p>
      <div>
  <div>
  <div>
    <h1>Welcome, If ya just signed up then go ahead and sign in</h1>
    <fieldset>
      <input type="text"  placeholder="Username" ref = "email" name = "email" />
      <input type="password"  placeholder="Password" ref = "password" name = "password" />
      <button type="submit" to = "dashboard" onClick={this._onLoginSubmit}>Login</button>
    </fieldset>
    <hr/>

<p>Need an account? <Link to="register">Signup</Link></p>

  </div>
</div>
</div>
      </div>
    );
  }
}
