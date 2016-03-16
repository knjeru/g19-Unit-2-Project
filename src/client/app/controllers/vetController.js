'use strict';

angular.module('petApp')
.controller('MainVetCtrl', ['$scope', '$http', '$routeParams', function($scope,$http,$routeParams) {
    console.log('vetController 1 sounding off');
    
    $http.get('/api/vets')
    .success(function(data) {
        // return ALL vet data
        $scope.vets = data;
    });
    
    $scope.vetFormData = {};
    $scope.newVet = function() {    
        $http.post('/api/vets/new', $scope.vetFormData)
        .success(function(data) {
            // we can set an action to the let the user know the request went through
        });
    }
}])
.controller('SingleVetCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('/api/vets/'+ $routeParams.id)
    .success(function(data) {
        // return information for single vet
        $scope.vet = data;
    });
    
    $scope.updateVet = function() {
        $http.put('/api/vets/'+$routeParams.id+'/edit')
        .success(function(data) {
            // we can set an action to the let the user know the request went through
        });
    }
    $scope.removeVet = function() {
        $http.delete('/api/vets/'+$routeParams.id+'/delete')
        .success(function(data) {
            // we can set an action to the let the user know the request went through
        });
    }
}])