/**
 * Defining a Feedback Model in mongoose
 * 
 */
var mongoose = require('mongoose');
// Other oauthtypes to be added

/*
 User Schema
 */

var UserProblemPairSchema = new mongoose.Schema({
  user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  problem_id: {type: mongoose.Schema.Types.ObjectId, ref: 'ParsonsProblem'},
  attempt_quantity: {type: Number, default: 0},
  timestamp: {type: Date},
  completed: {type: Boolean, default: false}
});




module.exports = mongoose.model('UserProblemPair', UserProblemPairSchema);
