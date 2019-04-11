var express = require('express');
var bodyParser = require('body-parser');

var Tricks = require('../database-mysql');

var app = express();

console.log('Server:', Tricks.selectAll);

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/info', function(req, res){
  Tricks.selectAll((err, results) => {
     if(err) {
       console.log('error connecting to the database', err);
       res.sendStatus(500);
     } else {
       res.status(200).json(results);
       console.log(results);
     }
   })
})

app.post('/info', function (req, res) {
  res.send(addTrick);
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

