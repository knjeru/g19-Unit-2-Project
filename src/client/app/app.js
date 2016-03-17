'use strict';

console.log('Angular Main Ready To Go!')

/* The main app with route configurations */

angular.module('petApp', ['ngRoute', 'door3.css', 'ngCookies'])
.config(function($routeProvider){
    console.log('Angular Config Ready To Go!');
    $routeProvider
    .when('/', {
        templateUrl: '/app/views/landing-page.html',
        css: '/styles/css/landing-page.css',
        controller: 'LoginCtrl'
    })
    /* THESE ARE THE USER RELATED ROUTES */
    .when('/profile/new', {
        templateUrl: '/app/views/forms/register.html',
        css: '/styles/css/register.css',
        controller: 'UsrProfCtrl'
    })
    .when('/profile/:id', {
        templateUrl: '/app/views/user/user_info.html',
        css: '/styles/css/user_info.css',
        controller: 'UsrProfCtrl'
    })
    .when('/profile/:id/edit', {
        templateUrl: '/app/views/user/update-owners-page.html',
        css: '/styles/css/update-owners-page.css',
        controller: 'UsrProfCtrl'
    })
    // .when('/profile/:id/delete', {
    //     templateUrl: '[view html]',
    //     css: '[view css stylesheet]',
    //     controller: 'UsrProfCtrl'
    // })
    /* THESE ARE THE PET RELATED ROUTES */
    .when('/profile/:id/pets/new', {
        templateUrl: '/app/views/forms/initial_questionaire.html',
        css: '/styles/css/initial_questionnaire.css',
        controller: 'GenPetCtrl'
    })
    .when('/profile/:id/pets/main', {
        templateUrl: '/app/views/shared/dashboard.html',
        css: '/styles/css/dashboard.css',
        controller: 'GenPetCtrl'
    })
    .when('/profile/:id/pet/:id', {
        templateUrl: '/app/views/pet/single_pet.html',
        css: '/styles/css/single_pet.css',
        controller: 'SinglePetCtrl'
    })
    .when('/profile/:id/pet/:id/edit', {
        templateUrl: '/app/views/pet/update-pet-page.html',
        css: '/styles/css/update-pet-page.css',
        controller: 'SinglePetCtrl'
    })
    // .when('/pet/:id/delete', {
    //     templateUrl: '/app/views/test_views/.html',
    //     css: '../styles/css/main.css',
    //     controller: 'SinglePetCtrl'
    // })
    /* THESE ARE THE VETERINARIAN RELATED ROUTES */
    // .when('/vets', {
    //     templateUrl: '/app/views/petTest.html',
    //     css: '/styles/css/main.css',
    //     controller: 'MainVetCtrl'
    // })
    // .when('/vet/:id', {
    //     templateUrl: '[view html]',
    //     css: '[view css stylesheet]',
    //     controller: 'MainVetCtrl'
    // })
    // .when('/vet/new', {
    //     templateUrl: '[view html]',
    //     css: '[view css stylesheet]',
    //     controller: 'MainVetCtrl'
    // })
    // .when('/vet/:id/edit', {
    //     templateUrl: '[view html]',
    //     css: '[view css stylesheet]',
    //     controller: 'SingleVetCtrl'
    // })
    // .when('/delete', {
    //     templateUrl: '[view html]',
    //     css: '[view css stylesheet]',
    //     controller: 'SingleVetCtrl'
    // })
    /* THESE ARE THE VET VISIT ROUTES */
    .when('/profile/:id/pet/:id/vetvisit/new', {
        templateUrl: '/app/views/vetvisit/update-vet-visit-page.html',
        css: '/styles/css/update-vet-visit-page.css',
        controller: 'MainVetVisitCtrl'
    })
    .when('/profile/:id/pet/:id/vetvisits', {
        templateUrl: '/app/views/vetvisit/vet_visits.html',
        css: '/styles/css/vet_visits.css',
        controller: 'SingleVetVisitCtrl'
    })
    // .when('/vetvisit/:id', {
    //     templateUrl: '[view html]',
    //     css: '[view css stylesheet]',
    //     controller: 'SingleVetVisitCtrl'
    // })
    .when('/profile/:id/pet/:id/vetvisit/:id/edit', {
        templateUrl: '/app/views/vetvisit/update-vet-visit.html',
        css: '/styles/css/update-vet-visit.css',
        controller: 'SingleVetVisitCtrl'
    })
    // .when('/vetvisit/:id/delete', {
    //     templateUrl: '[view html]',
    //     css: '[view css stylesheet]',
    //     controller: 'SingleVetVisitCtrl'
    // })

    /* DANNY LOGIN TEST AREA */
    .when('/login', {
        templateUrl: '/app/views/login/login.html',
        css: '/styles/css/login.css',
        controller: 'LoginCtrl'
    }).otherwise('/');
});
