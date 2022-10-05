const config = require("../../config/auth.config");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const User = require("../db/users");

const createToken = (data, secret, time) => {
  let token = jwt.sign(data, secret, { expiresIn: time });
  console.log("TOKEN ", token);
  return token;
};

const getUserFromToken = async (token) => {
  const uid = jwt.decode(token).uid;
  const user = await User.findById({ _id: uid });
  console.log(user);
  return user;
};

module.exports = {
  createToken,
  getUserFromToken,
};
