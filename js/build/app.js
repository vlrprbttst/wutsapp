/*jshint unused: vars */
define([
        'angular',
        'controllers/page',
        'controllers/chat'
    ],
    /*deps*/
    function(angular, PageCtrl, ChatCtrl) /*invoke*/ {
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
                'wutsapp.controllers.PageCtrl',
                'wutsapp.controllers.ChatCtrl',
                /*angJSDeps*/
                'ngCookies',
                'ngResource',
                'ngSanitize',
                'ngRoute',
                'ngAnimate',
                'ngTouch'
            ])
            .config(function($routeProvider, $locationProvider) {
                $locationProvider.html5Mode(true);
                $routeProvider
                    .when('/', {
                        templateUrl: 'views/chat.html',
                        controller: 'ChatCtrl',
                        controllerAs: 'chat'
                    })                                    
                    .when('/chat/:id/:slug', {
                        templateUrl: 'views/chat.html',
                        controller: 'ChatCtrl',
                        controllerAs: 'chat'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
            });
    });
