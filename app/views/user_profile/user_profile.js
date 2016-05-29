/**
 * Created by albrechn on 13.05.2016.
 */

'use strict';

angular.module('pub.user_profil', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/user/', {
            templateUrl : 'views/user_profile/user_list.html',
            controller  : 'userController'
        }).when('/user/:id', {
            templateUrl : 'views/user_profile/user_profile.html',
            controller  : 'userDetailController'
        });
    }])

    .controller('userController', ['$scope', function($scope){

            $.get('http://tomtom9693.no-ip.org/user/', function(data){
            var code = '';
            $.each(data, function (nr, obj) {
                code += '<tr class="click-row" data-id="'+obj._id+'"><td>'+obj.name+'</td><td>'+obj.gender+'</td><td>'+obj.hometown+'</td></tr>';
            });
            $('#user-list').html(code);
            $('.click-row').click(function (e) {
                e.preventDefault();
                var data_id = $(this).attr('data-id');
                location.href = '#/user/'+data_id;
            })
        });
    }])

    .controller('userDetailController', ['$scope', '$routeParams', function($scope, $routeParams) {
        $.get('http://tomtom9693.no-ip.org/user/'+ $routeParams.id, function(data){
            var user_name = data.name;
            var user_birthday = new Date(data.birthday);
            var user_gender = data.gender;
            var user_hometown = data.hometown;
            var user_pic = data.picture;
            var user_interests = data.interests;

            $scope.user_name = user_name;
            $scope.user_birthday = user_birthday.getDate() + "." + user_birthday.getMonth() + "." + user_birthday.getFullYear();
            $scope.user_gender = user_gender.toUpperCase();
            $scope.user_hometown = user_hometown;
            $scope.user_pic = user_pic;
            $scope.user_interests = user_interests;
            $scope.$apply();
        });

    }]);