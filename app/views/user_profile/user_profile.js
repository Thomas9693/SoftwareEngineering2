/**
 * Created by albrechn on 13.05.2016.
 */

'use strict';
angular.module('pub.user_profil', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/user/', {
            templateUrl : 'views/user_profile/user_profile.html',
            controller  : 'userController'
        });
    }])


    .controller('userController', ['$scope', function($scope) {
        $.get("http://tomtom9693.no-ip.org/user/", function(data){
            alert(data);
        });
        $.get("http://tomtom9693.no-ip.org/user/5748723923663bbd1b27d276", function(data){
            alert("Data: " + data.name + "\n" + data.birthday + "\n" + data.gender + "\n" + data.hometown);
        });

        var user_name = "Max Mustermann";
        var user_birthday = new Date("1995/04/23");
        var user_gender = 'm';
        var user_hometown = 'Stuttgart';
        var user_pic = 'http://www.fbw-filmbewertung.com/uploads/fbwdb_film/poster/d2da494115b0bebe5abcfff65152fc8b02f81400.jpg';
        var user_interests = ["Fußball", "Music", "HipHop"];

        $scope.user_name = user_name;
        $scope.user_birthday = user_birthday.getDate() + "." + user_birthday.getMonth() + "." + user_birthday.getFullYear();
        $scope.user_gender = user_gender.toUpperCase();
        $scope.user_hometown = user_hometown;
        $scope.user_pic = user_pic;
        $scope.user_interests = user_interests;
    }]);