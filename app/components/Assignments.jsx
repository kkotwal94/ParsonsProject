import React from 'react';
import {Link} from 'react-router';
import UserActions from 'actions/UserActions';
import UserStore from 'stores/UserStore';
import Immutable from 'immutable';
import AssignmentsActions from 'actions/AssignmentsActions';
import AssignmentsStore from 'stores/AssignmentsStore';
import CreateAssignments from './CreateAssignments';

export default class Assignments extends React.Component {
    constructor(props) {
    super(props);
    this.state = AssignmentsStore.getState();
  }

  componentDidMount() {
    AssignmentsActions.getAllAssignments();
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
    let allAssignments = this.state.allAssignments;
    console.log(allAssignments);
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
                        <div className="container">

                        <ul className="nav nav-tabs" role="tablist">
                          <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Assignments List</a></li>
                          <li role="presentation"><a href="#create" aria-controls="create" role="tab" data-toggle="tab">Create Assignments</a></li>
                          <li role="presentation"><a href="#edit" aria-controls="edit" role="tab" data-toggle="tab">Edit/Set Assignment</a></li>
                        </ul>

                        <div className="tab-content">
                        <div role="tabpanel" className="tab-pane active" id="home">
                          <h2>Current Assignments</h2>
                          <p>Below you will find a listing of your current assignments.</p>            
                          <table className="table table-hover">
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
                              )}
                            </tbody>
                          </table>
                        </div>

                         <div role="tabpanel" className="tab-pane" id="create">
                          <CreateAssignments />
                         </div>

                          <div role="tabpanel" className="tab-pane" id="edit">
                          <h2>Editing assignment here</h2>
                         </div>
                    </div>
                </div>
                </div>
                </div>
          </div>
            
        </div>
    );
  }
}
