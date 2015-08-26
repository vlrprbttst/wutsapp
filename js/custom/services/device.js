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
      
      var types = ["nexus6", "s6", "nexus5", "motoX"];

      var type = types[Math.floor((Math.random() * types.length))];
      this.get = function() {
        return type;
      };
    });
});
