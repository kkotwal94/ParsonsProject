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
                        <div className ="row">
                        {allProblems.map((prob) =>
                          <div className="col-md-4">
                          <div className={(() => {
                                switch (prob._id % 4) {
                                  default:      return "panel panel-primary";
                                }
                              })()} id="problem" key={'problem' + prob._id}>
                            <div className="panel-heading" style={(() => {
                                switch (prob._id % 4) {
                                  case 0:   return { backgroundColor: "#2d2d2d!important", borderColor: "#2d2d2d!important"};
                                  case 1: return { backgroundColor: "#cc7a6f!important", borderColor: "#cc7a6f!important"};
                                  case 2:  return { backgroundColor: "#f8f5ec!important", borderColor: "#f8f5ec!important"};
                                  default:      return { backgroundColor: "#61dafb!important", borderColor: "#61dafb!important"};
                                }
                              })()}>{prob.title}</div>
                              <div className="panel-body">
                              <p>{prob.description}</p>
                              <p>{prob._id}</p>
                              <button className="btn btn-primary" onClick={this._onGoToProblem}>Try it!</button>
                              </div>
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
