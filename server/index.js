var express = require('express');
var bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
var dbQuery = require('../database-mysql');

var app = express();

const PORT = process.env.PORT || 5001;

//global middleware
app.use(express.static(__dirname + '/../react-client/dist'));

  // support parsing of application/json type post data
app.use(bodyParser.json());

  //support parsing of application/x-www-form-urlencoded post data
// app.use(bodyParser.urlencoded({ extended: true }));

app.get('/links', function(req, res){
  dbQuery.selectAll((err, results) => {
     if(err) {
       console.log('error connecting to the database', err);
       res.sendStatus(500);
     } else {
       res.status(200).json(results);
     }
   })
})

app.post('/add', function (req, res) {
  const { trickName, urlName } = req.body;
  dbQuery.addTrick(trickName, urlName,(err,results)=> {
    if(err) {
      throw err;
      res.sendStatus(500);
    } else {
      res.status(200).json(results);
    }
  })
});

app.post('/delete', function (req, res) {
  const { id } = req.body;
  console.log(req.body)
  dbQuery.deleteTrick(id,(err,results)=> {
    if(err) {
      throw err;
      res.sendStatus(500);
    } else {
      res.status(200).json(results);
    }
  })
});

app.listen(PORT, function() {
  console.log('listening on port 5001!');
});

