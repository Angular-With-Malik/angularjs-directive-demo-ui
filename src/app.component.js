(function () {
    angular.module('app')
        .component('appRoot', {
            templateUrl: 'src/app.component.html',
            controller: function () {
                const vm = this
                vm.title = 'Hello'
                vm.employee = {
                    name: 'Geeta',
                    id: 1,
                    city: 'Pune'
                },
                    vm.allEmployee = [
                        { id: 11, name: 'A', city: 'X' },
                        { id: 111, name: 'B', city: 'Y' },
                        { id: 111, name: 'C', city: 'Z' }
                    ]
            }
        })
})()