/*jshint unused: vars */
define(['angular'], function(angular) {
    'use strict';

    /**
     * @ngdoc service
     * @name angularjsRequiresjsYeomanTestApp.ContentProvider
     * @description
     * # ContentProvider
     * Service in the angularjsRequiresjsYeomanTestApp.
     */
    angular.module('wutsapp.services.Device', [])
        .service('Device', function() {

            var models = ["nexus6", "s6", "nexus5", "motoX"];

            var model = models[Math.floor((Math.random() * models.length))];
            var timestamp = (new Date().getTime() - Math.random()*3600000);
            
            this.getModel = function() {
                return model;
            };

            this.getTimestamp = function() {
                return timestamp;
            };

        });
});
