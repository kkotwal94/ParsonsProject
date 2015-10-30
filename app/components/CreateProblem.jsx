import React from 'react';
import {Link} from 'react-router';
import UserActions from 'actions/UserActions';
import UserStore from 'stores/UserStore';
import Immutable from 'immutable';

export default class CreateProblem extends React.Component {
    constructor(props) {
    super(props);
    this.state = UserStore.getState();
    this.state.count = 2;
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
    let count = this.state.count;
    let codeArray = [];
    for(let i = 1; i < count; i++) {
      console.log(i);
      let refName = "code-" + i;
      console.log(this.refs[refName]);
      codeArray[i] = React.findDOMNode(this.refs[refName]).value;
    }
    console.log(codeArray);
    console.log(this.state.count);
    console.log('reached OnSubmit');

  }

  _onPlus = () => {
            let container = document.getElementById("containeradd");
            let inputLine = document.getElementById("inputline");
            // Clear previous contents of the container
            // Create an <input> element, set its type and name attributes
            let input = document.createElement("input");
            let count = this.state.count;
            input.placeholder = "Code Line #" + count;
            input.type = "text";
            input.className = "form-control";
            input.ref = "code-" + count;
            inputline.appendChild(document.createElement("br"));
            inputline.appendChild(input);
            // Append a line break
            count = count + 1; 
            this.setState({
              count: count
            })

            /*let button = document.createElement("button");
            button.className = "btn btn-danger";
            button.innerHTML = "Submit Code!";
            */
           
              
            
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
                        <h3>"Use this page in order to create a new Parson's problem"</h3>
                        </div>
                      </div>
                </div>

                <div className="row">
                    <div className="col-lg-7">
                      <div className="panel panel-primary">
                        <div className="panel-heading">New Problem</div>
                            <div className="panel-body">
                                <div className="form-group" id="inputline">
                                  <label>Use this space to generate a new Parson problem</label>
                                  <input type="code" id = "memberadd" className="form-control" placeholder="Code Line #1" ref="code-1" />
                                </div>
                                <button className="btn btn-danger"  onClick={this._onSubmit}>Submit Code!</button>
                                <button className="btn btn-primary" onClick={this._onPlus}>Add Line</button>
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
