'use strict';

angular.module('petApp')
.controller('LoginCtrl', ['$scope', '$http', '$routeParams', '$log','$location', function($scope, $http,$routeParams,$log,$location){
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
            $scope.hello = data;
            $location.url('/pets/new')
        });
     };

     $scope.login = function(){
        var data = {
                      email: $scope.loginEmail,
                      password: $scope.loginPassword
                    };
        // console.log(data);
        $http.post('/api/auth/login', data)
        .success(function(data) {
            $scope.hello = data;
            $log.info($scope.hello);
            $location.url('/pets/main')
        });
     };

     $scope.logout = function(){
         $log.info('you are logged out');
         $http.get('/api/auth/logout')
         .success(function(data) {
             $log.info('you are logged out2');
             $location.url('/');
         });
     };


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
