var connection = require("./connection.js");

var orm = {
    selectAll: function(whatToSelect, tableInput) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, [tableInput], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    insertOne: function(tableInput, colToSearch, valOfCol) {
      var queryString = "INSERT INTO ?? WHERE ?? = ?";
  
      console.log(queryString);
  
      connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    updateOne: function(tableInput, updateCol, valofUpdatedCol, colToSearch, valOfCol) {
      var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
  
      console.log(queryString);
  
      connection.query(tableInput, updateCol, valofUpdatedCol, colToSearch, valOfCol], function(
        err,
        result
      ) {
        if (err) throw err;
        console.log(result);
      });
    }
  };
  
  module.exports = orm;
  