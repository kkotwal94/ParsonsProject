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
    this.state.correct = undefined;
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
      correct: ParsonsStore.getState().correct
    });
  }

  _onCheckSolution = () => {
    ParsonsActions.checkSolution();
  }


  render() {
    if(!this.state.randomProblem) {
      return null;
    }

    let singleProblem = [{title: 'Title', description: 'Test'}];
    let correctArray = [];
    let randomArray = [];
    
   // console.log(source);
    if(this.state.randomProblem.length !== 0) {
      singleProblem = this.state.singleProblem;
      correctArray = singleProblem;//correctArray = this.state.correctProblem.problem;
      randomArray = this.state.randomProblem;
      //gridSize = singleProblem.length;
     }
    console.log("randomArray: " + randomArray);
    if(this.state.correct == undefined) {
      console.log("Not loaded yet");
    } else {
    console.log(this.state.correct);
    }

    let styles = {
      alert1: {
        display: 'none'
      },

      alert2: {
        display: 'none'
      }
    }

    if(this.state.correct == true) {
      styles.alert1.display = 'inherit';
      styles.alert2.display = 'none';
    }

    if(this.state.correct == false) {
      styles.alert1.display= 'none';
      styles.alert2.display= 'inherit';
    }
    
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
                            
                            Problem: {singleProblem.title}
                            </li>
                        </ol>
                        <div>
                        <div className="alert alert-success" role="alert" style={styles.alert1}>Great! You got the problem corect!</div>
                        <div className="alert alert-danger" role="alert" style={styles.alert2}>The solution submitted was incorrected! Try again!</div>
                        </div>
                        <div>
                        <h1>{singleProblem.title}</h1>
                        <h3>{singleProblem.description}</h3>
                        <Container array = {randomArray}/>
                        
                        </div>
                    </div>
                </div>
                <button className = "btn btn-primary" onClick={this._onCheckSolution}>Submit</button>
          </div>
          
        </div>

    );
  }
}
