var _ = require('lodash');
var User = require('../models/user');
var passport = require('passport');
var ParsonsProblem = require('../models/parsonsproblem');
var Feedback = require('../models/feedback');
var UserProblemPair = require('../models/userproblempair');

/**
 * POST /login
 */
exports.postLogin = function(req, res, next) {

  // Do email and password validation for the server
  /*var Feed = new Feedback({
    description: 'Supsuop'
  });
  var Problem = new ParsonsProblem({
    description: 'Test',
    feedback: Feed
  });
  var Pair = new UserProblemPair({
    problem_id: Problem,
    attempt_quantity: 0,
    completed: true
  });
  */
  console.log(req.body);
  passport.authenticate('local', function(err, user, info) {
    if(err) return next(err);
    if(!user) {
      req.flash('errors', {msg: info.message});
    }
    // Passport exposes a login() function on req (also aliased as logIn()) that can be used to establish a login session
    req.logIn(user, function(err) {
      if(err) return next(err);
      req.flash('success', { msg: 'Success! You are logged in'});
      res.redirect('/dashboard');
      res.end('Success');
      console.log("Request User: " + req.user);
    });

  })(req, res, next);
  /*
  Feed.save(function(err) {console.log('Feedback saved');});
  Problem.save(function(err) {console.log('Problem saved');});
  Pair.save(function(err) {console.log('ProblemPair saved');});
  console.log(Feed);
  */
};

/**
 * POST UpdateUser Profile
 */
exports.updateUserProfile = function(req, res) {
      console.log("Request User: " + require);
      var id = req.user._id;
      if (req.body.firstName == "") {
        req.body.firstName = req.user.profile.firstName;
      }
      if (req.body.lastName == "") {
        req.body.lastName = req.user.profile.lastName;
      }
      if (req.body.gender == "") {
        req.body.gender = req.user.profile.gender;
      }
      if (req.body.section == "") {
        req.body.section = req.user.profile.section;
      }

      User.findById(id, function(err, user) {
        console.log("ID: " + id);
        user.profile.firstName = req.body.firstName;
        user.profile.lastName = req.body.lastName;
        user.profile.gender = req.body.gender;
        user.profile.section = req.body.section;
        user.save();
        res.end();
      });
};

/**
 * GET /logout
 */
exports.getAllUsers = function(req, res) {
  User.find({}, function (err, users) {
            //console.log(users);
            res.json(users);
        });
}

/**
 * GET /logout
 */
exports.getLogout = function(req, res, next) {
  // Do email and password validation for the server
  console.log("User has been logged out");
  req.logout();
  res.redirect('/');
  //res.end():
};

/**
 * POST /signup
 * Create a new local account
 */
exports.postSignUp = function(req, res, next) {
  var user =  new User({
    email: req.body.email,
    password: req.body.password,
    profile: {
      firstName : req.body.firstName,
      lastName : req.body.lastName,
      section : req.body.section
    }
  });
  //user.profile.firstName = req.body.firstName;
  //user.profile.lastName = req.body.lastName;
  //user.profile.section = req.body.section;
  User.findOne({email: req.body.email}, function(err, existingUser) {
    if(existingUser) {
      req.flash('errors', { msg: 'Account with that email address already exists' });
      res.redirect('/sign');
    }
    user.save(function(err) {
      if(err) return next(err);
      req.logIn(user, function(err) {
        if(err) return next(err);
        console.log('Successfully created');
        console.log('Printing user');
        console.log(user);
        console.log('Print our body from our request');
        console.log(req.body);
        res.redirect('/');
      });
    });
  });
};

