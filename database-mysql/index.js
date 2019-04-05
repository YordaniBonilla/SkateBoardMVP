
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Holacode',
  database : 'sk8'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

var selectAll = function(callback) {
  connection.query('SELECT * FROM Tricks', function(err, results) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.selectAll = selectAll;