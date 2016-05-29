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

    .controller('pubController', ['$scope', function($scope) {

        //$.get("http://tomtom9693.no-ip.org/pub/57496d453a818f3e249aa06d", function(data){
         //   alert("Data: " + data.name);
        //});
        
        var pub_name = 'Tequila Bar';
        var pub_slogan = 'Wo dicht wenn nicht hier?!';
        var opening_hours = 'Mo: 16:00 - 00:00 \n Fr - Sa: 17:00 - 04:00 \n  So: Ruhetag';
        var pub_street = 'Rotebühlstr 21';
        var pub_zip_code = '0711';
        var pub_city = 'Stuttgart';
        var offer_sky = true;
        var pub_menu = 'Bier + Tequila          3,50€' +
            'Vodka              2,80€';

        $scope.pub_name = pub_name;
        $scope.pub_slogan = pub_slogan;
        $scope.opening_hours = opening_hours;
        $scope.pub_street = pub_street;
        $scope.pub_zip_code = pub_zip_code;
        $scope.pub_city = pub_city;
        $scope.menu = pub_menu;

        if(offer_sky == true){
            $('#sky-indicator').show();
        }else {
            $('#sky-indicator').hide();
        }
    }]);