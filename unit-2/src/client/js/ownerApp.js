'use strict';

angular.module('petApp', ['ngRoute', 'door3.css'])
.config(function($routeProvider) {
    $routeProvider
    .when('/profile', {
        templateUrl: '../partials/single_user.html',
        controller: 'profCtrl'
    })
    .when('/:id', {
        templateUrl: '[view html]',
        // css: '[view css stylesheet]',
        controller: 'profCtrl'
    })
    .when('/post', {
        templateUrl: '[view html]',
        css: '[view css stylesheet]',
        controller: 'profCtrl'
    })
    .when('/put', {
        templateUrl: '[view html]',
        css: '[view css stylesheet]',
        controller: 'profCtrl'
    })
    .when('/delete', {
        templateUrl: '[view html]',
        css: '[view css stylesheet]',
        controller: 'profCtrl'
    })
})
.controller('profCtrl', ['$scope', '$http', '$routeParams', function($scope,$http,$routeParams) {
    $http.get('/api/profile')
    .success(function(data) {
        // return ALL vet data
        $scope.profile = data;
    })
    $http.post('/api/profile/new')
    .success(function(data) {
        // we can set an action to the let the user know the request went through
    })
    $http.put('/api/profile/:id/edit')
    .success(function(data) {
        // we can set an action to the let the user know the request went through
    })
    $http.delete('/api/profile/:id/delete')
    .success(function(data) {
        // we can set an action to the let the user know the request went through
    })
}])
.controller('singleProfCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('/api/:id')
    .success(function(data) {
        // return information for single queried profile
        $scope.profile = data;
    })
}])