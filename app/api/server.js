var path = require('path');
var express = require('express');
var app = express();

var json = require('./../json/pubs.json');

var publist = require('./api').getPubList;
var pubid = require('./api').getPub;
var userlist = require('./api').getUserList;
var userid = require('./api').getUser;
var userinsert = require('./api').insertUser;
var pubinsert = require('./api').insertPub;

app.use(express.static(path.resolve('../')));

app.get('/pub/', function(req, res){
  publist(function(result){
    res.send(result);
  });
});

app.get('/pub/:id', function(req, res, next){
  pubid(req.params.id, function(result) {
	console.log(result);
  	res.send(result);
  });
});

app.get('/user/', function(req, res){
  userlist(function(result){
        res.send(result);
      });
});

app.get('/user/:id', function(req, res){
  userid(req.params.id, function(result){
        res.send(result);
      });
});

app.get('/', function(req, res){
    res.sendFile('index.html', {'root': path.resolve('/../')});
});

app.listen(5000);

console.log('server listen at port 5000');
