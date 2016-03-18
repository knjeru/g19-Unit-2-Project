'use strict';

angular.module('petApp')
  .factory('reminderFactory', ['$http', function($http) {

    var urlBase = '/api/reminders';
    var reminderFactory = {};

    reminderFactory.getReminders = function(owner_id) {
      return $http.get(urlBase + '/' + owner_id);
    };

    reminderFactory.getReminder = function(id) {
      return $http.get(urlBase + '/' + id);
    };


    reminderFactory.insertReminder = function (pet, owner) {
      console.log(pet);
      return $http.post(urlBase + '/'+ owner + '/new', pet);
    };

    reminderFactory.updateReminder = function(remID) {
      return $http.put(urlBase + '/' + reminder.ID, remID);
    };

    reminderFactory.deleteReminder = function(id) {
      return $http.delete(urlBase + '/' + id);
    };

    return reminderFactory;

}]);
