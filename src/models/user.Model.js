// user.model.js

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  passwordHash: { type: String, required: true },
  salt: { type: String, required: true },
  name: String,
  surname: String,
  role: String,
},
{ versionKey: false });

// Metodo per impostare la password (genera hash e sale)
userSchema.methods.setPassword = function (password) {
  this.salt = bcrypt.genSaltSync(10);
  this.passwordHash = bcrypt.hashSync(password, this.salt);
};

// Metodo per validare la password durante il login
userSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.passwordHash);
};

const User = mongoose.model('User', userSchema);

module.exports = User;