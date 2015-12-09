import React from 'react';
import {Link} from 'react-router';
import Immutable from 'immutable';
import AssignmentsActions from 'actions/AssignmentsActions';
import AssignmentsStore from 'stores/AssignmentsStore';
import UserActions from 'actions/UserActions';
import UserStore from 'stores/UserStore';

export default class CreateAssignments extends React.Component {
    constructor(props) {
    super(props);
    this.state = UserStore.getState();
    this.states = AssignmentsStore.getState();
  }

  componentDidMount() {
    AssignmentsStore.listen(this._onChange);
    UserStore.listen(this._onChange);
  }

  componentWillUnmount() {
    AssignmentsStore.unlisten(this._onChange);
    UserStore.unlisten(this._onChange);
  }

  _onChange = () => {
    this.setState({
      user: UserStore.getState().user,
      allAssignments: AssignmentsStore.getState().allAssignments
    });
  }


  _onCreateAssignment = () => {
    const id = this.state.user.get('id');
    const title = React.findDOMNode(this.refs.title).value;
    const description = React.findDOMNode(this.refs.description).value;
    //const codelines = codeArray;

    AssignmentsActions.createAssignment({
      id: id,
      title: title,
      description: description
    });
    console.log("creating..");
  }


  render() {
    let allAssignments = this.state.allAssignments;
    console.log(allAssignments);
    return (
      <div>
         <h3>Create Assignments here! </h3>
         <br/>
         <div className="row">
                    <div className="col-lg-7">
                      <div className="panel panel-primary">
                        <div className="panel-heading">New Assignment</div>
                            <div className="panel-body">
                                <div className="form-group" id="inputline">
                                  <label>Enter the Assignment Title here</label>
                                  <input type="code" id = "code-title" className = "form-control" placeholder="Assignment Title" ref="title"/>
                                  
                                  <label>Enter the Assignment Description here</label>
                                  <input type="code" id = "code-description" className = "form-control" placeholder="Assignment Description" ref="description"/>

                                  <h3> Add Problems by clicking the plus symbol on the problems page or selecting below </h3>
                                  
                                
                                </div>
                                <button className="btn btn-danger" onClick ={this._onCreateAssignment}>Create Assignment!</button>
                                <br/>
                                <br/>
                                
                            </div>
                            <div className="panel-footer">Creating Assignment</div>
                        </div>
                    </div>
                </div>
            
        </div>
    );
  }
}
