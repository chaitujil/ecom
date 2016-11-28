(function () {
    'use strict';

    angular.module('ecom')
        .controller('ContactUsCtrl', ContactUsCtrl);

    function ContactUsCtrl() {
        var vm = this;

        vm.email = "developervibes@gmail.com";
    }
})();