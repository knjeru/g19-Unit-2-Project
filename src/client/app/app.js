'use strict';

/* The main app with route configurations */

angular.module('petApp', ['ngRoute', 'door3.css', 'ngCookies'])
.config(function($routeProvider){
    console.log('Angular Config Ready To Go!');
    $routeProvider

    /* LANDING PAGE */
    .when('/', {
        templateUrl: '/app/views/landing-page.html',
        css: '/styles/css/landing-page.css',
        controller: 'LoginCtrl'
    })

    /* LOGIN PAGE */
    .when('/login', {
        templateUrl: '/app/views/login/login.html',
        css: '/styles/css/login.css',
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

    /* THESE ARE THE USER'S PET RELATED ROUTES */

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

    /* THESE ARE THE VET VISIT ROUTES */

    .when('/profile/:owner/pet/:pet/vetvisit/new', {
        templateUrl: '/app/views/vetvisit/new-vet-visit.html',
        css: '/styles/css/update-vet-visit-page.css',
        controller: 'MainVetVisitCtrl'
    })
    .when('/profile/:owner/pet/:pet/vetvisits', {
        templateUrl: '/app/views/vetvisit/vet_visits.html',
        css: '/styles/css/vet_visits.css',
        controller: 'MainVetVisitCtrl'
    })
    .when('/profile/:id/pet/:id/vetvisit/:id', {
        templateUrl: '[view html]',
        css: '[view css stylesheet]',
        controller: 'SingleVetVisitCtrl'
    })
    .when('/profile/:id/pet/:id/vetvisit/:id/edit', {
        templateUrl: '/app/views/vetvisit/update-vet-visit.html',
        css: '/styles/css/update-vet-visit.css',
        controller: 'SingleVetVisitCtrl'
    })
    .when('/profile/:owner/pet/:pet/vetvisit/:visit/edit', {
        templateUrl: '/app/views/vetvisit/update-vet-visit-page.html',
        css: '/styles/css/update-vet-visit-page.css',
        // controller: 'SingleVetVisitCtrl'
    })
    .when('/profile/:owner/reminders', {
        templateUrl: '/app/views/pet/reminders.html',
        css: '/styles/css/reminders.css',
        controller: 'MainReminderCtrl'
    })
    .when('/profile/:owner/reminders/:reminder/new', {
        templateUrl: '/app/views/forms/new_reminder.html',
        css: '/styles/css/reminders.css',
        controller: 'SingleReminderCtrl'
    })
    .when('/profile/:owner/reminders/:reminder/edit', {
        templateUrl: '/app/views/user/update-reminders-page.html',
        css: '/styles/css/reminders.css',
        controller: 'SingleReminderCtrl'
    })
    .otherwise('/');

});
