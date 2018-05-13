var connection = require("./connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

var orm = {
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, [tableInput], function(err, result) {
        if (err) throw err;
        cb(result);
        // console.log(result);
      });
    },
    insertOne: function(table, cols, vals, cb) {
      var queryString = "INSERT INTO " + table + "( "  + cols.toString() + " ) VALUES ( " + printQuestionMarks(vals.length) + " )";  
      var print = connection.query(queryString, vals, function(err, result) {
        if (err) throw err;
        console.log(result);
        cb(result);
      });
      console.log(print);
    },
    // updateOne: function(tableInput, updateCol, valofUpdatedCol, colToSearch, valOfCol) {
    //   var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
  
    //   console.log(queryString);
  
    //   connection.query(queryString, [tableInput, updateCol, valofUpdatedCol, colToSearch, valOfCol], function(
    //     err,
    //     result
    //   ) {
    //     if (err) throw err;
    //     console.log(result);
    //   });
    // } 
  };
  
  module.exports = orm;
  