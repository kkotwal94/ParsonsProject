import alt from 'altInstance';
import AssignmentsWebAPIUtils from 'utils/AssignmentsWebAPIUtils';



class AssignmentsActions {

	createAssignment(data) {
		this.dispatch();
    console.log(data);
		AssignmentsWebAPIUtils.createAssignment(data)
		.then((response, textStatus) => {
         	if(textStatus === 'success'){
         	this.actions.createAssignmentSuccess(data)
       	}
     }, () => {

     });
  }

  	createAssignmentSuccess(data) {
  		this.dispatch(data);
  	}

    getAllAssignments() {
       this.dispatch();
       AssignmentsWebAPIUtils.getAllAssignments().done((data) => {
         this.actions.getAllAssignmentsSuccess(data);
       })
       .fail((errorMessage) => {
         this.actions.getAllAssignmentsError(errorMessage);
       });
    }

    getAllAssignmentsSuccess(data) {
      this.dispatch(data);
    }

    getAllAssignmentsError(error) {
      this.dispatch(error);
    }

    getAssignment(id) {
      this.dispatch();
      AssignmentsWebAPIUtils.getAssignment(id).done((data) => {
        this.actions.getAssignmentSuccess(data);
      })
      .fail((errorMessage) => {
        this.actions.getAssignmentError(errorMessage);
      });
    }

    getAssignmentSuccess(data) {
      this.dispatch(data);
    }

    getAssignmentError(error) {
      this.dispatch(error);
    }
}

export default alt.createActions(AssignmentsActions);