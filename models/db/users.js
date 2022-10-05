const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  username: { type: String, unique: true },
  isLoggedIn: { type: Boolean, default: false },
  lastLogin: { type: Date, default: null },
});

module.exports = mongoose.model("User", userSchema);
