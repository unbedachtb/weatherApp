angular.module("app", ["ui.router"]).config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '../homeView.html',
            controller: 'weatherCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: '../aboutView.html'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: '../contactView.html'
        });
    $urlRouterProvider
        .otherwise('/');
});
