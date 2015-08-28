define(['angular', 'services/message'], function(angular) {
    'use strict';
    angular.module('wutsapp.services.Chat', ['wutsapp.services.Message'])
        .factory('Chat', function(Message) {
            var Chat = function(json) {
            	this.id = json.id;
                this.name = json.name;
                this.slug = this.name.replace(/\W/g, "-").toLowerCase();
                this.user = json.user;
                var messages = [];
                angular.forEach(json.messages, function(message, index) {
                	message.id = index + 1;
                    messages.push(new Message(message));
                });
                this.messages = messages;
                this.url = "/" + this.id + "/" + this.slug;
            };

            return Chat;
        });
});
