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