/**
 * Created by albrechn on 13.05.2016.
 */

'use strict';

angular.module('pub.pub_profil', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/pub/', {
            templateUrl : 'views/pub_profile/pub_profile.html',
            controller  : 'pubController'
        });
    }])

    .controller('pubController', [function() {
        $scope.message = 'Pub Profil';
    }]);