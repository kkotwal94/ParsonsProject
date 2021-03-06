/**
 * Defining a User Model in mongoose
 * 
 */

var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');
var crypto = require('crypto');

// Other oauthtypes to be added

/*
 User Schema
 */

var UserSchema = new mongoose.Schema({
  email: { type: String, unique: true},
  password: String,
  tokens: Array,
  profile: {
    firstName: { type: String, default: ''},
    lastName: {type: String, default: ''},
    gender: { type: String, default: ''},
    location: { type: String, default: ''},
    picture: { type: String, default: ''},
    section: { type: String, default: ''}
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  google: {},
  problemPair: [{type: mongoose.Schema.Types.ObjectId, ref: 'UserProblemPair'}],
  isStaff : { type: Boolean, default: false},
  assignmentsCreated : [{type: mongoose.Schema.Types.ObjectId, ref: 'Assignments'}],
  assignmentsCompleted: [{type: mongoose.Schema.Types.ObjectId, ref: 'Assignments'}],
  problemsCompleted: [{type: mongoose.Schema.Types.ObjectId, ref: 'ParsonsProblem'}]
});


/**
 * Password hash middleware.
 */
UserSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) return next();
  bcrypt.genSalt(5, function(err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

/*
 Defining our own custom document instance method
 */
UserSchema.methods = {
  comparePassword: function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
      if(err) return cb(err);
      cb(null, isMatch);
    })
  }
};

/**
 * Statics
 */

UserSchema.statics = {}



module.exports = mongoose.model('User', UserSchema);
