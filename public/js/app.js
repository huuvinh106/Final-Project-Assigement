var app = angular.module('app', ['ui.router', 'categoryFilters', 'couchdb']);



app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'content'
    });

    $stateProvider.state('detail', {
        url: '/detail/:docId',
        templateUrl: 'views/detail.html',
        controller: 'detailController'
    });

    $stateProvider.state('admin', {
        url: '/admin',
        templateUrl: 'views/admin.html',
        controller: 'adminController'
    });
    $urlRouterProvider.otherwise('/');
});