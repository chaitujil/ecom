(function () {
    'use strict';

    angular.module('ecom')
        .controller('AddCtrl', AddCtrl);

    AddCtrl.$inject = ['$rootScope'];

    function AddCtrl($rootScope) {
        var vm = this;

        vm.user = {
            phonenumber: "",
            email: ""
        };

        vm.users = [];
        vm.addUser = addUser;

        function addUser() {
            vm.users.push(vm.user);
            vm.user = null;
        }
    }
})();
