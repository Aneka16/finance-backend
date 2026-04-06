const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  amount: Number,
  type: String,
  category: String,
  date: {
    type: Date,
    default: Date.now,
  },
  note: String,
});

module.exports = mongoose.model("Record", recordSchema);