var app = angular.module('app', ['ui.router']);

app.run(function($rootScope) {
    var loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        loggedInUser = JSON.parse(loggedInUser);
        $rootScope.loggedIn = true;
        $rootScope.userRole = loggedInUser.role;
        console.log("loggedInUser: " + loggedInUser);
    }
});


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
    $stateProvider.state('sitebar', {
        url: '/sitebar',
        templateUrl: 'views/view-bar.html',
        controller: 'sitebarController'
    });
});