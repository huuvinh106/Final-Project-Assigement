var app = angular.module('app', ['ui.router', 'categoryFilters', 'couchdb']);

app.filter('strLimit', ['$filter', function($filter) {
    return function(input, limit) {
        if (!input) return;
        if (input.length <= limit) {
            return input;
        }

        return $filter('limitTo')(input, limit) + '...';
    };
}]);
// angular.element(document).ready(function() {
//     if (location.hash === '') {
//         location.hash = '/';
//     }
// });
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