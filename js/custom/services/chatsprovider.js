/*jshint unused: vars */
define(['angular','services/chat'], function(angular) {
    'use strict';

    /**
     * @ngdoc service
     * @name angularjsRequiresjsYeomanTestApp.ContentProvider
     * @description
     * # ContentProvider
     * Service in the angularjsRequiresjsYeomanTestApp.
     */
    angular.module('wutsapp.services.ChatsProvider', ['wutsapp.services.Chat'])
        .service('ChatsProvider', function(Chat) {
            var chat = new Chat({
                name: "Not My Drug Dealer",
                status: "online now",
                image: "https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg"
            }, [{
                text: "Don't save my name as anything sketchy.",
                date: "21:12"
            }, {
                text: "Okay man I gotchu ",
                date: "21:12",
                me: true
            }]);

            this.getChat = function(index) {
                return chat;
            };

        });
});
