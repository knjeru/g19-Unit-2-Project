'use strict';

angular.module('petApp', ['ngRoute', 'door3.css'])
.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: '[view html]',
        css: '[view css stylesheet]',
        controller: 'vetCtrl'
    })
    .when('/:id', {
        templateUrl: '[view html]',
        css: '[view css stylesheet]',
        controller: 'singleVetCtrl'
    })
    .when('/post', {
        templateUrl: '[view html]',
        css: '[view css stylesheet]',
        controller: 'vetCtrl'
    })
    .when('/put', {
        templateUrl: '[view html]',
        css: '[view css stylesheet]',
        controller: 'vetCtrl'
    })
    .when('/delete', {
        templateUrl: '[view html]',
        css: '[view css stylesheet]',
        controller: 'vetCtrl'
    })
})
.controller('vetCtrl', ['$scope', '$http', '$routeParams', function($scope,$http,$routeParams) {
    $http.get('/api/vets')
    .success(function(data) {
        // return ALL vet data
        $scope.vets = data;
    });
    
    $http.post('/api/vets/new')
    .success(function(data) {
        // we can set an action to the let the user know the request went through
    });
    
    $http.put('/api/vets/:id/edit')
    .success(function(data) {
        // we can set an action to the let the user know the request went through
    });
    
    $http.delete('/api/vets/:id/delete')
    .success(function(data) {
        // we can set an action to the let the user know the request went through
    });
}])
.controller('singleVetCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('/api/vets/:id')
    .success(function(data) {
        // return information for single vet
        $scope.vet = data;
    })
}])