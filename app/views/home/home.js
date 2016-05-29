/**
 * Created by albrechn on 13.05.2016.
 */

'use strict';

angular.module('pub.home', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl : 'views/home/home.html',
            controller  : 'homeController'
        });
    }])

    .controller('homeController', ['$scope', function($scope) {

        $.get("http://tomtom9693.no-ip.org/user/", function(data){
            alert("User: " + data);
        });
        $.get("http://tomtom9693.no-ip.org/pub/", function(data){
            alert("Pubs: " + data);
        });

        $scope.welcome = 'Welcome to PubRace!';
        $scope.posts = [
            {pubname: 'Tequila Bar', username: 'Max Mustermann'},
            {pubname: 'Troll', username: 'Yoda'},
            {pubname: '7 Grad', username: 'Mr. Unknown'},
        ];
    }]);
