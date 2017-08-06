var connection = require("./config/connection.js");

connection.connect(function(err) {
  if (err) {
    console.log('error connecting');
    return;
  };
  console.log('connected as id ' + connection.threadId);
})

var orm = {
  selectAll: function(callback) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, [callback], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

  insertOne: function(burger_name, callback) {
    connection.query("INSERT INTO burgers SET ?", {

    burger_name: burger_name,
    devoured: false,
    date: timestamp
    }, function (err, result) {
      if (err) {
        throw err;
        callback(result);
      }
    });
  },

  updateOne: function(burgerId, callback) {
    connection.query = "UPDATE burgers SET ?? WHERE id = ?", [{devoured: true}, {id: burgerId}], function (err, results) {
      if (err) {
        throw err;
        callback(result);
      }
    }
    }
  }

  module.exports = orm;
