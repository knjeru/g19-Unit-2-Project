'use strict';

angular.module('petApp')
.controller('UsrProfCtrl', ['$scope', '$http', '$routeParams', '$location', '$cookies', function($scope,$http,$routeParams,$location,$cookies) {
    console.log('userController 1 sounding off');

(function() {
    $http.get('/api/profile/'+parseInt($cookies.get('id')))
    .success(function(data) {
        $scope.user = data[0];
    });
  })();

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
           $location.url('/pets/main')
       });
    };

    $scope.updateUser = function() {
        $http.put('/api/profile/'+$routeParams.id+'/edit', $scope.userFormData)
        .success(function(data) {
            $location.url('/profile/'+$cookies.get('id'))
        });
    }

    $scope.removeUser = function() {
        $http.delete('/api/profile/'+$routeParams.id+'/delete')
        .success(function(data) {
            console.log('This user has been removed');
        });
    }
}])
.controller('MainUsrProfCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams,$log) {
  console.log('main user controller')

    $http.get('/api/profile')
    .success(function(data) {
        $scope.users = data[0];
    })
}]);
