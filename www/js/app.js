// Ionic ecom App
(function () {
    'use strict';

    angular.module('ecom', ['ionic', 'ngCordova', 'ngSpecialOffer', 'ngStorage'])
        .run(runIonic)
        .config(configStateProvider)
        .config(['$httpProvider', configHttpProvider]);

    function runIonic($ionicPlatform, $specialOffer) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleLightContent();
            }

            var appVersion = '1.0.21';
            var iosId = '1120991525';
            var androidPackageName = 'ecom';

            $specialOffer.init({
                id           : 'ecom' + appVersion,
                showOnCount  : 10,
                title        : 'ecom',
                text         : 'If you enjoy this app please take a moment to rate it',
                agreeLabel   : 'Rate App',
                remindLabel  : 'Remind Me Later',
                declineLabel : 'Not interested',
                onAgree      : function () {
                    if (window.device.platform === 'Android') {
                        window.open($specialOffer.googlePlayUrl(androidPackageName));
                    } else if (window.device.platform === 'iOS') {
                        window.open($specialOffer.appStoreUrl(iosId));
                    }
                },
                onDecline   : function () {
                    // declined
                },
                onRemindMeLater : function () {
                    // will be reminded in 5 more uses
                }
            });
        });
    }

    function configStateProvider($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
        $ionicConfigProvider.tabs.position('bottom');
        $ionicConfigProvider.tabs.style('standard');
        $ionicConfigProvider.backButton.previousTitleText(false);
        $ionicConfigProvider.backButton.text("");
        $stateProvider
            .state('tab', {
            // setup an abstract state for the tabs directive
                url: '/tab',
                abstract: true,
                templateUrl: 'js/ecom/other/tabs.html'
            })
            // Each tab has its own nav history stack:
            .state('tab.add', {
                url: '/add',
                views: {
                    'tab-add': {
                        cache: false,
                        templateUrl: 'js/ecom/reports/tab-add.html',
                        controller: 'AddCtrl as addCtrl'
                    }
                }
            })
            .state('tab.push', {
                url: '/push',
                views: {
                    'tab-push': {
                        cache: false,
                        templateUrl: 'js/ecom/push/tab-push.html',
                        controller: 'PushCtrl as pushCtrl'
                    }
                }
            })
            .state('tab.reports', {
                url: '/reports',
                views: {
                    'tab-reports': {
                        cache: false,
                        templateUrl: 'js/ecom/push/tab-reports.html',
                        controller: 'ReportsCtrl as reportsCtrl'
                    }
                }
            })
            .state('tab.settings', {
                url: '/settings',
                views: {
                    'tab-settings': {
                        templateUrl: 'js/ecom/settings/tab-settings.html',
                        controller: 'SettingsCtrl as settingsCtrl'
                    }
                }
            })
            .state('tab.contactus', {
                url: '/settings/contactus',
                views: {
                    'tab-settings': {
                        templateUrl: 'js/ecom/settings/tab-contact-us.html',
                        controller: 'ContactUsCtrl as contactUsCtrl'
                    }
                }
            })
            .state('tab.sharethisapp', {
                url: '/settings/shareapp',
                views: {
                    'tab-settings': {
                        templateUrl: 'js/ecom/settings/tab-share-app.html',
                        controller: 'ShareThisAppCtrl as shareThisAppCtrl'
                    }
                }
            }).state('tab.rateapp', {
                url: '/settings/rateapp',
                views: {
                    'tab-settings': {
                        templateUrl: 'js/ecom/settings/tab-rate-app.html',
                        controller: 'RateAppCtrl as rateAppCtrl'
                    }
                }
            }).state('tab.sendsuggestion', {
                url: '/settings/sendsuggestion',
                views: {
                    'tab-settings': {
                        templateUrl: 'js/ecom/settings/tab-send-suggestion.html',
                        controller: 'SendSuggestionCtrl as sendSuggestionCtrl'
                    }
                }
            });

        $urlRouterProvider.otherwise('/tab/add');
    }

    function configHttpProvider($httpProvider) {
        //initialize get if not there
        $httpProvider.defaults.cache = false;
        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};
        }
    }
})();
