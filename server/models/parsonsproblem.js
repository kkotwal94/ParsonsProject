/**
 * Defining a Parsons problem Model in mongoose
 * 
 */
var mongoose = require('mongoose');
// Other oauthtypes to be added

/*
 User Schema
 */

var ParsonsProblemSchema = new mongoose.Schema({
  description: {type: String, default: ''},
  problem: [{type:String, default: ''}],
  feedback: [{type: mongoose.Schema.Types.ObjectId, ref: 'Feedback'}],
  tags: [String]
});




module.exports = mongoose.model('ParsonsProblem', ParsonsProblemSchema);
