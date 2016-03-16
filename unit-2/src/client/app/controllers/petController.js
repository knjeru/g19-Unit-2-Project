'use strict';

angular.module('petApp')
.controller('petCtrl', ['$scope', '$http', '$routeParams', function($scope, $http,$routeParams){
    console.log('petController 1 sounding off');
    // first we'll make our get request for when the user hits the getAll route
    console.log('testPet');
    $http.get('/api/pets')
    .success(function(data) {
        // then we'll attach the data to the intended $scope variable we want to use in the view
        $scope.pets = data;
        console.log($scope.pets);
    });
    
    $scope.newPet = function () {
        $http.post('/api/pets/new')
        .success(function(data) {
            // we can set an action to the let the user know the request went through
        });
    }
    
    // $http.put('/api/pets/:id/edit')
    // .success(function(data) {
    //     // we can set an action to the let the user know the request went through
    // });
    
    // $http.delete('/api/pets/:id/delete')
    // .success(function(data) {
    //     // we can set an action to the let the user know the request went through
    // });
}])
.controller('singlePetCtrl', ['$scope', '$http', '$routeParams', function($scope, $http,$routeParams){
    console.log('petController 2 sounding off');
    // console.log($routeParams.id);
    
    $http.get('/api/pets/'+ $routeParams.id)
    .success(function(data) {
        console.log('This should be the id: ', $routeParams.id);
        $scope.pet = data[0];
        console.log('here is my data: ', $scope.pet);
    });
}]);