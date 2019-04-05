var express = require('express');
var bodyParser = require('body-parser');

var items = require('../database-mysql');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/urls', function(req, res){
  items.selectAll((err, results) => {
     if(err) {
       console.log('error conecting to the database');
       res.sendStatus(500);
     } else {
       res.status(200).json(results);
     }
   })
})


app.listen(3000, function() {
  console.log('listening on port 3000!');
});

