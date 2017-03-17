var app = angular.module('app', ['ui.router']);

angular.element(document).ready(function() {
    if (location.hash === '') {
        location.hash = '/';
    }
});

app.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'content'
    });

    $stateProvider.state('detail', {
        url: '/detail',
        templateUrl: 'views/detail.html',
        controller: 'detailController'
    });
    // $stateProvider.state('sitebar', {
    //     url: '/sitebar',
    //     templateUrl: 'views/view-bar.html',
    //     controller: 'sitebarController'
    // });
    $stateProvider.state('admin', {
        url: '/admin',
        templateUrl: 'views/admin.html',
        controller: 'admin'
    });
});