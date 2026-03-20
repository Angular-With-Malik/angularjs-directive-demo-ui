(function () {
    angular.module('app')
        .directive('employeeCard', function () {
            return {
                scope: {
                    currectEmployee: '=',
                    message: '<',      // < One way data binding
                    allEmployee: '='   // = Two way data binding
                },
                // restrict: 'A',   // 'A' - Attribute;  'E'  - Element
                templateUrl: 'src/directives/employee-card.directive.html'
            }
        })
})()
