var _ = require('lodash');
var User = require('../models/user');
var passport = require('passport');
var ParsonsProblem = require('../models/parsonsproblem');
var Feedback = require('../models/feedback');
var UserProblemPair = require('../models/userproblempair');
var assignments = require('../models/assignments');

//POST GET API for assigments

//get single assignment
exports.getAssignment = function(req, res, next) {
	var id = req.params.id;
	assignments.findById(id, function(err, assignment) {
		if(!err) {
			res.json(assignment);
		}
		else {
			Console.log("Couldn't find the requested assignment");
		}
	});
};

//get all assignments
exports.getAllAssignments = function(req, res, next) {
	assignments.find({}).exec(function(err, assignmentsList) {
		if(!err) {
			res.json(assignmentsList);
		}
		else {
			console.log("Couldn't find all assignments");
		}
	});
};

//create assignment
exports.createAssignment = function(req, res, next) {
	console.log(req.body);
	var title = req.body.title;
	var description = req.body.description;
	//var assignment = req.body.assignment;
	//var createdByAdmin = req.body.createdByAdmin;
	var newAssignment = new assignments(req.body);
	
	User.findById(req.body.id, function(err, user) {
		newAssignment.ownedBy = user;
		user.assignmentsCreated.push(newAssignment);
		user.save();
		newAssignment.save();
	});
	console.log(newAssignment);
	res.json(req.body);
}

//delete
exports.deleteAssignment = function(res, req) {
	var id = req.body.id;
	assignment.findByIdAndRemove(id, function(err, assignment) {
		if(err) {
			console.log('Error on assignment delete.');
			res.redirect('/createAssignment');
		}
		else {
			if (assignment != null) {
				res.status(200).send('Removed Successfully');
			}
		}
		res.end();
	});
};


//update
exports.updateAssignment = function(req, res) {
	var id = req.body.id;
	var title = req.body.title;
	var description = req.body.description;
	var assignmentObject = req.body.assignment;
	var createdByAdmin = req.body.createdByAdmin;
	var score = req.body.score;

	assigment.findById(id, function(err, problem) {
		if(err) {
			res.redirect('/createAssignment');
			console.log('Error on assignment update');
		}
		else {
			if (assignment.title != title) {
				assignment.title = title;
			}
			if (assignment.description != description) {
				assignment.description = description;
			}
			if (assignment.assignment != assignmentObject) {
				assignment.assignment = assignmentObject;
			}
			if (assignment.score != score) {
				assignment.score = score;
			}
			assignment.save();
			res.end();
		}
	});

};
