define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name wutsapp.controller:HomeCtrl
   * @description
   * # HomeCtrl
   * Controller of the wutsapp
   */
  angular.module('wutsapp.controllers.ChatCtrl', [])
    .controller('ChatCtrl', function () {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
