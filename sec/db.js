const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost",
  user: "root",      // change to your MySQL user
  password: "",       // change if you set a password
  database: "bincom_test"
});

module.exports = db;