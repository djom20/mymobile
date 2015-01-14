var App = angular.module('App', [
    'ngRoute',
    'controllers'
]);

App.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'partials/login.html',
            controller: 'IndexCtrl'
        }).
        when('/inbox', {
            templateUrl: 'partials/dashboard.html',
            controller: 'DashboardCtrl'
        })
        .when('/forms', {
            templateUrl: 'partials/forms.html',
            controller: 'FormsCtrl'
        })
        .when('/form', {
            templateUrl: 'partials/form.html',
            controller: 'FormCtrl'
        })
        .when('/sent', {
            templateUrl: 'partials/sent.html',
            controller: 'SentCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
        
        // Use the HTML5 History API
        // $locationProvider.html5Mode(true);
    }
]);