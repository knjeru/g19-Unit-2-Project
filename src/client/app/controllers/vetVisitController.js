'use strict';

angular.module('petApp')
.controller('MainVetVisitCtrl', ['$scope', '$http', '$routeParams', '$location', function($scope,$http,$routeParams,$location) {
  console.log('vetVisitController 1 sounding off');

    (function(){
        $http.get('/api/vet_visits/'+$routeParams.pet)
        .success(function(data) {
            // return ALL vet data
            console.log(data);
            $scope.vetVisits = data;
        });
    })();
    $scope.owner = $routeParams.owner;
    $scope.pet = $routeParams.pet;
    $scope.visitFormData = {};
    $scope.newVisit = function() {
        $scope.visitFormData.vet_id = 1;
        $scope.visitFormData.pet_id = $routeParams.pet;
        $http.post('/api/vet_visits/'+$routeParams.pet+'/new_visit', $scope.visitFormData)
        .success(function(data) {
            // we can set an action to the let the user know the request went through
            $location.url('/profile/'+$routeParams.owner+'/pet/'+$routeParams.pet+'/vetvisits');
        });
    };
}])
.controller('SingleVetVisitCtrl', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {
    $scope.owner = $routeParams.owner;
    $http.get('/api/vet_visits/'+$routeParams.pet+'/'+$routeParams.visit)
    .success(function(data) {
        console.log(data);
        // return information for single vet visit
        $scope.vetVisit = data[0];
    });

    $scope.updateVisit = function() {
        console.log("It's running!!!!");
        $http.put('/api/vet_visits/'+$routeParams.visit+'/edit', $scope.visitFormData)
        .success(function(data) {
            // we can set an action to the let the user know the request went through
            $location.url('/profile/'+$routeParams.owner+'/pet/'+$routeParams.pet+'/vetvisits')
        });
    };
    $scope.removeVisit = function() {
        $http.delete('/api/vet_visits/'+$routeParams.id+'/delete')
        .success(function(data) {
            // we can set an action to the let the user know the request went through
        });
    };
}]);
