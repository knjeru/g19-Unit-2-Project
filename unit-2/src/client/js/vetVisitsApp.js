'use strict';

angular.module('petApp', ['ngRoute', 'door3.css'])
.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: '[view html]',
        css: '[view css stylesheet]',
        controller: 'vetVisitCtrl'
    })
    .when('/:id', {
        templateUrl: '[view html]',
        css: '[view css stylesheet]',
        controller: 'singleVetVisitCtrl'
    })
    .when('/post', {
        templateUrl: '[view html]',
        css: '[view css stylesheet]',
        controller: 'vetVisitCtrl'
    })
    .when('/put', {
        templateUrl: '[view html]',
        css: '[view css stylesheet]',
        controller: 'vetVisitCtrl'
    })
    .when('/delete', {
        templateUrl: '[view html]',
        css: '[view css stylesheet]',
        controller: 'vetVisitCtrl'
    })
})
.controller('vetVisitCtrl', ['$scope', '$http', '$routeParams', function($scope,$http,$routeParams) {
    
    $http.get('/api/vet_visits/:id')
    .success(function(data) {
        // return ALL vet data
        $scope.vetVisits = data;
    });
    
    $http.post('/api/vet_visits/:id/new_visit')
    .success(function(data) {
        // we can set an action to the let the user know the request went through
    });
    
    $http.put('/api/vet_visits/:id/edit')
    .success(function(data) {
        // we can set an action to the let the user know the request went through
    });
    
    $http.delete('/api/vet_visits/:id/delete')
    .success(function(data) {
        // we can set an action to the let the user know the request went through
    });
}])
.controller('singleVetVisitCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('/api/vet_visits/:id/:visitId')
    .success(function(data) {
        // return information for single vet visit
        $scope.vetVisit = data;
    })
}])