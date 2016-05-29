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
])
    .controller('nav', ['$scope', function ($scope) {
        $(".nav a").on("click", function(){
            $(".nav").find(".active").removeClass("active");
            $(this).parent().addClass("active");
        });
    }]);
