import React from 'react';
import {Link} from 'react-router';
import ParsonsStore from 'stores/ParsonsStore';
import ParsonsActions from 'actions/ParsonsActions';
import UserActions from 'actions/UserActions';
import UserStore from 'stores/UserStore';
import Immutable from 'immutable';
import Container from './Container.jsx';

export default class RProblem extends React.Component {

 constructor(props) {
    super(props);
    this.state = ParsonsStore.getState();
  }

  componentDidMount() {
    ParsonsActions.getParsonsProblem(this.props.params.id);
    UserStore.listen(this._onChange);
    ParsonsStore.listen(this._onChange);
    }
  

  componentWillUnmount() {
    UserStore.unlisten(this._onChange);
    ParsonsStore.unlisten(this._onChange);
  }

  _onChange = () => {
    this.setState({
      //user: UserStore.getState().user,
      //allProblems: ParsonsStore.getState().allProblems
      singleProblem: ParsonsStore.getState().singleProblem,
      randomProblem: ParsonsStore.getState().randomProblem,
      source : ParsonsStore.getState().source
    });
  }

  render() {

    if(!this.state.randomProblem) {
      return null;
    }

    let singleProblem = [];
    let correctArray = [];
    let randomArray = [];
    let poopoo = [1, 2, 3, 4];
    let gridSize = 0;
    let source = this.state.source;
   // console.log(source);
    if(this.state.randomProblem.length !== 0) {
      singleProblem = this.state.singleProblem.problem;
      correctArray = singleProblem;//correctArray = this.state.correctProblem.problem;
      randomArray = this.state.randomProblem;
      gridSize = singleProblem.length;
     
    }
    //console.log("Original Problem " + singleProblem);
    //console.log("Correct problem array " + correctArray);
    //console.log("Random Problem array " + randomArray);
    console.log("randomArray: " + randomArray);
    console.log(poopoo);
    return (
      <div>
      <div className ="container-fluid">
          
            <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">
                            Random Problem Selected <small>Complete this problem!</small>
                        </h1>
                        <ol className="breadcrumb">
                            <li className="active">
                                <i className="fa fa-dashboard"></i> <Link to ="/dashboard/main">Dashboard</Link>
                            </li>
                            <li>
                            
                            Problem: {this.props.params.id}
                            </li>
                        </ol>
                        <div>
                        Where random problem should be should be : {this.props.params.id}
                        <Container array = {randomArray}/>
                        
                        </div>
                    </div>
                </div>
          </div>
            
        </div>

    );
  }
}
