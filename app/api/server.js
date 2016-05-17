var express = require('express');
var app = express();

var publist = require('./api').getPubList;
var pubid = require('./api').getPub;
var userlist = require('./api').getUser;
var userid = require('./api').getUserList;

app.get('/pub/', function(req, res){
  var result = publist();
  res.send(result);
});

app.get('/pub/:id', function(req, res, next){
  var result = pubid(req.params.id);
  res.send(result);
});

app.get('/user/', function(req, res){
  var result = userlist();
  res.send(result);
});

app.get('/user/:id', function(req, res){
  var result = publist();
  res.send(result);
});

app.listen(80);
