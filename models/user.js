const mongoose, { Schema } = require('mongoose');

const userSchema = new Schema({
  googleId: String
});

mongoose.model('users', userSchema);