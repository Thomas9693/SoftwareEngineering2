var mongoose = require('mongoose');

var UserModel = require('./models').User;
var PubModel = require('./models').Pub;

var JSON = require('./../json/users');

mongoose.connect('mongodb://localhost/PubRace');

var db = mongoose.connection;

db.on('error', function(err){
    console.log('connection error', err);
});

db.once('open', function(){
    console.log('connected');
});

var insertUser = function(userproperties, callback) {
    var user = new UserModel(userproperties);
    user.save(function(err, user){
        if (typeof callback === 'function'){
            callback(err);
        }
    });
};

var insertPub = function(pubproperties, callback) {
    var pub = new PubModel(pubproperties);
    pub.save(function(err, user){
        if(typeof callback === 'function'){
            callback(err);
        }
    })
};

var getPub = function(id){
  PubModel.findById(id, function(err,doc){
    return doc;
  });
};

var getUser = function(id){
  Usermodel.findById(id,function(err,doc){
    return doc;
  });
};

var getUserList = function(){
  Usermodel.find({}, function(err,users){
    var usermap = {};

    users.forEach(function(item){
      usermap[item.id] = user;
    });
    return usermap;
  });
};

var getPubList = function(){
  Pubmodel.find({}, function(err,pubs){
    var pubmap = {};

    pubs.forEach(function(item){
      pubmap[item.id] = pub;
    });
    return usermap;
  });
};

module.exports = exports = {
  insertPub,
  insertUser,
  getPub,
  getUser,
  getPubList,
  getUserList
}
