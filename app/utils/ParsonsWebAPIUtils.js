import $ from 'jquery';

const utils = {

	createProblem: (data) => {
    return $.ajax({
      url: '/createProblem',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(data)
    });
  },

  	getAllProblems: () => {
  		return $.ajax({
  			url: '/getAllProblems',
  			type: 'GET',
  			crossDomain: true,
  			cache: false
  		});
  	},

    getParsonsProblem: (id) => {
      return $.ajax({
        url: '/getParsonsProblem/' + id,
        type: 'GET',
        crossDomain: true,
        cache: false
    });
  }


};

export default utils;
