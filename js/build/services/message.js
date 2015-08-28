define(['angular'], function(angular) {
    'use strict';
    angular.module('wutsapp.services.Message', [])
        .factory('Message', function() {
            var Message = function(json) {
                this.id = json.id;
                this.text = json.text;
                this.you = json.you;
                this.timestamp = (new Date().getTime() - Math.random()*3600000) + (Math.random() * 60000) * this.id;
            };

            return Message;
        });
});
