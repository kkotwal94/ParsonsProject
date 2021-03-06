/**
 * Routes for express app
 */
var express = require('express');
var users = require('../controllers/users');
var feedback = require("../controllers/feedbackapi");
var problem = require("../controllers/problemapi");
var pair = require("../controllers/userproblempairapi");
var assignment = require("../controllers/assignmentsapi.js");
var mongoose = require('mongoose');
var _ = require('lodash');
var Header = require('../../public/assets/header.server');
var App = require('../../public/assets/app.server');

module.exports = function(app, io, passport) {
  // user routes
  app.post('/login', users.postLogin);  
  app.post('/signup', users.postSignUp);
  app.get('/logout', users.getLogout);
  
  //api call for creating problem
  app.post('/createProblem', function(req, res) {
    problem.createProblem(req,res);
  });
  
  app.post('/updateUserProfile', function(req, res) {
    users.updateUserProfile(req, res);
  });
  
  app.get('/getAllUsers', function(req, res) {
    users.getAllUsers(req, res);
  });

  app.get('/getAllProblems', function(req, res) {
    problem.getAllProblems(req, res);
  });

   app.get('/getParsonsProblem/:id', function(req, res) {
    problem.getParsonsProblem(req, res);
  });

  app.post('/deleteParsonsProblem', function(req, res) {
    problem.deleteParsonsProblem(req, res);
  });

  app.post('/updateParsonsProblem', function(req, res) {
    problem.updateParsonsProblem(req, res);
  });

  //api call for assignments
  app.post('/createAssignment', function(req, res, next) {
    assignment.createAssignment(req, res, next);
  });

  app.post('/deleteAssignment', function(req, res) {
    assignment.deleteAssignment(req, res);
  });

  app.post('/updateAssignment', function(req, res) {
    assignment.updateAssignment(req, res);
  });
  
  app.get('/getAssignment/:id', function(req, res, next) {
    assignment.getAssignment(req, res, next);
  });

  app.get('/getAllAssignments', function(req, res, next) {
    assignment.getAllAssignments(req, res, next);
  });


  app.post('/createFeedback', function(req, res, next) {
    feedback.createFeedback(req, res, next);
  });

  app.post('/deleteFeedback', function(req, res) {
    feedback.deleteFeedback(req, res);
  });

  app.post('/updateFeedback', function(req, res) {
    feedback.updateFeedback(req, res);
  });

  app.get('/getFeedback', function(req, res, next) {
    feedback.getFeedback(req, res, next);
  });
  // google auth
  // Redirect the user to Google for authentication. When complete, Google
  // will redirect the user back to the application at
  // /auth/google/return
  // Authentication with google requires an additional scope param, for more info go 
  // here https://developers.google.com/identity/protocols/OpenIDConnect#scope-param
  app.get('/auth/google', passport.authenticate('google', { scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
      ] }));

  // Google will redirect the user to this URL after authentication. Finish the
  // process by verifying the assertion. If valid, the user will be logged in.
  // Otherwise, the authentication has failed.
  app.get('/auth/google/callback',
    passport.authenticate('google', {
      successRedirect: '/',
      failureRedirect: '/login'
    }));

 
   //Important** on refresh we look at our wildcard call to find out if we're still logged in.
  // Retrieves all topics on any endpoint for demonstration purposes
  // If you were indeed doing this in production, you should instead only
  // query the Topics on a page that has topics
  app.get('*', function(req, res, next) {
    
       
        // We don't want to be seeding and generating markup with user information
        //console.log("Before we change: " + req.user);
        var user = req.user ? {authenticated: true, isWaiting: false, email: req.user.email, id: req.user._id, profile: req.user.profile, problems: req.user.problemPair, isStaff: req.user.isStaff} : { authenticated: false, isWaiting: false };
        //console.log("After the change: " + req.user);
        // An object that contains response local variables scoped to the request, and therefore available only to the view(s) rendered during
        // that request/response cycle (if any). Otherwise, this property is identical to app.locals
        // This property is useful for exposing request-level information such as request path name, authenticated user, user settings, and so on.
        // pass in data to be seeded into the TopicStore
        res.locals.data =  {
          UserStore: { user: user }
        };
        //console.log(req.session);
        next();
  });
  
  // This is where the magic happens. We take the locals data we have already
  // fetched and seed our stores with data.
  // App is a function that requires store data and url to initialize and return the React-rendered html string
  app.get('*', function (req, res, next) {
    var html = App(JSON.stringify(res.locals.data || {}), req, res);
    html = html.replace("TITLE", Header.title)
                .replace("META", Header.meta);

    if(process.env.NODE_ENV === 'devhotloader') {
      html = html.replace("LINK", '');
    } else {
      html = html.replace("LINK", Header.link);
    }

    res.contentType = "text/html; charset=utf8";
    res.end(html);
  });


  io.on('connection', function(socket) {
    console.log("User has connected");
    socket.emit('news', { hello: 'world'});
    socket.on('my other event', function(data) {
      console.log(data);
    })

    socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  });
};;
