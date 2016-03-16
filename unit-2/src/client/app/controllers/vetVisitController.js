'use strict';

angular.module('petApp')
.controller('vetVisitCtrl', ['$scope', '$http', '$routeParams', function($scope,$http,$routeParams) {
    console.log('vetVisitController 1 sounding off');
    
    $http.get('/api/vet_visits/:id')
    .success(function(data) {
        // return ALL vet data
        $scope.vetVisits = data;
    });
    
    // $http.post('/api/vet_visits/:id/new_visit')
    // .success(function(data) {
    //     // we can set an action to the let the user know the request went through
    // });
    
    // $http.put('/api/vet_visits/:id/edit')
    // .success(function(data) {
    //     // we can set an action to the let the user know the request went through
    // });
    
    // $http.delete('/api/vet_visits/:id/delete')
    // .success(function(data) {
    //     // we can set an action to the let the user know the request went through
    // });
}])
.controller('singleVetVisitCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('/api/vet_visits/:id/:visitId')
    .success(function(data) {
        // return information for single vet visit
        $scope.vetVisit = data;
    })
}])