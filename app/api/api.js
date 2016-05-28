var mongoose = require('mongoose');

var UserModel = require('./models').User;
var PubModel = require('./models').Pub;

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

var getPub = function(id, callback){
     PubModel.findById(id, function(err,doc){  
     callback(doc);
  });
};

var getUser = function(id, callback){
  Usermodel.findById(id,function(err,doc){
    callback(doc);
  });
};

var getUserList = function(callback){
  Usermodel.find({}, function(err,users){
    var usermap = {};

    users.forEach(function(item){
      usermap[item.id] = user;
    });
    callback(usermap);
  });
};

var getPubList = function(callback){
  PubModel.find({}, function(err,pubs){
    var pubmap = {};

    pubs.forEach(function(item){
      pubmap[item.id] = pub;
    });
    callback(pubmap);
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
