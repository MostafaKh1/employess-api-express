const { createCustomError } = require("../errors/custom-error");
const asyncWrapper = require("../middleware/async");
const Employee = require("../models/employee");

const getAllEmployees = asyncWrapper(async (req, res, next) => {
  const employee = await Employee.find({});
  res.status(200).json({ employee });
});
const getEmployeeByID = asyncWrapper(async (req, res, next) => {
  const { id: employeeID } = req.params;
  const employee = await Employee.findById({ _id: employeeID });
  if (!employee) {
    return next(
      createCustomError(`no employ found whit this id ${employeeID}`, 404)
    );
  }
  res.status(200).json({ employee });
});

const addEmployee = asyncWrapper(async (req, res, next) => {
  const employee = await Employee.create(req.body);
  res.status(201).json({ employee });
});

const updateEmployee = asyncWrapper(async (req, res, next) => {
  const { id: employeeID } = req.params;
  const employee = await Employee.findByIdAndUpdate(
    { _id: employeeID },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!employee) {
    return next(
      createCustomError(`no employ found whit this id ${employeeID}`, 404)
    );
  }
  res.status(201).json({ employee });
});

const removeEmployee = asyncWrapper(async (req, res, next) => {
  const { id: employeeID } = req.params;
  const employee = await Employee.findOneAndDelete({ _id: employeeID });
  if (!employee) {
    return next(
      createCustomError(`no employ found whit this id ${employeeID}`, 404)
    );
  }
  res.status(200).json({ employee });
});

module.exports = {
  getAllEmployees,
  addEmployee,
  getEmployeeByID,
  updateEmployee,
  removeEmployee,
};
