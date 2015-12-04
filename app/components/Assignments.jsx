import React from 'react';
import {Link} from 'react-router';
import UserActions from 'actions/UserActions';
import UserStore from 'stores/UserStore';
import Immutable from 'immutable';
import AssignmentsStore from 'stores/AssignmentsStore';

export default class Assignments extends React.Component {
    constructor(props) {
    super(props);
    this.state = UserStore.getState();
    this.states = AssignmentsStore.getState()
  }

  componentDidMount() {
    UserStore.listen(this._onChange);
    AssignmentsStore.listen(this._onChange);
  }

  componentWillUnmount() {
    UserStore.unlisten(this._onChange);
    AssignmentsStore.unlisten(this._onChange);
  }

  _onChange = () => {
    this.setState({
      user: UserStore.getState().user,
      allAssignments: AssignmentsStore.getState().allAssignments
    });
  }


  render() {
    let allAssignments = this.states.allAssignments;
    return (
      <div>
      <div className ="container-fluid">
          
            <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">
                            Assignments <small>Assignments due</small>
                        </h1>
                        <ol className="breadcrumb">
                            <li className="active">
                                <i className="fa fa-dashboard"></i> <Link to ="/dashboard/main">Dashboard</Link>
                            </li>
                            <li>
                            Assignments
                            </li>
                        </ol>
                        <div class="container">
                          <h2>Current Assignments</h2>
                          <p>Below you will find a listing of your current assignments.</p>            
                          <table class="table table-hover">
                            <thead>
                              <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Score</th>
                              </tr>
                            </thead>
                            <tbody>
                            {allAssignments.map((ass) =>
                              <tr>
                                <td>{ass.title}</td>
                                <td>{ass.description}</td>
                                <td>{ass.score}</td>
                              </tr>
                              )};
                            </tbody>
                          </table>
                        </div>
                    </div>
                </div>
          </div>
            
        </div>
    );
  }
}
