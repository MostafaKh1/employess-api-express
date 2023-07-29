const express = require("express");
const router = express.Router();
const Employee = require("../models/employee");
const {
  getAllEmployees,
  addEmployee,
  getEmployeeByID,
  removeEmployee,
  updateEmployee,
} = require("../controller/employee");

router.route("/").get(getAllEmployees).post(addEmployee);
router
  .route("/:id")
  .get(getEmployeeByID)
  .patch(updateEmployee)
  .delete(removeEmployee);

module.exports = router;
