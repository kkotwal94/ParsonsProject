import React from 'react';
import {Link} from 'react-router';
import UserActions from 'actions/UserActions';
import UserStore from 'stores/UserStore';
import Immutable from 'immutable';

export default class Profile extends React.Component {
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
    let firstName = this.state.user.get('profile').get('firstName');
    let lastName = this.state.user.get('profile').get('lastName');
    let section = this.state.user.get('profile').get('section');
    let gender = this.state.user.get('profile').get('section');
    let location = this.state.user.get('profile').get('user');
    return (
      <div>
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12">
                 <h1 className="page-header">
                            Profile <small>My Info</small>
                        </h1>

                <ol className="breadcrumb">
                    <li className="active"> <i className="fa fa-dashboard"></i> 
                        <Link to="/dashboard/main">Dashboard</Link>
                    </li>
                    <li>Profile</li>
                </ol>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-8">
                <div className="panel panel-info">
                    <div className="panel-heading">{firstName + " " + lastName}&#39;s Profile</div>
                    <div className="panel-body">
                        <ul className="list-group">
                            <li className="list-group-item">{"First Name: " + firstName}</li>
                            <li className="list-group-item">{"Last Name: " + lastName}</li>
                            <li className="list-group-item">{"Section: " + section}</li>
                            <li className="list-group-item">{"Gender: " + gender}</li>
                            <li className="list-group-item">{"Location: " + location}</li>
                        </ul>
                    </div>
                    <div className="panel-footer">Panel footer</div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
  }
}
