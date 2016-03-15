'use strict';

angular.module('petApp', ['ngRoute', 'door3.css'])
.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: '[view html]',
        css: '[view css stylesheet]',
        controller: '[view controller]'
    })
    .when('/:id', {
        templateUrl: '[view html]',
        css: '[view css stylesheet]',
        controller: '[view controller]'
    })
    .when('/post', {
        templateUrl: '[view html]',
        css: '[view css stylesheet]',
        controller: '[view controller]'
    })
    .when('/put', {
        templateUrl: '[view html]',
        css: '[view css stylesheet]',
        controller: '[view controller]'
    })
    .when('/delete', {
        templateUrl: '[view html]',
        css: '[view css stylesheet]',
        controller: '[view controller]'
    })
})
.controller('vetCtrl', ['$scope', '$http', function($scope,$http) {
    $http.get('/api/vets')
    .success(function(data) {
        // return ALL vet data
        $scope.vets = data;
    })
    $http.post('/api/vets/new')
    .success(function(data) {
        // we can set an action to the let the user know the request went through
    })
    $http.put('/api/:id/edit')
    .success(function(data) {
        // we can set an action to the let the user know the request went through
    })
    $http.delete('/api/:id')
    .success(function(data) {
        // we can set an action to the let the user know the request went through
    })
}])
.controller('singleVetCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('/api/vet')
    .success(function(data) {
        // return information for single vet
        $scope.vet = data;
    })
}])