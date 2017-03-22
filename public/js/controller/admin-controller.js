app.controller("adminController", ['$scope', 'couchdbService', function($scope, couchdbService) {
    $scope.selectedDocs = [];
    $scope.allDocs = [];
    $scope.allDocs = function() {
        couchdbService.getAllDocs().then(function(allDocs) {
            $scope.allDocs = allDocs;


        });
    };
    $scope.allDocs();
    $scope.toggleSelection = function(doc) {
        var index = $scope.selectedDocs.indexOf(doc);
        if (index > -1) {
            $scope.selectedDocs.splice(index, 1);
        } else {
            $scope.selectedDocs.push(doc);
        }
    }

    $scope.submit = function() {
        couchdbService.save($scope.workingDoc).then(function(allDocs) {
            $scope.allDocs();

        });
    }

    $scope.update = function() {
        $scope.workingDoc = $scope.selectedDocs[0];
        $scope.up = !$scope.up;
    }

    $scope.delete = function(doc) {
        angular.forEach($scope.selectedDocs, function(doc, index) {
            couchdbService.delete(doc).then(function(result) {
                if ($scope.selectedDocs.length - 1 == index) {
                    // $scope.selectedDocs = [];
                    $scope.allDocs.splice(doc, 1);
                }
            });
        });
    }
    $scope.Reset = function() {
        $scope.category = '';
        $scope.title = '';
        $scope.content = '';
    }
    $scope.Reset();

}]);