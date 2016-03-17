'use strict';

angular.module('petApp')
  .factory('petFactory', ['$http', function($http) {

    var urlBase = '/api/pets';
    var petFactory = {};

    petFactory.getPets = function() {
      return $http.get(urlBase);
    };

    petFactory.getPet = function(id) {
      return $http.get(urlBase + '/' + id);
    };


    petFactory.insertPet = function (pet) {
      return $http.post(urlBase + '/new', pet);
    };

    petFactory.updatePet = function(pet) {
      return $http.put(urlBase + '/' + pet.ID, pet);
    };

    petFactory.deletePet = function(id) {
      return $http.delete(urlBase + '/' + id);
    };

    return petFactory;

}]);
