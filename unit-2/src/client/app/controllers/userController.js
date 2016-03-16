'use strict';

angular.module('petApp')
.controller('UsrProfCtrl', ['$scope', '$http', '$routeParams', '$log', function($scope,$http,$routeParams,$log) {
    console.log('userController 1 sounding off');
    
    $http.get('/api/profile'+$routeParams.id)
    .success(function(data) {
        console.log('This should be the id: ', $routeParams.id)
        $scope.user = data[0];
        console.log('here is my data: ', $scope.user);
    })
    
    $scope.userFormData = {};
    $scope.newUser = function() {
        $http.post('/api/profile/new', $scope.userFormData)
        .success(function(data) {
            console.log('This user has been added');
        });
    }
    
    $scope.updateUser = function() {
        $http.put('/api/profile/'+$routeParams.id+'/edit', $scope.userFormData)
        .success(function(data) {
            console.log('This user has been updated');
        });
    }
    
    $scope.removeUser = function() {
        $http.delete('/api/profile/'+$routeParams.id+'/delete')
        .success(function(data) {
            console.log('This user has been removed');
        });
    }
}])
.controller('MainUsrProfCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('/api/profile')
    .success(function(data) {
        $scope.users = data;
        console.log('here is my data: ', $scope.users);
    })
}]);