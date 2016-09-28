var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  }
});

// Remove the hashed password form the JSON response
userSchema.set('toJSON', {
  transform: function(doc, ret, options) {
    delete ret.password;
    return ret;
  }
});

module.exports = mongoose.model('User', userSchema);
