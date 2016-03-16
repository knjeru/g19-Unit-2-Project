'use strict';

angular.module('petApp')
.controller('loginCtrl', ['$scope', '$http', '$routeParams', function($scope, $http,$routeParams){
    console.log('dannyController sounding off');
     $scope.hello = "Testing";

     $scope.register = function(){
        var data = {
                      firstName: $scope.firstName,
                      lastName: $scope.lastName,
                      email: $scope.registerEmail,
                      password: $scope.registerPassword
                    }
        console.log(data);
        $http.post('/api/auth/register', data)
        .success(function(data) {
            $scope.hello = data;
        });
     };

     $scope.login = function(){
        var data = {
                      email: $scope.loginEmail,
                      password: $scope.loginPassword
                    };
        console.log(data);
        $http.post('/api/auth/login', data)
        .success(function(data) {
            $scope.hello = data;
        });
     };


}]);