var controllers = angular.module('controllers', []);

controllers.controller('IndexCtrl', ['$scope',
    function($scope) {
        console.log('Init controller');
        //$scope.load();

        $scope.load = function(){
            // $scope.lang = window.lang;

            // if(localStorage.lang == null){
            //     $scope.lang         = $scope.lang.es;
            //     localStorage.lang   = 'es';
            // }else{
            //     $scope.lang = $scope.lang[localStorage.lang];
            // }
        };

        $scope.changeLang = function(lang){
            if(lang === 'es' || lang === 'en'){
                $scope.lang         = $scope.lang[lang];
                localStorage.lang   = lang;
            }
        };

        $scope.navigate = function(id){
            $('html, body').stop().animate({
                scrollTop: $(id).offset().top
            }, 500);
        };
    }]
);

controllers.controller('LoginCtrl', ['$scope', '$location',
    function($scope, $location) {
        $scope.onLogin = function(){
            console.log('Login click');
            // setTimeout(function(){
                console.log('Reload Page');
                $location.path('/inbox').replace();
            // }, 100);
        };
    }]
);

controllers.controller('MenuCtrl', ['$scope', '$location',
    function($scope, $location) {
        $scope.status_menu = false;

        $scope.toggleMenu = function(){
            if(!$scope.status_menu){
                $scope._open();
            } else {
                $scope._closed();
            }
            $('.main-menu').blur();
        };

        $scope.linkTo = function(link){
            $location.path(link).replace();
            $scope._closed();
        };

        $scope._open = function(){
            $scope.status_menu  = true;
            $('.sidemenu').removeClass('_closed').addClass('_open');
            $('#page-top').removeClass('_closed').addClass('_open');
        };

        $scope._closed = function(){
            $('.sidemenu').removeClass('_open').addClass('_closed');
            $('#page-top').removeClass('_open').addClass('_closed');
            $scope.status_menu  = false;
        };
    }]
);

controllers.controller('DashboardCtrl', ['$scope', '$location',
    function($scope, $location) {
        console.log('Init controller');

        $scope.list = [
            {"name": "Jhon Smmith"},
            {"name": "Jhon Smmith"},
            {"name": "Jhon Smmith"},
            {"name": "Jhon Smmith"},
            {"name": "Jhon Smmith"},
            {"name": "Jhon Smmith"},
            {"name": "Jhon Smmith"},
            {"name": "Jhon Smmith"},
            {"name": "Jhon Smmith"},
            {"name": "Jhon Smmith"},
            {"name": "Jhon Smmith"},
            {"name": "Jhon Smmith"},
            {"name": "Jhon Smmith"},
            {"name": "Jhon Smmith"},
            {"name": "Jhon Smmith"},
            {"name": "Jhon Smmith"},
            {"name": "Jhon Smmith"},
            {"name": "Raul Smmith"}
        ];
    }]
);

controllers.controller('FormsCtrl', ['$scope', '$location',
    function($scope, $location) {
        console.log('Init controller');

        $scope.list = [
            {"name": "Google"},
            {"name": "Google"},
            {"name": "Google"},
            {"name": "Google"},
            {"name": "Google"},
            {"name": "Google"},
            {"name": "Soluntech"},
            {"name": "Soluntech"},
            {"name": "Soluntech"},
            {"name": "Soluntech"},
            {"name": "Opercar"},
            {"name": "Opercar"},
            {"name": "Opercar"},
            {"name": "Opercar"},
            {"name": "Opercar"},
            {"name": "Public"}
        ];
    }]
);

controllers.controller('FormCtrl', ['$scope', '$location',
    function($scope, $location) {
        console.log('Init controller');
    }]
);

controllers.controller('SentCtrl', ['$scope', '$location',
    function($scope, $location) {
        console.log('Init controller');
    }]
);

