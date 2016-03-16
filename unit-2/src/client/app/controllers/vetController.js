'use strict';

angular.module('petApp')
.controller('vetCtrl', ['$scope', '$http', '$routeParams', function($scope,$http,$routeParams) {
    console.log('vetController 1 sounding off');
    $http.get('/api/vets')
    .success(function(data) {
        // return ALL vet data
        $scope.vets = data;
    });
    
    // $http.post('/api/vets/new')
    // .success(function(data) {
    //     // we can set an action to the let the user know the request went through
    // });
    
    // $http.put('/api/vets/:id/edit')
    // .success(function(data) {
    //     // we can set an action to the let the user know the request went through
    // });
    
    // $http.delete('/api/vets/:id/delete')
    // .success(function(data) {
    //     // we can set an action to the let the user know the request went through
    // });
}])
.controller('singleVetCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('/api/vets/:id')
    .success(function(data) {
        // return information for single vet
        $scope.vet = data;
    })
}])