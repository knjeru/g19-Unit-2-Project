'use strict';

// This is where we'll define our angular module to be used and name our app

/* By "requiring in" ngRoute we're now able to use its methods to handle serving
   ngRoute will handle serving up the views for when a user hits a predefined route */
    

angular.module('petApp', ['ngRoute'])
// next we'll use the config our app with the provider we want to use
    
.config(function($routeProvider) {
    // we can now use $routeProvider to serve up our views
    $routeProvider
    // next we'll define which view will be served to the user when they hit a route
    .when('/', {
        // here we'll link to the location of the view.html on our server
        templateUrl: '../partials/petTest.html',
        // next we'll define the controller we'll be using to the requested data to the user
        controller: 'petCtrl'
    })
    .when('/:id', {
        template: '../partials/pet'
    })
})
// By using the controller we'll handle the logic of the data that is returned by hitting that route
    // we'll need to "require" in the dependencies that we want to use in the controller
        // We'll start by using the $http service to handle requests and $scope to handle the $scope of the controller
.controller('petCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
    // first we'll make our get request for when the user hits the getAll route
    
<<<<<<< HEAD
    // $http.get('/api/pet/:id')
    // .success(function(data) {
    //     $scope.pet = data
    // });
    
=======
    $scope.test = "test"
    // $http.get('/api/pets')
    // .success(function(data) {
    //     // then we'll attach the data to the intended $scope variable we want to use in the view
    //     $scope.pets = data;
    // });
>>>>>>> a23354a3c7b7f4c794b2b01bf8aad27c87cf33cf
    
}]);