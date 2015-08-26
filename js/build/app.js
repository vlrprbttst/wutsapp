/*jshint unused: vars */
define([
        'angular',
        'controllers/chat',
        'controllers/page'
    ],
    /*deps*/
    function(angular
    ) /*invoke*/ {
        'use strict';

        /**
         * @ngdoc overview
         * @name wutsapp
         * @description
         * # wutsapp
         *
         * Main module of the application.
         */
        return angular
            .module('wutsapp', [
                'wutsapp.controllers.ChatCtrl',
                'wutsapp.controllers.PageCtrl',
                /*angJSDeps*/
                'ngCookies',
                'ngResource',
                'ngSanitize',
                'ngRoute',
                'ngAnimate',
                'ngTouch'
            ])
            .config(function($routeProvider, $locationProvider) {
                /*
                $locationProvider.html5Mode(true);
                $routeProvider
                    .when('/', {
                        templateUrl: 'views/home.html',
                        controller: 'HomeCtrl',
                        controllerAs: 'home'
                    })
                    .when('/content/:contentId?', {
                        templateUrl: 'views/content.html',
                        controller: 'ContentCtrl',
                        controllerAs: 'content'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
                */

            });
    });
