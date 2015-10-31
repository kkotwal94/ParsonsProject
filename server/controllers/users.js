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
*/
  /*
  var Problem = new ParsonsProblem({
    description: 'Test',
    feedback: Feed
  });
*/
  /*var Pair = new UserProblemPair({
    problem_id: Problem,
    attempt_quantity: 0,
    completed: true
  });
<<<<<<< HEAD
*/

  //console.log(req.body);

  passport.authenticate('local', function(err, user, info) {
    if(err) return next(err);
    if(!user) {
      req.flash('errors', {msg: info.message});
      console.log("ERROR BOYS");
    }
    // Passport exposes a login() function on req (also aliased as logIn()) that can be used to establish a login session
    req.logIn(user, function(err) {
      //console.log("User: " +user + " has been logged in");  
      if(err) return next(err);
      req.session.user = req.user;
      var user = req.user ? {authenticated: true, isWaiting: false, email: req.user.email, id: req.user._id} : { authenticated: false, isWaiting: false };

      //console.log("Request session user:" + req.session.user);
      req.flash('success', { msg: 'Success! You are logged in'});
      res.redirect('/dashboard');
      //res.end('Success');
      console.log("Request User: " + req.user);
      res.locals.data =  {
          UserStore: { user: user }
        };
      res.redirect('/dashboard');
    });
  })(req, res, next);
  //Feed.save(function(err) {console.log('Feedback saved');});
  //Problem.save(function(err) {console.log('Problem saved');});
  //Pair.save(function(err) {console.log('ProblemPair saved');});
  //console.log(Feed);

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
      var id = req.body.id;
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

       if (req.body.location == "") {
        req.body.location = req.user.profile.location;
      }

      User.findById(id, function(err, user) {
        user.profile.firstName = req.body.firstName;
        user.profile.lastName = req.body.lastName;
        user.profile.gender = req.body.gender;
        user.profile.section = req.body.section;
        user.profile.location = req.body.location;
        user.save();
        res.end();
      });
};

/**
 * GET /logout
 */
exports.getAllUsers = function(req, res) {
  //console.log("TESTTTTTT");
  //console.log(res.locals.data);
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
      section : req.body.section,
      gender : req.body.gender,
      location : req.body.location
    }
  });
  User.findOne({email: req.body.email}, function(err, existingUser) {
    if(existingUser) {
      req.flash('errors', { msg: 'Account with that email address already exists' });
      res.redirect('/register');
    }
    user.save(function(err) {
      if(err) return next(err);
      req.logIn(user, function(err) {
        if(err) return next(err);
        console.log('Successfully created');
        console.log('Printing user');
        console.log(user);
        //console.log('Print our body from our request');
        //console.log(req.body);
        req.session.user = req.user;
        //console.log("Request session user:" + req.user); 
        res.redirect('/');
        //res.end();
      });
    });
  });
};


