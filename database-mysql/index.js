const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Holacode',
  database : 'sk8'
});
//for terminal

connection.connect(err => {
  (err)? console.log(err+'+++++++++++++++//////////'):
  console.log('connection********')
});

//require('../database-mysql/index.js') (app,connection)

connection.query('SELECT 1', (err, rows) => {

})
const selectAll = function(callback) {
  connection.query('SELECT * FROM sk8', function(err, results/*, fields*/) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.selectAll = selectAll;
