import Immutable from 'immutable';
import AssignmentsActions from 'actions/AssignmentsActions';
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
class AssignmentsStore {

  /*
   * The constructor of your store definition receives the alt instance as its first and only argument. All instance variables,
   * values assigned to `this`, in any part of the StoreModel will become part of state.
   */
  constructor() {
    // Instance variables defined anywhere in the store will become the state. You can initialize these in the constructor and
    // then update them directly in the prototype methods
    this.assignments = []; //our currently created parsons problems
    this.allAssignments = [];
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
      handleCreateAssignment: AssignmentsActions.CREATE_ASSIGNMENT,
      handleCreateAssignmentSuccess: AssignmentsActions.CREATE_ASSIGNMENT_SUCCESS,
      handleGetAssignments: AssignmentsActions.GET_ALL_ASSIGNMENTS,
      handleGetAssignmentsSuccess: AssignmentsActions.GET_ALL_ASSIGNMENTS_SUCCESS,
      handleGetAssignmentsError: AssignmentsActions.GET_ALL_ASSIGNMENTS_ERROR
    });
  }

  bootstrap() {
      this.assignments = [];
      this.allAssignments = [{'_id' : '1234', 'title' : 'Poopymcboogerbutt', 'description' : 'Its a poopy assignment', 'assignment': []},
      {'_id' : '1235', 'title' : 'Poopymcboogerbutt', 'description' : 'Its a poopy assignment', 'assignment': []},
      {'_id' : '1236', 'title' : 'Poopymcboogerbutt', 'description' : 'Its a poopy assignment', 'assignment': []},
      {'_id' : '1237', 'title' : 'Poopymcboogerbutt', 'description' : 'Its a poopy assignment', 'assignment': []},
      {'_id' : '1238', 'title' : 'Poopymcboogerbutt', 'description' : 'Its a poopy assignment', 'assignment': []},
      {'_id' : '1239', 'title' : 'Poopymcboogerbutt', 'description' : 'Its a poopy assignment', 'assignment': []},
      {'_id' : '1240', 'title' : 'Poopymcboogerbutt', 'description' : 'Its a poopy assignment', 'assignment': []},
      {'_id' : '1241', 'title' : 'Poopymcboogerbutt', 'description' : 'Its a poopy assignment', 'assignment': []},
      {'_id' : '1242', 'title' : 'Poopymcboogerbutt', 'description' : 'Its a poopy assignment', 'assignment': []}, 
      {'_id' : '2343', 'title' : 'Poopymcboogerbutt2', 'description' : 'Its a poopy assignment', 'assignment': []}];

  
  }
  
  handleCreateAssignment(){
    
    this.emitChange();
  }

  handleCreateAssignmentSuccess(data){
    this.parsons = data;
    this.emitChange();
  }

  handleGetAssignments() {
    this.emitChange();
  }

  handleGetAssignmentsSuccess(data) {
    this.allAssignments = data;
    this.emitChange();
  }

  handleGetAssignmentsError(error) {
    this.emitChange(error);
  }

}

// Export our newly created Store
export default alt.createStore(AssignmentsStore, 'AssignmentsStore');
