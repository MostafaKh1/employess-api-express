const mongoose = require("mongoose");

module.exports = mongoose.model("Employee", {
  fullName: {
    type: String,
    required: [true, "must provide name  "],
    trim: true,
  },
  position: { type: String },
  location: { type: String },
  salary: { type: Number },
});
