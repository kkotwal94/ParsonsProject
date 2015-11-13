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
    }

    getAllProblemsSuccess() {
      this.dispatch();
    }

}

export default alt.createActions(ParsonsActions);