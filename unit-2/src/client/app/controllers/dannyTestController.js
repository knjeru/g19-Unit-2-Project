

'use strict';

angular.module('petApp')
.controller('LoginCtrl', ['$scope', '$http', '$routeParams', function($scope, $http,$routeParams){
    console.log('dannyController sounding off');
     $scope.hello = "Testing";

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
        console.log(data);
        $http.post('/api/auth/login', data)
        .success(function(data) {
            $scope.hello = data;
        });
     };

     $scope.fileNameChanged = function(ele){
       var files = ele.files;
       var namesArr = [];
       for (var i in files){
         namesArr.push(files[i].name);
       }
       console.log(namesArr);
       var file = files[0];
       if(file == null){
            alert("No file selected.");
        }
        else{
            get_signed_request(file);
        }
      };

     $scope.initiateUpload = function(){
        console.log($scope.file_input.files);
        var files = $scope.file_input.files;
        var file = files[0];
        if(file == null){
            alert("No file selected.");
        }
        else{
            get_signed_request(file);
        }
     };

    function get_signed_request(file){
        $http.get('/img/sign_s3?file_name='+file.name+"&file_type="+file.type)
          .success(function(data){
            upload_file(file, data.signed_request, data.url);
          })
          .error(function(err){
            console.log(err);
          });
    }

    function upload_file(file, signed_request, url){
        // $http.put(signed_request)
        console.log(signed_request);
        var req = {
         method: 'PUT',
         url: signed_request,
         headers: {
           'x-amz-acl': 'public-read'
         }
        };
        $http(req)
          .success(function(data){
            console.log(data);
          })
          .error(function(err){
            console.log(err);
          });
    }
}]);
