const inquirer = require("inquirer");
const mysql = require("mysql2");

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
