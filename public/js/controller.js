var menuController = app.controller('menuController', function($rootScope, $scope, $http) {
    $scope.menuData = [];
    $http.get('/services/menuItem.json').then(function(response) {
        $scope.menuData = response.data;

    });

});

var content = app.controller('content', function($rootScope, $scope, $http) {
    $scope.contentData = [];
    $http.get('/services/content.json').then(function(response) {
        $scope.contentData = response.data;

    });

});

var detailController = app.controller('detailController', function($scope, $http, $stateParams) {
    $scope.detail = '';
    $http.get('/services/detail.json').then(function(response) {
        $scope.detail = response.data;
    });
});
var slideBar = app.controller('slideBar', function($scope, $http, $stateParams) {
    $scope.slideItem = [{
        "name": "thong bao",
        "imageUrl": "./images/bar.jpg"
    }];
    // $http.get('/services/slider.json').then(function(response) {
    //     $scope.slideItem = response.data;
    // });
});