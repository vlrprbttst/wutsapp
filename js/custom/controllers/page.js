define(['angular', 'services/device'], function(angular) {
    'use strict';

    /**
     * @ngdoc function
     * @name wutsapp.controller:HomeCtrl
     * @description
     * # HomeCtrl
     * Controller of the wutsapp
     */
    angular.module('wutsapp.controllers.PageCtrl', ['wutsapp.services.Device'])
        .controller('PageCtrl', function($scope, $window, Device) {
            $scope.deviceModel = Device.getModel();
            $scope.deviceTimestamp = Device.getTimestamp();
            if($window.innerHeight <= 800) {
                $scope.pageSize = 'small-device';
            }
        });
});
