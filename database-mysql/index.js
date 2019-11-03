
let mysql = require('mysql');

let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Jadeninja93',
  database : 'sk8'
});

connection.connect(function(err) {
  if(err) throw err;
  console.log("Connected!");
});

let selectAll = function(callback) {
  connection.query('SELECT * FROM Tricks', function(err, results) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

let addTrick = function(trick, redirect,cb) {
  connection.query('INSERT INTO Tricks (trick, redirect) VALUES (?,?);',
    [trick, redirect],
     (err, results) => {
      if(err) {
        throw err;
      } else {
        cb(results);
      }
     }
    )
};



module.exports.selectAll = selectAll;
module.exports.addTrick = addTrick;