// Set up MySQL connection.
var mysql = require("mysql");
require("dotenv").config();
var keys = require("../keys.js");

var connection = mysql.createConnection({
  port: 3000,
  host: "localhost",
  // Your username
  user: process.env.DB_USER,

  // Your password
  password: process.env.DB_PASS,
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
