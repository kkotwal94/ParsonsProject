import $ from 'jquery';

const utils = {

	createAssignment: (data) => {
    return $.ajax({
      url: '/createAssignment',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(data)
    });
  },

  	getAllAssignments: () => {
  		return $.ajax({
  			url: '/getAllAssignments',
  			type: 'GET',
  			crossDomain: true,
  			cache: false
  		});
  	},

    getAssignment: (id) => {
      return $.ajax({
        url: '/getAssignment/' + id,
        type: 'GET',
        crossDomain: true,
        cache: false
    });
  }


};

export default utils;