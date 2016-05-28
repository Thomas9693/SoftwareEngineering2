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

        var user_name = 'Peter Mueller';
        var user_birthday = '15.01.1998';
        var user_gender = 'M';
        var user_hometown = 'Stuttgart';
        var user_pic = 'http://www.fbw-filmbewertung.com/uploads/fbwdb_film/poster/d2da494115b0bebe5abcfff65152fc8b02f81400.jpg';
        var user_interests = ["Fußball", "Music", "HipHop"];

        $scope.user_name = user_name;
        $scope.user_birthday = user_birthday;
        $scope.user_gender = user_gender;
        $scope.user_hometown = user_hometown;
        $scope.user_pic = user_pic;
        $scope.user_interests = user_interests;
    }]);