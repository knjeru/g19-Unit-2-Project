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
    .when('/pets', {
        // here we'll link to the location of the view.html on our server
        templateUrl: '../partials/petTest.html',
        // inject specific style sheets for each view
        css: '../styles/css/main.css',
        // next we'll define the controller we'll be using to the requested data to the user
        controller: 'petCtrl'
    })
    .when('/pet2', {
        templateURL: '../partials/petTest.html',

        controller: 'singlePetCtrl'
    })
    .when('/post', {
        templateUrl: '[view html]',
        css: '[view css stylesheet]',
        controller: 'petCtrl'
    })
    .when('/put', {
        templateUrl: '[view html]',
        css: '[view css stylesheet]',
        controller: 'petCtrl'
    })
    .when('/delete', {
        templateUrl: '[view html]',
        css: '[view css stylesheet]',
        controller: 'petCtrl'
    });
})
// By using the controller we'll handle the logic of the data that is returned by hitting that route
    // we'll need to "require" in the dependencies that we want to use in the controller
        // We'll start by using the $http service to handle requests and $scope to handle the $scope of the controller
.controller('petCtrl', ['$scope', '$http', '$routeParams', function($scope, $http,$routeParams){
    // first we'll make our get request for when the user hits the getAll route
    $http.get('/api/pets')
    .success(function(data) {
        // then we'll attach the data to the intended $scope variable we want to use in the view
        $scope.pets = data;
        console.log($scope.pets);
    });
    
    $http.post('/api/pets/new')
    .success(function(data) {
        // we can set an action to the let the user know the request went through
    });
    
    $http.put('/api/pets/:id/edit')
    .success(function(data) {
        // we can set an action to the let the user know the request went through
    });
    
    $http.delete('/api/pets/:id/delete')
    .success(function(data) {
        // we can set an action to the let the user know the request went through
    });
}])
.controller('singlePetCtrl', ['$scope', '$http', '$routeParams', function($scope, $http,$routeParams){
    console.log('outside of the get');
    // $http.get('/api/pets/:id')
    // .success(function(data) {
    //     console.log('This should be the id: ', $routeParams.id);
    //     // $scope.pet = data;
    //     // console.log($scope.pet)
    // });
}]);