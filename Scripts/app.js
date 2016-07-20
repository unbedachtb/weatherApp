angular.module("app", ["ui.router"]).config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '../Views/homeView.html',
            controller: 'weatherCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: '../Views/aboutView.html'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: '../Views/contactView.html'
        });
    $urlRouterProvider
        .otherwise('/');
});
