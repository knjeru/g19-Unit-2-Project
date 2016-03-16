'use strict';

console.log('Angular Main Ready To Go!')

/* The main app with route configurations */

angular.module('petApp', ['ngRoute', 'door3.css'])
.config(function($routeProvider){
    console.log('Angular Config Ready To Go!');
    $routeProvider
    /* THESE ARE THE USER RELATED ROUTES */ 
    // .when('/profile/new', {
    //     templateUrl: '[view html]',
    //     css: '[view css stylesheet]',
    //     controller: 'usrProfCtrl'
    // })
    .when('/profile/:id', {
        templateUrl: '/app/views/petTest.html',
        css: '/styles/css/main.css',
        controller: 'usrProfCtrl'
    })
    // .when('/profile/:id/edit', {
    //     templateUrl: '[view html]',
    //     css: '[view css stylesheet]',
    //     controller: 'usrProfCtrl'
    // })
    // .when('/profile/:id/delete', {
    //     templateUrl: '[view html]',
    //     css: '[view css stylesheet]',
    //     controller: 'usrProfCtrl'
    // })
    /* THESE ARE THE PET RELATED ROUTES */ 
    .when('/pets/new', {
        templateUrl: '/app/views/initial_questionaire.html',
        css: '/styles/css/main.css',
        controller: 'genPetCtrl'
    })
    .when('/pets/main', {
        templateUrl: '/app/views/singlePet.html',
        css: '/styles/css/main.css',
        controller: 'genPetCtrl'
    })
    .when('/pet/:id', {
        templateUrl: '/app/views/petTest.html',
        controller: 'singlePetCtrl'
    })
    .when('/pet/:id/edit', {
        templateUrl: '/app/views/putTestForm.html',
        css: '/styles/css/main.css',
        controller: 'singlePetCtrl'
    })
    .when('/pet/:id/delete', {
        templateUrl: '/app/views/petTest.html',
        css: '../styles/css/main.css',
        controller: 'singlePetCtrl'
    })
    /* THESE ARE THE VETERINARIAN RELATED ROUTES */
    .when('/vets', {
        templateUrl: '/app/views/petTest.html',
        css: '/styles/css/main.css',
        controller: 'genVetCtrl'
    })
    // .when('/vet/:id', {
    //     templateUrl: '[view html]',
    //     css: '[view css stylesheet]',
    //     controller: 'singleVetCtrl'
    // })
    // .when('/vet/new', {
    //     templateUrl: '[view html]',
    //     css: '[view css stylesheet]',
    //     controller: 'singleVetCtrl'
    // })
    // .when('/', {
    //     templateUrl: '[view html]',
    //     css: '[view css stylesheet]',
    //     controller: 'singleVetCtrl'
    // })
    // .when('/delete', {
    //     templateUrl: '[view html]',
    //     css: '[view css stylesheet]',
    //     controller: 'singleVetCtrl'
    // })
    /* THESE ARE THE VET VISIT ROUTES */
    // .when('/vetvisit/new', {
    //     templateUrl: '/app/views/petTest.html',
    //     css: '/styles/css/main.css',
    //     controller: 'genVetVisitCtrl'
    // })
    .when('/vetvisits', {
        templateUrl: '/app/views/petTest.html',
        css: '/styles/css/main.css',
        controller: 'genVetVisitCtrl'
    })
    // .when('/vetvisit/:id', {
    //     templateUrl: '[view html]',
    //     css: '[view css stylesheet]',
    //     controller: 'singleVetVisitCtrl'
    // })
    // .when('/vetvisit/:id/edit', {
    //     templateUrl: '[view html]',
    //     css: '[view css stylesheet]',
    //     controller: 'singleVetVisitCtrl'
    // })
    // .when('/vetvisit/:id/delete', {
    //     templateUrl: '[view html]',
    //     css: '[view css stylesheet]',
    //     controller: 'singleVetVisitCtrl'
    // })
    /* DANNY LOGIN TEST AREA */
    .when('/dannytest', {
        templateUrl: '/app/views/dannyTest.html',
        controller: 'loginCtrl'
    });
})