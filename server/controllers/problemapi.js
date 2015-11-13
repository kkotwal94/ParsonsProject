var _ = require('lodash');
var User = require('../models/user');
var passport = require('passport');
var ParsonsProblem = require('../models/parsonsproblem');
var Feedback = require('../models/feedback');
var UserProblemPair = require('../models/userproblempair');

//POST GET API METHODS for ParsonsProblems

exports.createProblem = function(req, res, next) {
	console.log(req.body);
	var title = req.body.title;
	var description = req.body.description;
	var problem = req.body.codelines;
	var newProblem = new ParsonsProblem(req.body);
	for (var i = 0; i < problem.length; i++) {
		if (problem[i] != "") {
			newProblem.problem.push(problem[i]);
		}

	}
	newProblem.save();
	console.log(newProblem);
	res.json(req.body);
};


//obtaining all problems from db
exports.getAllProblems = function(req, res, next) {
	ParsonsProblem.find({}).exec(function(err, problems) { //{} indicates that we're searching for all problems, exec is syntax for starting a async callback
		if(!err) {
			res.json(problems); //return our json if there is no error
		}

		else {
			console.log("Couldn't find all problems"); //if there is a error, tell us
		}
	});
};