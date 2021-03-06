import Immutable from 'immutable';
import ParsonsActions from 'actions/ParsonsActions';
import { fromJSOrdered } from 'utils/immutableHelpers';
import alt from 'altInstance';

/**
 * Flux Explanation of Store:
 * Stores contain the application state and logic. Their role is somewhat similar to a model in a traditional MVC, but
 * they manage the state of many objects. Nor are they the same as Backbone's collections. More than simply managing a
 * collection of ORM-style objects, stores manage the application state for a particular domain within the application.
 *
 * A store registers itself with the dispatcher and provides it with a callback. This callback receives a data payload
 * as a parameter. The payload contains an action with an attribute identifying the action's type. Within the store's
 * registered callback, a switch statement based on the action's type is used to interpret the payload and to provide the
 * proper hooks into the store's internal methods. This allows an action to result in an update to the state of the store,
 * via the dispatcher. After all the stores are updated, they broadcast an event declaring that their state has changed,
 * so the views may query the new state and update themselves.
 *
 * Alt Implementation of Stores:
 * These are the stores returned by alt.createStore, they will not have the methods defined in your StoreModel because flux
 * stores do not have direct setters. However, any static methods defined in your StoreModel will be transferred to this object.
 *
 * Please note: Static methods defined on a store model are nothing more than synthetic sugar for exporting the method as a public
 * method of your alt instance. This means that `this` will be bound to the store instance. It is recommended to explicitly export
 * the methods in the constructor using StoreModel#exportPublicMethods.
 *
 */

 let _shuffle = (array) => {
  let arr2 = [];
  for(let i = 0; i < array.length; i++) {
    arr2[i] = array[i];
  }
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = arr2[i];
        arr2[i] = arr2[j];
        arr2[j] = temp;
    }
    return arr2;
 }

 let _checkCorrect = (singleProblem, randomProblem) => {

    for(let i = 0; i < singleProblem.problem.length; i++) {
      if(singleProblem.problem[i] != randomProblem[i].text) {
        return false;
      }
    }
    return true;
 }



class ParsonsStore {

  /*
   * The constructor of your store definition receives the alt instance as its first and only argument. All instance variables,
   * values assigned to `this`, in any part of the StoreModel will become part of state.
   */
  constructor() {
    // Instance variables defined anywhere in the store will become the state. You can initialize these in the constructor and
    // then update them directly in the prototype methods
    this.parsons = []; //our currently created parsons problems
    this.allParsons = Immutable.Map({}); //should be all the parsons problems that exist
    this.allProblems = [];
    this.singleProblem = [];
    this.randomProblem = [];
    this.randomProblem2 = [];
    this.source = 7;
    this.correct;
    // Do not think we need an Immutable object here

    // (lifecycleMethod: string, handler: function): undefined
    // on: This method can be used to listen to Lifecycle events. Normally they would set up in the constructor
    this.on('init', this.bootstrap);
    this.on('bootstrap', this.bootstrap);
    // (listenersMap: object): undefined
    // bindListeners accepts an object where the keys correspond to the method in your
    // StoreModel and the values can either be an array of action symbols or a single action symbol.
    // Remember: alt generates uppercase constants for us to reference
    this.bindListeners({
      handleCreateProblem: ParsonsActions.CREATE_PROBLEM,
      handleCreateProblemSuccess: ParsonsActions.CREATE_PROBLEM_SUCCESS,
      handleGetProblems: ParsonsActions.GET_ALL_PROBLEMS,
      handleGetProblemsSuccess: ParsonsActions.GET_ALL_PROBLEMS_SUCCESS,
      handleGetProblemsError: ParsonsActions.GET_ALL_PROBLEMS_ERROR,
      handleGetParsonsProblem: ParsonsActions.GET_PARSONS_PROBLEM,
      handleGetParsonsProblemSuccess: ParsonsActions.GET_PARSONS_PROBLEM_SUCCESS,
      handleGetParsonsProblemError: ParsonsActions.GET_PARSONS_PROBLEM_ERROR,
      sendSourceData: ParsonsActions.SEND_SOURCE_DATA,
      updateRandomArray: ParsonsActions.UPDATE_RANDOM_ARRAY,
      checkSolution: ParsonsActions.CHECK_SOLUTION
    });
  }

  bootstrap() {
    if (!Immutable.Map.isMap(this.allParsons)) {
      this.allParsons = Immutable.fromJS(this.allParsons);
    }
      this.parsons = this.ParsonsActions;
      this.allProblems = this.allProblems;
      this.correct;
      //this.randomProblem = this.randomProblem;

  
  }
  
  handleCreateProblem(){
    
    this.emitChange();
  }

  handleCreateProblemSuccess(data){
    this.parsons = data;
    this.emitChange();
  }

  handleGetProblems() {
  this.emitChange();
  }

  handleGetProblemsSuccess(data) {
    console.log(data);
    this.allProblems = data;
    this.emitChange();
  }

  handleGetProblemsError(error) {
    this.emitChange(error);
  }

  handleGetParsonsProblem() {
    this.emitChange();
  }

  handleGetParsonsProblemSuccess(data) {
    this.singleProblem = data;
    //console.log(this.singleProblem);
    this.randomProblem = [];
    for(let i = 0; i < this.singleProblem.problem.length; i++) {
      this.randomProblem.push({id: i, text: this.singleProblem.problem[i]});
    }
    this.randomProblem = _shuffle(this.randomProblem);
    //console.log(this.randomProblem);
    this.emitChange();
  }

  handleGetParsonsProblemError(error) {
    this.emitChange(error);
  }

  sendSourceData(data) {
    this.source = data;
    console.log("Source Location: " + this.source);
    this.emitChange();
  }

  updateRandomArray(data) {
    this.randomArray = data;
    this.emitChange();
  }

  checkSolution() {
  this.correct = '';
  this.correct = _checkCorrect(this.singleProblem, this.randomProblem);
  this.emitChange();
  }

}

// Export our newly created Store
export default alt.createStore(ParsonsStore, 'ParsonsStore');
