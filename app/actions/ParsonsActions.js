import alt from 'altInstance';
import ParsonsWebAPIUtils from 'utils/ParsonsWebAPIUtils';



class ParsonsActions {

	createProblem(data) {
		this.dispatch();
		ParsonsWebAPIUtils.createProblem(data)
		.then((response, textStatus) => {
        	if(textStatus === 'success'){
        	this.actions.createProblemSuccess(data)
      	}
    }, () => {

    });
  }

  	createProblemSuccess(data) {
  		this.dispatch(data);
  	}

    getAllProblems() {
      this.dispatch();
      ParsonsWebAPIUtils.getAllProblems().done((data) => {
        this.actions.getAllProblemsSuccess(data);
      })
      .fail((errorMessage) => {
        this.actions.getAllProblemsError(errorMessage);
      });
    }

    getAllProblemsSuccess(data) {
      this.dispatch(data);
    }

    getAllProblemsError(error) {
      this.dispatch(error);
    }

}

export default alt.createActions(ParsonsActions);