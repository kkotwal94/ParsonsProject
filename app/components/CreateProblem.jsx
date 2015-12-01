import React from 'react';
import {Link} from 'react-router';
import UserActions from 'actions/UserActions';
import UserStore from 'stores/UserStore';
import ParsonsStore from 'stores/ParsonsStore';
import ParsonsActions from 'actions/ParsonsActions';
import Immutable from 'immutable';

export default class CreateProblem extends React.Component {
    constructor(props) {
    super(props);
    this.state = UserStore.getState();
    this.states = ParsonsStore.getState();
    this.state.count = 2;
  }

  componentDidMount() {
    //ParsonsActions.getAllProblems();
    ParsonsStore.listen(this._onChange);
    UserStore.listen(this._onChange);
  }

  componentWillUnmount() {
    ParsonsStore.unlisten(this._onChange);
    UserStore.unlisten(this._onChange);
  }

  _onChange = () => {
    this.setState({
      user: UserStore.getState().user,
      parsons: ParsonsStore.getState().parsons,
      allProblems: ParsonsStore.getState().allProblems,
      count: 0
    });
  }

  _onSubmit = () => {
    let count = this.state.count;
    let codeArray = [];
    for(let i = 1; i < count; i++) {
      //console.log(i);
      let refName = "code-" + i;
      //console.log(document.getElementById(refName).value);
      codeArray[i-1] = document.getElementById(refName).value;
    }
    const id = this.state.user.get('id');
    const title = React.findDOMNode(this.refs.title).value;
    const description = React.findDOMNode(this.refs.description).value;
    const codelines = codeArray;

    ParsonsActions.createProblem({
      id: id,
      title: title,
      description: description,
      codelines: codelines
    });

    //console.log(codeArray);
    //console.log(this.state.count);
    //console.log('reached OnSubmit');


  }

  _onPlus = () => {
            //let container = document.getElementById("containeradd");
            let inputLine = document.getElementById("inputline");
            // Clear previous contents of the container
            // Create an <input> element, set its type and name attributes
            let input = document.createElement("input");
            let count = this.state.count;
            input.placeholder = "Code Line #" + count;
            input.type = "text";
            input.className = "form-control";
            input.ref = "code-" + count;
            input.id = "code-" + count;
            inputLine.appendChild(document.createElement("br"));
            inputLine.appendChild(input);
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
    //console.log(this.state.count);
    //console.log(this.state.parsons);
    console.log(this.states.allProblems);
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
                      </div>
                </div>

                <div className="row">
                    <div className="col-lg-7">
                      <div className="panel panel-primary">
                        <div className="panel-heading">New Problem</div>
                            <div className="panel-body">
                                <div className="form-group" id="inputline">
                                  <label>Enter the Problem Title here</label>
                                  <input type="code" id = "code-title" className = "form-control" placeholder="Problem Title" ref="title"/>
                                  
                                  <label>Enter the Problem Description here</label>
                                  <input type="code" id = "code-description" className = "form-control" placeholder="Problem Description" ref="description"/>

                                  <label>Use this space to generate a new Parson problem</label>
                                  <input type="code" id = "code-1" className="form-control" placeholder="Code Line #1" ref="code-1" />
                                
                                </div>
                                <button className="btn btn-danger"  onClick={this._onSubmit}>Submit Code!</button>
                                <br/>
                                <br/>
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
