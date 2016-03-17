angular.module('petApp')
  .factories('loginFactory', ['$http', function($http) {
    var urlBase = '/api/auth/'

    loginFactory.logUser = function() {
      return http.get(urlBase + '/login', data)
    }

    return loginFactory;
  }]);
