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

    .controller('homeController', [function() {
        $scope.message = 'Everyone come and see how good I look!';
    }]);
