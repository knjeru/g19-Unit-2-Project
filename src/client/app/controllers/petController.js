'use strict';

angular.module('petApp')
  .controller('GenPetCtrl', ['$scope', '$routeParams', '$location', 'petFactory', function($scope, $routeParams, $location, petFactory){
    console.log('petController 1 sounding off');

  $scope.status;
  $scope.pets;
  $scope.quantity = 3;

  getPets();

  function getPets() {
    petFactory.getPets()
      .success(function (data) {
        $scope.pets = data;
        console.log($scope.pets);
      })
      .error(function(error) {
        $scope.status = 'Unable to load pet data: ' + error.message;
      });
  }

      $scope.petFormData = {};
      $scope.newPet = function () {
          petFactory.insertPet($scope.petFormData)
            .success(function(data) {
              $location.url('/pets/main');
            }).error(function(error) {
              $scope.status = 'Unable to add pet data: ' + error.message;
            });
          };

      // $scope.step = function() {
      //     return 1;
      // };
      //
      // $scope.nextQuestion = function () {
      //   $scope.step++;
      // };
  }])
  .controller('SinglePetCtrl', ['$scope', '$routeParams', 'petFactory', function($scope, $routeParams, petFactory){
      console.log('petController 2 sounding off');

      $scope.id = $routeParams.id;

      getPet();

      function getPet() {
        console.log('inside get pet');
        petFactory.getPet($scope.id)
          .success(function(data) {
            $scope.pet = data[0]
          }).error(function(error) {
            $scope.status = 'Unable to load pet data: ' + error.message;
          });
      };

      function createPet() {
        petFactory.insertPet() {
          .success(function(data) {

          }).error(function(data) {

          })

        }
      }

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
  }]);
