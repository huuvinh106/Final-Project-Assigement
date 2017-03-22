var detailController = app.controller('detailController', function($scope, $http, $stateParams, couchdbService) {
    $scope.detail = '';
    $scope.docid = $stateParams.docId;
    couchdbService.getById($stateParams.docId).then(function(allDocs) {
        $scope.detail = allDocs;
    });
});