'use strict';

angular.module('petApp')
.controller('LoginCtrl', ['$scope', '$http', '$routeParams', '$log','$location', '$cookies', function($scope, $http,$routeParams,$log,$location, $cookies){
    console.log('LoginController sounding off');

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
            $scope.id = data;
            $location.url('/profile/'+$scope.hello+'/pets/new')
        });
     };

     $scope.login = function(){
        var data = {
                      email: $scope.loginEmail,
                      password: $scope.loginPassword
                    };
        $http.post('/api/auth/login', data)
        .success(function(data) {
            $scope.id = data;
            $cookies.put('id', $scope.id);
            $location.url('/profile/'+$scope.id+'/pets/main')
        });
     };

     $scope.logout = function(){
         $log.info('you are logged out');
         $http.get('/api/auth/logout')
         .success(function(data) {
             $log.info('you are logged out2');
             $location.url('/');
             $cookies.remove('id');
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

  $scope.userExist = parseInt($cookies.get('id'));
}]);

// (function() {
//     document.getElementById("file_input").onchange = function(){
//         var files = document.getElementById("file_input").files;
//         var file = files[0];
//         if(file == null){
//             alert("No file selected.");
//         }
//         else{
//             get_signed_request(file);
//         }
//     };
// })();
//
// function get_signed_request(file){
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", "/sign_s3?file_name="+file.name+"&file_type="+file.type);
//     xhr.onreadystatechange = function(){
//         if(xhr.readyState === 4){
//             if(xhr.status === 200){
//                 var response = JSON.parse(xhr.responseText);
//                 upload_file(file, response.signed_request, response.url);
//             }
//             else{
//                 alert("Could not get signed URL.");
//             }
//         }
//     };
//     xhr.send();
// }
//
// function upload_file(file, signed_request, url){
//     var xhr = new XMLHttpRequest();
//     xhr.open("PUT", signed_request);
//     xhr.setRequestHeader('x-amz-acl', 'public-read');
//     xhr.onload = function() {
//         if (xhr.status === 200) {
//             document.getElementById("preview").src = url;
//             document.getElementById("avatar_url").value = url;
//         }
//     };
//     xhr.onerror = function() {
//         alert("Could not upload file.");
//     };
//     xhr.send(file);
// }

//      $scope.initiateUpload = function(){
//         console.log($scope.file_input.files);
//         var files = $scope.file_input.files;
//         var file = files[0];
//         if(file == null){
//             alert("No file selected.");
//         }
//         else{
//             get_signed_request(file);
//         }
//      };
//
//     function get_signed_request(file){
//         $http.get('/img/sign_s3?file_name='+file.name+"&file_type="+file.type)
//           .success(function(data){
//             upload_file(file, data.signed_request, data.url);
//           })
//           .error(function(err){
//             console.log(err);
//           });
//     }
//
//     function upload_file(file, signed_request, url){
//         // $http.put(signed_request)
//         console.log(signed_request);
//         var req = {
//          method: 'PUT',
//          url: signed_request,
//          headers: {
//            'x-amz-acl': 'public-read'
//          }
//         };
//         $http(req)
//           .success(function(data){
//             console.log(data);
//           })
//           .error(function(err){
//             console.log(err);
//           });
//     }
//
//
// }]);
