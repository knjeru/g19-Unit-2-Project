'use strict';

angular.module('petApp')
.controller('MainCtrl', ['$scope', '$http', '$routeParams', '$log',function($scope, $http,$routeParams,$log){

    // $scope.step = 1;

    // $scope.nextQuestion = function () {
    //   $scope.step++;
    // };
    console.log('mainlksjdflkjsdf');
    $http.get('/api/pets')
    .success(function(data) {
        // then we'll attach the data to the intended $scope variable we want to use in the view
        $scope.pets = data;
        // console.log($scope.pets);
    });

    $scope.petFormData = {};
    $scope.newPet = function () {
        // var petObj = $scope.petFormData;
        // petObj.owner_id = ....
        $http.post('/api/pets/new', $scope.petFormData)
        .success(function(data) {
            // we can set an action to the let the user know the request went through
        });
    };

    console.log('petController 2 sounding off');

    $http.get('/api/pets/'+ $routeParams.id)
    .success(function(data) {
        console.log('This should be the id: ', $routeParams.id);
        $scope.pet = data[0];
        console.log('here is my data: ', $scope.pet);
    });

    $scope.updatePet = function() {
        $http.put('/api/pets/'+$routeParams.id+'/edit', $scope.petFormData)
        .success(function(data) {
            // we can set an action to the let the user know the request went through
        });
    }

    $scope.removePet = function() {
        $http.delete('/api/pets/'+$routeParams.id+'/delete')
        .success(function(data) {
            // we can set an action to the let the user know the request went through
        });
    }

    // $http.get('/api/profile'+$routeParams.id)
    // .success(function(data) {
    //     console.log('This should be the id: ', $routeParams.id)
    //     $scope.user = data[0];
    //     console.log('here is my data: ', $scope.user);
    // })

    $scope.userFormData = {};
    $scope.newUser = function() {
        $http.post('/api/profile/new', $scope.userFormData)
        .success(function(data) {
            console.log('This user has been added');
        });
    }

    $scope.updateUser = function() {
        $http.put('/api/profile/'+$routeParams.id+'/edit', $scope.userFormData)
        .success(function(data) {
            console.log('This user has been updated');
        });
    }

    $scope.removeUser = function() {
        $http.delete('/api/profile/'+$routeParams.id+'/delete')
        .success(function(data) {
            console.log('This user has been removed');
        });
    }

    $http.get('/api/vets')
    .success(function(data) {
        // return ALL vet data
        $scope.vets = data;
    });

    $scope.vetFormData = {};
    $scope.newVet = function() {
        $http.post('/api/vets/new', $scope.vetFormData)
        .success(function(data) {
            // we can set an action to the let the user know the request went through
        });
    }

    // $http.get('/api/vets/'+ $routeParams.id)
    // .success(function(data) {
    //     // return information for single vet
    //     $scope.vet = data;
    // });

    $scope.updateVet = function() {
        $http.put('/api/vets/'+$routeParams.id+'/edit')
        .success(function(data) {
            // we can set an action to the let the user know the request went through
        });
    }
    $scope.removeVet = function() {
        $http.delete('/api/vets/'+$routeParams.id+'/delete')
        .success(function(data) {
            // we can set an action to the let the user know the request went through
        });
    }

     $scope.register = function(){
        var data = {
                      firstName: $scope.firstName,
                      lastName: $scope.lastName,
                      email: $scope.registerEmail,
                      password: $scope.registerPassword
                    }
        console.log(data);
        $http.post('/api/auth/register', data)
        .success(function(data) {
            $scope.hello = data;
        });
     };

     $scope.login = function(){
        var data = {
                      email: $scope.loginEmail,
                      password: $scope.loginPassword
                    };
        // console.log(data);
        $http.post('/api/auth/login', data)
        .success(function(data) {
            $scope.hello = data;
            // $log.info($scope.hello);
        });
     };

     $scope.logout = function(){
         $log.info('you are logged out');
         $http.get('/api/auth/logout')
         .success(function(data) {
             $log.info('you are logged out2')
         });
     };

  }])
