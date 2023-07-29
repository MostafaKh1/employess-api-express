const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", false);

module.exports = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
