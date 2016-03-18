'use strict';

angular.module('petApp')
  .factory('reminderFactory', ['$http', function($http) {

    var urlBase = '/api/reminders';
    var reminderFactory = {};

    reminderFactory.getReminders = function() {
      return $http.get(urlBase);
    };

    reminderFactory.getReminder = function(id) {
      return $http.get(urlBase + '/' + id);
    };


    reminderFactory.insertReminder = function (pet) {
      return $http.post(urlBase + '/new', pet);
    };

    reminderFactory.updateReminder = function(remID) {
      return $http.put(urlBase + '/' + reminder.ID, remID);
    };

    reminderFactory.deleteReminder = function(id) {
      return $http.delete(urlBase + '/' + id);
    };

    return reminderFactory;

}]);
