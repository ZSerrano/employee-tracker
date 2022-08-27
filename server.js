const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");

const PORT = process.env.PORT || 3001;

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "brometheus49!x",
    database: "tracker_db",
  },
  console.log(`Connected to the tracker_db database.`)
);

const viewDepartment = `SELECT * FROM department`;
const searchDepartments = () => {
  db.query(viewDepartment, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
  });
};

const viewEmployee = `SELECT * FROM employee`;
const searchEmployees = () => {
  db.query(viewEmployee, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
  });
};

const viewRole = `SELECT * FROM role`;
const searchRoles = () => {
  db.query(viewRole, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
  });
};

const initView = () => {
  return inquirer.prompt({
    type: "list",
    message: "What would you like to view?",
    name: "choice",
    choices: ["Departments", "Employees", "Roles", "End"],
  });
};

initView().then(({ choice }) => {
  if (choice === "Departments") {
    return searchDepartments();
  } else if (choice === "Employees") {
    return searchEmployees();
  } else if (choice === "Roles") {
    return searchRoles();
  } else {
    console.log("Ended viewing.");
  }
});
