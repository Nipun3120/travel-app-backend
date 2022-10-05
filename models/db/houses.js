const mongoose = require("mongoose");

const houseSchema = new mongoose.Schema({
  img: { type: String, default: null },
  title: { type: String, default: null },
  description: { type: String, default: null },
  star: { type: Number, default: null },
  price: { type: String, default: null },
  total: { type: String, default: null },
});

module.exports = mongoose.model("House", houseSchema);
