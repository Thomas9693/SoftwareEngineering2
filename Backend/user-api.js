var mongoose = require('mongoose');

var UserModel = require('./models').User;
var PubModel = require('./models').Pub;

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
}