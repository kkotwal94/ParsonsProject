import alt from 'altInstance';
//import ParsonsWebAPIUtils from 'utils/ParsonsWebAPIUtils';



class AssignmentsActions {

	createAssignment(data) {
		// this.dispatch();
		// ParsonsWebAPIUtils.createAssignment(data)
		// .then((response, textStatus) => {
  //       	if(textStatus === 'success'){
  //       	this.actions.createAssignmentSuccess(data)
  //     	}
  //   }, () => {

  //   });
  }

  	createAssignmentSuccess(data) {
  		//this.dispatch(data);
  	}

    getAllAssignments() {
      // this.dispatch();
      // ParsonsWebAPIUtils.getAllAssignments().done((data) => {
      //   this.actions.getAllAssignmentsSuccess(data);
      // })
      // .fail((errorMessage) => {
      //   this.actions.getAllAssignmentsError(errorMessage);
      // });
    }

    getAllAssignmentsSuccess(data) {
      //this.dispatch(data);
    }

    getAllAssignmentsError(error) {
      //this.dispatch(error);
    }

}

export default alt.createActions(AssignmentsActions);