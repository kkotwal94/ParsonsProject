import React from 'react';
import {Link} from 'react-router';
import UserActions from 'actions/UserActions';
import UserStore from 'stores/UserStore';
import Immutable from 'immutable';

export default class CreateProblem extends React.Component {
    constructor(props) {
    super(props);
    this.state = UserStore.getState();
    this.state.count = 0;
  }

  componentDidMount() {
    UserStore.listen(this._onChange);
  }

  componentWillUnmount() {
    UserStore.unlisten(this._onChange);
  }

  _onChange = () => {
    this.setState({
      user: UserStore.getState().user,
      count: 0
    });
  }

  _onSubmit = () => {
    console.log(this.state.count);
    console.log('reached OnSubmit');
  }

  _onPlus = () => {
      let number = document.getElementById("memberadd").value;
            // Container <div> where dynamic content will be placed
            let i = 0;
            this.setState({
              count: 0
            });
            let container = document.getElementById("containeradd");
            // Clear previous contents of the container
            while (container.hasChildNodes()) {
                container.removeChild(container.lastChild);
            }
            for (i;i<number;i++){
                // Append a node with a random text
                let label = document.createElement('label');
                label.innerHTML = "Insert Line of code";
                container.appendChild(label);
                // Create an <input> element, set its type and name attributes
                let input = document.createElement("input");
                input.type = "text";
                input.name = "member" + i;
                input.className = "form-control";
                input.ref = "code" + i;
                container.appendChild(input);
                // Append a line break 
                container.appendChild(document.createElement("br"));
              
            }
          let button = document.createElement('button');
          button.className = "btn btn-danger";
          button.innerHTML = "Submit Code!";
          this.setState({
                  count : i
                });
          button.onclick = this._onSubmit;
          container.appendChild(button);
        }

  render() {
    console.log(this.state.count);
    return (
<div>
      <div className ="container-fluid">
          
            <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">
                            Problem Generation
                        </h1>
                        <ol className="breadcrumb">
                            <li className="active">
                                <i className="fa fa-dashboard"></i> <Link to ="/dashboard/main">Dashboard</Link>
                            </li>
                            <li>
                           Create Problem
                            </li>
                        </ol>
                        
                        <div>
                        <h3>Insert lines of code for each input</h3>
                        </div>
                      </div>
                </div>

                <div className="row">
                    <div className="col-lg-7">
                      <div className="panel panel-primary">
                        <div className="panel-heading">Creating a problem</div>
                            <div className="panel-body">
                                <div className="form-group">
                                  <label>Insert the number of lines in the solution</label>
                                  <input type="code" id = "memberadd" className="form-control" placeholder="Insert How many lines of code the solution has" ref="code" />
                                </div>
                                <button className="btn btn-primary" onClick={this._onPlus}>Submit</button>
                                <div id = "containeradd"/>
                                
                            </div>
                            <div className="panel-footer">Creating Problem</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
