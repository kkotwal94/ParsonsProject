/**
 * Defining a Feedback Model in mongoose
 * 
 */
var mongoose = require('mongoose');
// Other oauthtypes to be added

/*
 Feedback Schema
 */

var FeedbackSchema = new mongoose.Schema({
  lineFeedback: [{type: String, default: ''}],
  parsonsProblemReferencef: [{type: mongoose.Schema.Types.ObjectId, ref: 'ParsonsProblem'}]
});




module.exports = mongoose.model('Feedback', FeedbackSchema);
