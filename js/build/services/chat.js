define(['angular'], function(angular) {
    'use strict';
    angular.module('wutsapp.services.Chat', [])
        .factory('Chat', function() {
        	var Chat = function(user, messages) {
        		this.user = user;
        		this.messages = messages;
        	};

        	return Chat;
        });
});
