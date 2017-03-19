var menuController = app.controller('menuController', function($rootScope, $scope, $http) {
    $scope.menuData = [];
    $http.get('/json/menuItem.json').then(function(response) {
        $scope.menuData = response.data;

    });

});

var content = app.controller('content', function($rootScope, $scope, $http) {
    $scope.contentData = [];
    $http.get('/json/content.json').then(function(response) {
        $scope.contentData = response.data;

    });

});

var detailController = app.controller('detailController', function($scope, $http, $stateParams) {
    $scope.detail = '';
    $http.get('/json/detail.json').then(function(response) {
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

});
var admin = app.controller('admin', function($scope, $http, $stateParams) {

    $scope.adItem = [{
            "time": "12/03/2017",
            "category": "categoryA",
            "title": "Ron rang le ky niem ngay quoc khanh"
        },
        {
            "time": "12/03/2017",
            "category": "categoryA",
            "title": "Ron rang le ky niem ngay quoc khanh"
        },
        {
            "time": "12/03/2017",
            "category": "catagoryA",
            "title": "Ron rang le ky niem ngay quoc khanh"
        },
        {
            "time": "12/03/2017",
            "category": "categoryA",
            "title": "Ron rang le ky niem ngay quoc khanh"
        },
        {
            "time": "12/03/2017",
            "category": "categoryA",
            "title": "Ron rang le ky niem ngay quoc khanh"
        },
        {
            "time": "12/03/2017",
            "category": "categoryA",
            "title": "Ron rang le ky niem ngay quoc khanh"
        },
        {
            "time": "12/03/2017",
            "category": "categoryA",
            "title": "Ron rang le ky niem ngay quoc khanh"
        },


    ];
});