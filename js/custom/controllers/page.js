define(['angular', 'services/device', 'directives/routeloadingindicator'], function(angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name wutsapp.controller:HomeCtrl
   * @description
   * # HomeCtrl
   * Controller of the wutsapp
   */
  angular.module('wutsapp.controllers.PageCtrl', ['wutsapp.services.Device', 'wutsapp.directives.RouteLoadingIndicator'])
    .controller('PageCtrl', function($scope, $window, Device) {
      $scope.deviceType = Device.get();
    });
});
