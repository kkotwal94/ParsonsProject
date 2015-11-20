var _ = require('lodash');
var User = require('../models/user');
var passport = require('passport');
var ParsonsProblem = require('../models/parsonsproblem');
var Feedback = require('../models/feedback');
var UserProblemPair = require('../models/userproblempair');

//POST GET API for feedback


//create feedback
exports.createFeedback = function(req, res, next) {
	console.log(req.body);
	var lineFeedback = req.body.lineFeedback;
	var ParsonsProblemReference = req.body.ParsonsProblemReference;
	for (var i = 0; i < lineFeedback.length; i++) {
		if (lineFeedback[i] != "") {
			newFeedback.feedback.push(lineFeedback[i]);
		}
	}
	newFeedback.save();
	console.log(newFeedback);
	res.json(req.body);
};

exports.getFeedback = function(req, res, next) {
	console.log(req.body);
	var id = req.body.id;
	feedback.findById(id, function(err, feedback) {
		if(!err) {
			res.json(feedback);
		}
		else {
			console.log("Couldn't find the feedback");
		}
	});
};

//update existing feedback
exports.updateFeedback = function(req, res) {
	var id = req.body.id;
	var lineFeedback = req.body.lineFeedback;
	var ParsonsProblemReference = req.body.ParsonsProblemReference;

	feedback.findById(id, function(err, feedback) {
		if(err) {
			res.redirect('/createProblem');
			console.log("Error on update");
		}
		else {
			if (feedback.lineFeedback != lineFeedback) {
				feedback.lineFeedback = lineFeedback;
			}
			if (feedback.ParsonsProblemReference != ParsonsProblemReference) {
				feedback.ParsonsProblemReference = ParsonsProblemReference;
			}
			feedback.save();
			res.end();
		}
	});
};

// delete existing feedback
exports.deleteFeedback = function(req, res) {
	var id = req.body.id;
	Feeback.findByIdAndRemove(id, function(err, feedback) {
		if(err) {
			console.log('Error on delete');
			res.redirect('/createProblem');
		}
		else {
			if (feedback != null) {
				res.status(200).send('Removed Successfully');
			}
		}
		res.end();
	});
};