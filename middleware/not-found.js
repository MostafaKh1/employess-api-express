const { models } = require("mongoose");

const notFound = (req, res) => {
  res.status(404).send(`this page not found`);
};

module.exports = notFound;
