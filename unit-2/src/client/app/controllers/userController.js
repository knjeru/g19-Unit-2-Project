'use strict';

angular.module('petApp')
.controller('userProfCtrl', ['$scope', '$http', '$routeParams', '$log', function($scope,$http,$routeParams,$log) {
        console.log('userController 1 sounding off');
    console.log('testy');
    $log.info('test');
    console.log($routeParams.id);
    
    $http.get('/api/profile/'+$routeParams.id)
    .success(function(data) {
        $scope.profile = data[0];
        console.log($scope.profile);
    })
    
    // $http.post('/api/profile/new')
    // .success(function(data) {

    // })
    
    // $http.put('/api/profile/:id/edit')
    // .success(function(data) {

    // })
    
    // $http.delete('/api/profile/:id/delete')
    // .success(function(data) {

    // })
}])
.controller('singleProfCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('/api/:id')
    .success(function(data) {

        $scope.profile = data;
    })
}]);