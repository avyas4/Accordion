(function(angular) {
    'use strict';
    // Declare app level module which depends on views, and controller 
    function accordionController($scope, $element, $attrs) {
        var ctrl = this;
        /* Define logic for your component  */
    }
    angular.module('myApp').component('myAccordion', {
        templateUrl: 'components/view/Accordion.html',
        controller: accordionController
    });


})(window.angular);