'use strict';

angular.module('petApp')
.controller('genPetCtrl', ['$scope', '$http', '$routeParams', function($scope, $http,$routeParams){
    console.log('petController 1 sounding off');
    
    $http.get('/api/pets')
    .success(function(data) {
        // then we'll attach the data to the intended $scope variable we want to use in the view
        $scope.pets = data;
        // console.log($scope.pets);
    });
    
    $scope.petFormData = {};
    $scope.newPet = function () {
        $http.post('/api/pets/new', $scope.petFormData)
        .success(function(data) {
            // we can set an action to the let the user know the request went through
        });
    }
}])
.controller('SinglePetCtrl', ['$scope', '$http', '$routeParams', function($scope, $http,$routeParams){
    console.log('petController 2 sounding off');
    
    $http.get('/api/pets/'+ $routeParams.id)
    .success(function(data) {
        console.log('This should be the id: ', $routeParams.id);
        $scope.pet = data[0];
        console.log('here is my data: ', $scope.pet);
    });
    
    $scope.updatePet = function() {
        $http.put('/api/pets/'+$routeParams.id+'/edit', $scope.petFormData)
        .success(function(data) {
            // we can set an action to the let the user know the request went through
        });
    }
    
    $scope.removePet = function() {
        $http.delete('/api/pets/'+$routeParams.id+'/delete')
        .success(function(data) {
            // we can set an action to the let the user know the request went through
        });
    }
}]);