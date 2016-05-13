/**
 * Created by albrechn on 13.05.2016.
 */

'use strict';

// Declare app level module which depends on views, and components
angular.module('pub', [
    'ngRoute',
    'pub.home',
    'pub.pub_profil',
    'pub.user_profil'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/home'});
}]);


