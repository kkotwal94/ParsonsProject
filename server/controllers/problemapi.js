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
	var problem = req.body.codelines; //problem.codelines, will hold our codelines; {codeLines: [shit, shit, shit]}
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

  //get single problem by problem ID
exports.getParsonsProblem = function(req, res, next) {
	var id = req.params.id;
	ParsonsProblem.findById(id, function(err, problem) {
		if(!err) {
			res.json(problem);
		}
		else {
			Console.log("Couldn't find the problem");
		}
	});
};

//delete an existing problem
exports.deleteParsonsProblem = function(req, res) {
	var id = req.body.id;
	ParsonsProblem.findByIdAndRemove(id, function(err, problem) {
		if(err) {
			console.log('Error on delete');
			res.redirect('/createProblem');
		}
		else {
			if (problem != null) {
				res.status(200).send('Removed Successfully');
			}
		}
		res.end();
	});
};

//update an existing problem
exports.updateParsonsProblem = function(req, res) {
	var id = req.body.id;
	var title = req.body.title;
	var description = req.body.description;
	var codelines = req.body.codelines;

	problem.findById(id, function(err, problem) {
		if(err) {
			res.redirect('/createProblem');
			console.log('Error on update')
		}
		else {
			if (problem.title != title) {
				problem.title = title;
			}
			if (problem.description != description) {
				problem.description = description;
			}
			if (problem.codelines != codelines) {
				problem.codelines = codelines;
			}
			problem.save();
			res.end();
		}
	});

};