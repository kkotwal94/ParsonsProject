/**
 * Defining a Parsons problem Model in mongoose
 * 
 */
var mongoose = require('mongoose');
// Other oauthtypes to be added

/*
 Assignment Schema
 */

var AssignmentsSchema = new mongoose.Schema({
  title: {type: String, default: ''},
  description: {type: String, default: ''},
  assignment: [{type: mongoose.Schema.Types.ObjectId, ref: 'ParsonsProblem'}],
  createdByAdmin: {type: Boolean, default: false},
  ownedBy: {type:mongoose.Schema.Types.ObjectId, ref: 'User'},
  score: {type:Number, default: 0}
  
});




module.exports = mongoose.model('Assignments', AssignmentsSchema);
