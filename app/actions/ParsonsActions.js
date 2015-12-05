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

    getParsonsProblem(id) {
      this.dispatch();
      ParsonsWebAPIUtils.getParsonsProblem(id).done((data) => {
        this.actions.getParsonsProblemSuccess(data);
      })
      .fail((errorMessage) => {
        this.actions.getParsonsProblemError(errorMessage);
      });
    }

    getParsonsProblemSuccess(data) {
      this.dispatch(data);
    }

    getParsonsProblemError(error) {
      this.dispatch(error);
    }

    sendSourceData(data) {
      this.dispatch(data);
    }

    updateRandomArray(data) {
      this.dispatch(data);
      console.log(data);
    }
}

export default alt.createActions(ParsonsActions);