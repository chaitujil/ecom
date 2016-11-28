(function () {
    'use strict';

    angular.module('ecom')
        .controller('PushCtrl', PushCtrl);

    PushCtrl.$inject = ['$rootScope', 'ChannelsService', 'ModalService', 'AudioService', 'ChannelMetadataService'];

    function PushCtrl($rootScope) {
    }
})();
