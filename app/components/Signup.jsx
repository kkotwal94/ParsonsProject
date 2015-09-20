import React from 'react';
import {Link} from 'react-router';
import UserStore from 'stores/UserStore';

//import 'scss/components/_signup';

export default class Signup extends React.Component {
		constructor(props) {
    super(props);
    this.state = UserStore.getState();
  }

  componentDidMount() {
    UserStore.listen(this._onChange);
  }

  componentWillUnmount() {
    UserStore.unlisten(this._onChange);
  }

  _onChange = () => {
    this.setState({
      user: UserStore.getState().user
    });
  }
render() {
  return (
	<div>
	<div className="wrapper2">
	<div className="container">
		<h1>Welcome</h1>
		<form action = "/signup" method = "post">
			<input type="text" className = "form-control" placeholder="Username" name = "email"/>
			<input type="password" className = "form-control" placeholder="Password" name = "password"/>
      <input type="text" className = "form-control" placeholder="First Name" name = "firstName"/>
      <input type="text" className = "form-control" placeholder="Last Name" name = "lastName"/>
      <input type="text" className = "form-control" placeholder="Section #" name = "section"/>
			<button type="submit" id="login-button">Signup</button>
		</form>
		<hr/>
<p>Already have an account? <Link to="/">Log in</Link></p>
	</div>
</div>
</div>
			);
	}
}