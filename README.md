# ParsonsProject
A web app that allows students to practice Parson's problems

#CurrentBugs:
* Req.user, cannot be establish or mantained after logging in with passportjs even though it should be. 

#Just Implemented/Done:

#11/6 - Current requirements list and status report
* https://docs.google.com/spreadsheets/d/1OiSD0A0X4Z_KUceu_i9i0lEeXYk6gByobHI9ZzPnbiM/edit?usp=sharing


#10/25 - Profile Component

* Added in user updating data
* Added in Location and gender to signup (doesnt really matter)
* Added in databinding between store, actions, so front end gels together
* Tested POST request for updating user info
* Created UI for updating data
* Asynchronous data loading front end, and backend (this is a cool way to see how react, and flux handle updating data instantly)
* Installed REACT-Drag-N-Drop
* Updated React to v14 (no breaking changes)

#10/09
* Added in Dashboard interface (Bootstrap SB Admin template)
* Added in template for Profile 
* Added in template for Problem
* Added in template for Assignments
* Added in template for Settings
* Added in template for Statistics (Lower Priority)
* Added in template for Messages/Inbox (Even Lower)
* Added in template for Chat (Way below low)
* Added in Sidebar
* Added in Navbar
* Adjusted all routes to point to correct routes, doesnt rerender nav or sidebar, creating singlepage effect
* Font Awesome was used for icons, and JQuery for the bootstrap.js file, we can use all bootstrap stuff/css

#Important notes about update:
I set up the routes with the jsx files so they correspond. All the routes are nested or belong to dashboard, and I did that because you get to those routes or views through the dashboard. I haven't added any forms or anything, just tidied it up and added a nice interface for us to work with. 

<strong>We should npm run-script dev when working in development mode, and start for production</strong>

#How To set ups

First install nodejs,mongodb, and then clone this repo with git.

Then type <code>npm install</code> in the console and this will install every dependency we need for the project. All our dependencies are listed in package.json, and this is usually the case for all node projects you rip from a repo. npm will then install react and a whole bunch of other tools


#Webpacking

I included webpack to bundle our project. We can always run our server by typing <code>node server.js</code> in our server folder however we need to build our project, link our whole project to our dependencies and what webpack does is optimize that as well and minifies all our code. If you look inside package.json you can see we have some scripts in there such as <code>webpack build...</code>. What this does is use webpack to build a new folder called public which will hold all our minified files and images. It also allows us to use ES6 javascript and translate all our react code to javascript. Using ES6 javascript allows us to use its new methods/functions/etc that the previous javascript version didnt like import/export classes, and promises.

So run <code>npm run-script build</code> to create that public folder with minified files, then do <code>npm run-script start</code> to start our server (or you can go to the server folder and type <code>node server.js</code>).

#Implemented

I got login and signup working, also I set up the initial routing to /dashboard and /about. So the route /dashboard cannot be visited unless a user is authenticated same with the 'about' route. Signup works as well it creates a new user and whatever. Once a user logs in the browser will remember it with a cookie/session I create. I also used mongo for now just get things rolling, we can switch to sql once we meet up and get familiar with sql/node. Most of the code is commented for the node part, not much for the react part yet.

The front end is written in es6 javascript (Javascript 2015) and reactjs


#Currently Working On

Set up the mongoose Models for our MongoDB (Feedback, ParsonsProblem, UserProblemPair) like we did in lab, added it into a test case under login, so every login it will create a new object for these models (with different ids ofcourse) with the same properties. It generated in the database for me the query to search these in the DB would be 

* <code>db.users.find({})</code> for users
* <code>db.feedbacks.find({})</code> for feedback
* <code>db.parsonsproblems.find({})</code> for Parsons Problems
* <code>db.userproblempairs.find({})</code> for User Problem Pair

Test worked fine, ids were cool for objects, just double check our schema for these models incase we missed anything, models are under /models, controllers under /controllers, the test is written in controllers/users.js, and in the login api.

#TODO

Api to write for ParsonsProblem
* GET ParsonsProblem (indiviual Parsons Problem by id)
* Get All ParsonsProblem
* POST Create ParsonsProblem
* POST Delete ParsonsProblem
* POST Update ParsonsProblem

Api for feedback
* GET Feedback (indiviual Feedback data)
* GET All Our Feedback (for admin)
* POST Create Feedback
* POST Delete Feedback
* POST Update Feedback
* POST AssignFeedback (To a parsons problem)

Api for User
* GET Problems completed
* GET Most Problem failed
* GET firstName, LastName, section, course, birthday etc
* POST Update firstName, LastName, section, course, birthday etc
* POST Delete User (Admin only)

Api for UserProblemRelationship (not sure yet)
* GET Attempts taken for a certain problem
* GET User taking the problem
* GET the actual Problem ID from this problem
* GET Date of the problem
* GET and update UserInfo (should do on own since object ref)
* GET and update Problem Model (should do on own since object ref)
