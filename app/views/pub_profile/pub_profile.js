/**
 * Created by albrechn on 13.05.2016.
 */

'use strict';

angular.module('pub.pub_profil', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/pub/', {
            templateUrl : 'views/pub_profile/pub_list.html',
            controller  : 'pubController'
        }).when('/pub/:param', {
            templateUrl : 'views/pub_profile/pub_profile.html',
            controller  : 'pubDetailController'
        });
    }])

    .controller('pubController', ['$scope', function($scope){
        var pub_name = '';
        var pub_slogan = '';
        var opening_hours = '';
        var pub_street = '';
        var pub_zip_code = '';
        var pub_city = '';
        var offer_sky = false;
        var pub_menu = '';

        $.get('http://tomtom9693.no-ip.org/pub/', function(data){
            var code = '';
            $.each(data, function (nr, obj) {
                pub_name = obj.name;
                pub_slogan = obj.category;
                pub_city = obj.place.town;
                pub_street = obj.place.street;
                offer_sky = obj.sky;
                code += '<tr class="click-row" data-id="'+obj._id+'"><td>'+pub_name+'</td><td>'+pub_slogan+'</td><td>'+pub_city+'</td><td>'+pub_street+'</td><td>'+offer_sky+'</td></tr>';
            });
            $('#pub-list').html(code);
            $('.click-row').click(function (e) {
                e.preventDefault();
                var data_id = $(this).attr('data-id');
                location.href = '#/pub/'+data_id;
            })
        });
    }])

    .controller('pubDetailController', ['$scope', '$routeParams', function($scope, $routeParams) {

        $.get('http://tomtom9693.no-ip.org/pub/'+ $routeParams.param, function(data){
            var pub_name = data.name;
            var pub_slogan = data.category;
            var pub_menu = data.menu;
            var opening_hours = '';
            $.each(data.openings, function(nr, obj){
                opening_hours += obj;
            });
            var pub_city = data.place.town;
            var pub_street = data.place.street;
            var pub_zip_code = data.place.postcode;
            var offer_sky = data.sky;

            if(offer_sky == true){
                $('#sky-indicator').show();
            }else {
                $('#sky-indicator').hide();
            }
            $scope.pub_name = pub_name;
            $scope.pub_slogan = pub_slogan;
            $scope.opening_hours = opening_hours;
            $scope.pub_street = pub_street;
            $scope.pub_zip_code = pub_zip_code;
            $scope.pub_city = pub_city;
            $scope.menu = pub_menu;
            $scope.$apply();
        });

    }]);
