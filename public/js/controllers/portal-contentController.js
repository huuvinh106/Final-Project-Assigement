var content = app.controller('content', function($rootScope, $scope, $http, couchdbService) {
    $scope.contentData = [];
    couchdbService.getAllDocs().then(function(allDocs) {
        $scope.contentData = allDocs;
    });

});