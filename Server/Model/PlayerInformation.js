const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RS = new Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  years: {
    type: String,
    required: true,
  },
  battingAvg: {
    type: Number,
    required: true,
  },
  available: {
    type: Boolean,
  }
});

module.exports = mongoose.model("PlayerInformation", RS);