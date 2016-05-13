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

    .controller('userController', [function() {
        $scope.message = 'User Profil';
    }]);