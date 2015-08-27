define(['angular', 'services/chatprovider'], function(angular) {
    'use strict';

    /**
     * @ngdoc function
     * @name wutsapp.controller:HomeCtrl
     * @description
     * # HomeCtrl
     * Controller of the wutsapp
     */
    angular.module('wutsapp.controllers.ChatCtrl', ['wutsapp.services.ChatsProvider'])
        .controller('ChatCtrl', function($scope, $rootScope, $location, $q, chat, ChatsProvider) {
            if (!chat) {
                $location.path("/");
                return;
            }
            $scope.chat = chat;

            var assureNewChat = $q(function(resolve, reject) {
                function getNewChat() {
                    ChatsProvider.getChat().then(function(chat) {
                        if (chat.url != $scope.chat.url) {
                            resolve(chat);
                            return;
                        }
                        getNewChat();
                    });
                }
                getNewChat();
            });

            assureNewChat.then(function(chat) {
              $rootScope.newChatUrl = "/chat" + chat.url;
            });
        });
});
