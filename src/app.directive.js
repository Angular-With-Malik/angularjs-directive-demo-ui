(function () {
    angular.module('app')
        .directive('appDirective', function () {
            return {
                template: `<h1>Hello App Directive</h1>`
            }
        })
})()
