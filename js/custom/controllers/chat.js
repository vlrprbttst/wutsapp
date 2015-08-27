define(['angular', 'services/chatsprovider'], function(angular) {
    'use strict';

    /**
     * @ngdoc function
     * @name wutsapp.controller:HomeCtrl
     * @description
     * # HomeCtrl
     * Controller of the wutsapp
     */
    angular.module('wutsapp.controllers.ChatCtrl', ['wutsapp.services.ChatsProvider'])
        .controller('ChatCtrl', function($scope, $window, $routeParams, ChatsProvider) {
            $scope.chat = ChatsProvider.getChat();

            console.log($routeParams.id);
            console.log($routeParams.slug);

        });
});
