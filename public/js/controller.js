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
var sitebarController = app.controller('sitebarController', function($scope, $http, $stateParams) {
    $scope.slideItem = [{
            "name": "số điện thoại đường dây nóng",
            "imageUrl": "./images/icon1.png"
        },
        {
            "name": "Tuyển dụng công chức Hồ Chí Minh",
            "imageUrl": "./images/icon2.png"
        },
        {
            "name": "thông tin thống kê",
            "imageUrl": "./images/icon3.png"
        },
        {
            "name": "thư điện tử",
            "imageUrl": "./images/icon4.png"
        },
        {
            "name": "giá cả thị trường",
            "imageUrl": "./images/icon5.png"
        },

    ];
    // $http.get('/services/slider.json').then(function(response) {
    //     $scope.slideItem = response.data;
    // });
});