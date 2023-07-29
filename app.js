const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const route = require("./routes/employee");
require("dotenv").config();
const connectDb = require("./db");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");

app.use("/api/v1/employees", route);
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URL);
    app.listen(port, console.log(`app listen on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
