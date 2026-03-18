(function () {
    angular.module('app')
        .directive('employeeCard', function () {
            return {
                scope: {
                    currectEmployee: '=',
                    message: '=',
                    allEmployee: '='
                },
                templateUrl: 'src/directives/employee-card.directive.html'
            }
        })
})()
