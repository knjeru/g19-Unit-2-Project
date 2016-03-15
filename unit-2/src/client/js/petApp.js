'use strict';

// This is where we'll define our angular module to be used and name our app

/* By "requiring in" ngRoute we're now able to use its methods to handle serving
   ngRoute will handle serving up the views for when a user hits a predefined route */
    

angular.module('petApp', ['ngRoute', 'door3.css'])
// next we'll use the config our app with the provider we want to use
    
.config(function($routeProvider) {
    // we can now use $routeProvider to serve up our views
    $routeProvider
    // next we'll define which view will be served to the user when they hit a route
    .when('/', {
        // here we'll link to the location of the view.html on our server
        templateUrl: '../partials/petTest.html',
        // inject specific style sheets for each view
        css: '../styles/css/main.css',
        // next we'll define the controller we'll be using to the requested data to the user
        controller: 'petCtrl'
    })
    .when('/:id', {
        templateURL: '../partials/pet',
        controller: 'singlePetCtrl'
    })
})
// By using the controller we'll handle the logic of the data that is returned by hitting that route
    // we'll need to "require" in the dependencies that we want to use in the controller
        // We'll start by using the $http service to handle requests and $scope to handle the $scope of the controller
.controller('petCtrl', ['$scope', '$http', function($scope, $http){
    // first we'll make our get request for when the user hits the getAll route
      
    $http.get('/api/pets')
    .success(function(data) {
        // then we'll attach the data to the intended $scope variable we want to use in the view
        $scope.pets = data;
    });
    
}])
.controller('singlePetCtrl', ['$scope','$http','$routeParams',function($scope, $http, $routeParams){
    $http.get('/api/pets/:id')
    .success(function(data) {
        $scope.pet = data;
    });
}])