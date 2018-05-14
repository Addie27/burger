// Set up MySQL connection.
var mysql = require("mysql");
require("dotenv").config();
var keys = require("../keys.js");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: process.env.DB_USER,

  // Your password
  password: process.env.DB_PASS,
  database: "burgers_db"
});
}; 



connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  
});
// Export connection for our ORM to use.
module.exports = connection;
