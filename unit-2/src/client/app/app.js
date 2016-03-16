'use strict';

console.log('Angular Main Ready To Go!')

/* The main app with route configurations */

angular.module('petApp', ['ngRoute', 'door3.css'])
.config(function($routeProvider){
    console.log('Angular Config Ready To Go!');
    $routeProvider
    /* THESE ARE THE USER RELATED ROUTES */ 
    .when('/profile/:id', {
        templateUrl: '/app/views/petTest.html',
        css: '../../styles/css/main.css',
        controller: 'userProfCtrl'
    })
    // .when('/:id', {
    //     templateUrl: '',
    //     css: '../../styles/css/main.css',
    //     controller: 'userProfCtrl'
    // })
    // .when('/post', {
    //     templateUrl: '[view html]',
    //     css: '[view css stylesheet]',
    //     controller: 'userProfCtrl'
    // })
    // .when('/put', {
    //     templateUrl: '[view html]',
    //     css: '[view css stylesheet]',
    //     controller: 'userProfCtrl'
    // })
    // .when('/delete', {
    //     templateUrl: '[view html]',
    //     css: '[view css stylesheet]',
    //     controller: 'userProfCtrl'
    // })
    /* THESE ARE THE PET RELATED ROUTES */ 
    .when('/pets', {
        templateUrl: '/app/views/singlePet.html',
        css: '../styles/css/main.css',
        controller: 'petCtrl'
    })
    .when('/pets/:id', {
        templateUrl: '/app/views/petTest.html',
        controller: 'singlePetCtrl'
    })
    .when('/pets/new', {
        templateUrl: '[view html]',
        css: '[view css stylesheet]',
        controller: 'petCtrl'
    })
    // .when('/put', {
    //     templateUrl: '[view html]',
    //     css: '[view css stylesheet]',
    //     controller: 'petCtrl'
    // })
    // .when('/delete', {
    //     templateUrl: '[view html]',
    //     css: '[view css stylesheet]',
    //     controller: 'petCtrl'
    // })
    /* THESE ARE THE VETERINARIAN RELATED ROUTES */
    .when('/vets', {
        templateUrl: '/app/views/petTest.html',
        css: '../../styles/css/main.css',
        controller: 'vetCtrl'
    })
    // .when('/:id', {
    //     templateUrl: '[view html]',
    //     css: '[view css stylesheet]',
    //     controller: 'singleVetCtrl'
    // })
    // .when('/post', {
    //     templateUrl: '[view html]',
    //     css: '[view css stylesheet]',
    //     controller: 'vetCtrl'
    // })
    // .when('/put', {
    //     templateUrl: '[view html]',
    //     css: '[view css stylesheet]',
    //     controller: 'vetCtrl'
    // })
    // .when('/delete', {
    //     templateUrl: '[view html]',
    //     css: '[view css stylesheet]',
    //     controller: 'vetCtrl'
    // })
    /* THESE ARE THE VET VISIT ROUTES */
    .when('/vetvisit', {
        templateUrl: '/app/views/petTest.html',
        css: '../../styles/css/main.css',
        controller: 'vetVisitCtrl'
    })
    // .when('/:id', {
    //     templateUrl: '[view html]',
    //     css: '[view css stylesheet]',
    //     controller: 'singleVetVisitCtrl'
    // })
    // .when('/post', {
    //     templateUrl: '[view html]',
    //     css: '[view css stylesheet]',
    //     controller: 'vetVisitCtrl'
    // })
    // .when('/put', {
    //     templateUrl: '[view html]',
    //     css: '[view css stylesheet]',
    //     controller: 'vetVisitCtrl'
    // })
    // .when('/delete', {
    //     templateUrl: '[view html]',
    //     css: '[view css stylesheet]',
    //     controller: 'vetVisitCtrl'
    // });
})