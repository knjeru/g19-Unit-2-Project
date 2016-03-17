'use strict';

angular.module('petApp')
.controller('MainVetVisitCtrl', ['$scope', '$http', '$routeParams', '$location', function($scope,$http,$routeParams,$location) {
  console.log('vetVisitController 1 sounding off');

(function(){
    $http.get('/api/vet_visits/'+$routeParams.id)
    .success(function(data) {
        // return ALL vet data
        $scope.vetVisits = data;
    });
})();
    $scope.visitFormData = {};
    $scope.newVisit = function() {
        $http.post('/api/vet_visits/'+$routeParams.id+'/new_visit', $scope.visitFormData)
        .success(function(data) {
            // we can set an action to the let the user know the request went through
            $location.url('/pets/main');
        });
    }
}])
.controller('SingleVetVisitCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('/api/vet_visits/:id/:visitId')
    .success(function(data) {
        // return information for single vet visit
        $scope.vetVisit = data;
    })

    $scope.updateVisit = function() {
        $http.put('/api/vet_visits/'+$routeParams.id+'/edit', $scope.visitFormData)
        .success(function(data) {
            // we can set an action to the let the user know the request went through
        });
    }
    $scope.removeVisit = function() {
        $http.delete('/api/vet_visits/'+$routeParams.id+'/delete')
        .success(function(data) {
            // we can set an action to the let the user know the request went through
        });
    }
}])
