'use strict';

angular.module('petApp')
  .controller('MainReminderCtrl' , ['$scope', '$routeParams', '$location',
  'reminderFactory', 'userFactory', 'petFactory', '$cookies', function($scope, $routeParams, $location,
    reminderFactory, userFactory, petFactory, $cookies){

    getReminders($routeParams.owner);
    getUser($routeParams.owner);
    getPets();

    function getReminders(owner) {
      reminderFactory.getReminders(owner)
        .success(function(data) {
          console.log(data);
          $scope.reminders = data;
        })
        .error(function(error) {
          $scope.status = 'Unable to load the reminder data: ' + error.message;
        });
      }

    function getUser(owner){
      userFactory.getUser(owner)
        .success(function(data){
          console.log(data);
          $scope.owner = data[0];
        })
        .error(function(error){
          $scope.status = 'Unable to load the owner data: ' + error.message;
        });
      }

    function getPets(){
      petFactory.getPets()
        .success(function(data){
          console.log('Pets ', data);
          $scope.pets = data;
        })
        .error(function(error){
          $scope.status = 'Unable to load the pet data: ' + error.message;
        });
    }



    $scope.reminderFormData = {};
    $scope.newReminder = function() {
      $scope.reminderFormData.owner_id = parseInt($cookies.get('id'));
      $scope.reminderFormData.pet_id = $scope.reminderFormData.pet_id.id;
      reminderFactory.insertReminder($scope.reminderFormData, $routeParams.owner)
        .success(function(data) {
          $location.url('/profile/'+parseInt($cookies.get('id'))+'/reminders')
        })
        .error(function(error) {
          $scope.status = 'Unable to add reminder data: ' + error.message;
        });
    };

  }])
  .controller('SingleReminderCtrl', ['$scope', '$routeParams','petFactory',
  '$cookies', '$location', '$http', function($scope, $routeParams, petFactory,
    $cookies, $location, $http) {

      getReminder();

      function getReminder() {
        reminderFactory.getReminder($routeParams.id)
        .success(function(data) {
          $scope.reminder = data[0]
        })
        .error(function(error) {
          $scope.status = 'Unable to load the reminder data: ' + error.message;
        });
      };

      $scope.reminderFormData = {}
      $scope.updateReminder = function() {
        $http.put('/api/reminders/'+$routeParams.id+'/edit', $scope.reminderFormData)
          .success(function(data) {
            $location.url('/profile/'+$cookies.get('id')+'/pet/'+$routeParams.id)
          })
          .error(function(data) {
            $scope.status = 'Unable to update the reminder data: ' + error.message;
          });
      }

  }]);
