'use strict';

angular.module('petApp')
  .factory('userFactory', ['$http', function($http) {

    var urlBase = '/api/profile/';
    var userFactory = {};

    userFactory.getUsers = function() {
      return $http.get(urlBase);
    };

    userFactory.getUser = function(id) {
      return $http.get(urlBase + '/' + id);
    };


    userFactory.insertUser = function (user) {
      return $http.post(urlBase + '/new', user);
    };

    userFactory.updateUser = function(user) {
      return $http.put(urlBase + '/' + user.ID, user);
    };

    userFactory.deleteUser = function(user) {
      return $http.delete(urlBase + '/' + id);
    };

    return userFactory;

}]);
