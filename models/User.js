const { Schema, model } = require('mongoose');

const UserSchema = Schema({
  username: String,
});

module.exports = model('User', UserSchema);
