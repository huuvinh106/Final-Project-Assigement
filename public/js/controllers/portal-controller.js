var menuController = app.controller('menuController', function($rootScope, $scope, $http, couchdbService) {
    $scope.menuData = [];
    $http.get('/json/menuItem.json').then(function(response) {
        $scope.menuData = response.data;
    });

});

var sitebarController = app.controller('sitebarController', function($scope, $http, $stateParams) {
    $scope.slideItem = [];
    $http.get('/json/siteItem.json').then(function(response) {
        $scope.slideItem = response.data;
    });
});