const { CustomError } = require("../errors/custom-error");

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    const { statusCode, message } = err;
    return res.status(statusCode).json({ msg: message });
  }
  res.status(500).json({ msg: err });
};

module.exports = errorHandler;
