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

  _onProfileUpdate = () => {
    const id = this.state.user.get('id');
    const firstName = React.findDOMNode(this.refs.firstName).value;
    const lastName = React.findDOMNode(this.refs.lastName).value;
    const section = React.findDOMNode(this.refs.section).value;
    const gender = React.findDOMNode(this.refs.gender).value;
    const location = React.findDOMNode(this.refs.location).value;
    UserActions.updateProfile({
      id: id,
      firstName: firstName,
      lastName: lastName,
      section: section,
      gender: gender,
      location: location
    });
    //console.log(firstName);
  }


  render() {
    //console.log(this.state.user);
    let firstName = this.state.user.get('profile').get('firstName');
    let lastName = this.state.user.get('profile').get('lastName');
    let section = this.state.user.get('profile').get('section');
    let gender = this.state.user.get('profile').get('gender');
    let location = this.state.user.get('profile').get('location');

    
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
            <div className="col-lg-7">
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
                    <div className="panel-footer">Current Profile</div>
                </div>

                <div className="panel panel-info">
                    <div className="panel-heading">{firstName + " " + lastName}&#39;s Problem Statistics</div>
                    <div className="panel-body">
                        <p>Enter some problem statistics here</p>
                    </div>
                    <div className="panel-footer">Current problems completed</div>
                </div>
            </div>

            <div className="col-lg-4">
                <div className="panel panel-primary">
                    <div className="panel-heading">{firstName + " " + lastName}&#39;s Profile Changes</div>
                    <div className="panel-body">
                        <fieldset>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input type="firstName" className="form-control" id="firstName" placeholder={firstName} ref="firstName" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="lastName" className="form-control" id="lastName" placeholder={lastName} ref="lastName" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="section">Section</label>
                                <input type="section" className="form-control" id="section" placeholder={section} ref="section" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="gender">Gender</label>
                                <input type="gender" className="form-control" id="gender" placeholder={gender} ref="gender" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="location">Location</label>
                                <input type="location" className="form-control" id="location" placeholder={location} ref="location" />
                            </div>
                            <button className="btn btn-primary" onClick={this._onProfileUpdate}>Submit</button>
                        </fieldset>
                    </div>
                    <div className="panel-footer">Update Info</div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
  }
}
Profile.propTypes = { user: React.PropTypes.instanceOf(Immutable.Map) };