
let mysql = require('mysql');

let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'andreag123.,',
  database : 'cloudy'
});

let config = function(err) {
  if(err) throw err;
  console.log("Your mysql connection has been successful!");
};

connection.connect(config);

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
  let sql = 'INSERT INTO Tricks (trick, redirect) VALUES (?,?);';
  connection.query(sql , [trick, redirect], (err, results) => {
    if(err) {
      throw err;
      } else {
        cb(err,results);
      }
    }
  );
};

let deleteTrick = function(id,cb) {
  let sql = 'DELETE FROM Tricks WHERE id = ?';
  connection.query(sql ,[id],(err, results) => {
    if(err) {
      throw err;
      } else {
        cb(err,results);
      }
    }
  );
};


module.exports = {
  selectAll,
  addTrick,
  deleteTrick
}
