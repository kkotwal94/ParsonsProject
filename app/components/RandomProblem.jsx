import React from 'react';
import {Link} from 'react-router';
import UserActions from 'actions/UserActions';
import UserStore from 'stores/UserStore';
import ParsonsStore from 'stores/ParsonsStore';
import Immutable from 'immutable';

export default class RandomProblem extends React.Component {
    constructor(props) {
    super(props);
    this.state = UserStore.getState();
    this.states = ParsonsStore.getState();
  }

  componentDidMount() {
    UserStore.listen(this._onChange);
    ParsonsStore.listen(this._onChange);
    }
  

  componentWillUnmount() {
    UserStore.unlisten(this._onChange);
    ParsonsStore.unlisten(this._onChange);
  }

  _onChange = () => {
    this.setState({
      user: UserStore.getState().user,
      allProblems: ReportStore.getState().allProblems
    });
  }

  _onGoToProblem = () => {
   console.log("Should be heading to the problem page. Update this logic.");
  }


  render() {
    console.log(this.states.allProblems);
    let allProblems = this.states.allProblems;
    return (
      <div>
      <div className ="container-fluid">
          
            <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">
                            Random Problem <small>Parsons Problem</small>
                        </h1>
                        <ol className="breadcrumb">
                            <li className="active">
                                <i className="fa fa-dashboard"></i> <Link to ="/dashboard/main">Dashboard</Link>
                            </li>
                            <li>
                            Random Problem
                            </li>
                        </ol>
                        <div className="col-lg-4">
                        {allProblems.map((prob) =>
                          <div className="panel panel-primary" id="problem" key={'problem' + prob._id}>
                            <div className="panel-heading">{prob.title}</div>
                              <div className="panel-body">
                              <p>{prob.description}</p>
                              <button className="btn btn-primary" onClick={this._onGoToProblem}>Try it!</button>
                              </div>
                          </div>
                        )}
                    </div>
                </div>
          </div>
            
        </div>
        </div>
    );
  }
}
