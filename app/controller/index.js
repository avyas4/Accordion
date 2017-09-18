(function(angular) {
    'use strict';
    // Declare app level module which depends on view, and controller 
    angular.module('myApp').controller('mainController', function($scope) {
        $scope.toggleSidenav = function() {
            $scope.isVisible = !$scope.isVisible;
        }
        $scope.isVisible = false;
    })


})(window.angular);