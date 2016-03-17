'use strict';

angular.module('petApp')
  .factory('vetVisitFactory', ['$http', function($http) {

    var urlBase = '/api/profile/';
    var petFactory = {};

    vetVisitFactory.getVisits = function() {
      return $http.get(urlBase);
    };

    vetVisitFactory.getVisit = function(id) {
      return $http.get(urlBase + '/' + id);
    };


    vetVisitFactory.insertVisit = function (user) {
      return $http.post(urlBase + '/new', user);
    };

    vetVisitFactory.updateVisit = function(user) {
      return $http.put(urlBase + '/' + user.ID, user);
    };

    vetVisitFactory.deleteVisit = function(user) {
      return $http.delete(urlBase + '/' + id);
    };

    return vetVisitFactory;

}]);
