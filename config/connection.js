var mysql = require("mysql");

var source = {
    localhost: {
        port: 3306,
        host: "localhost",
        user: "root",
        password: "@bb33449966lp",
        database: "burgers_db"
    }
};

var connection = mysql.createConnection(source.localhost);

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;