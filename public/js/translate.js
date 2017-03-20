var ng = angular.module('ng', []);
ng.config(['$translateProvider', function($translateProvider) {
    $translateProvider
        .useStaticFilesLoader({
            prefix: '/translations/',
            suffix: '.json'
        })
        .preferredLanguage('ar')
        .useMissingTranslationHandlerLog();
}]);
var lang = ng.controller('lang', ['$scope', '$translate', function($scope, $translate) {
    $scope.changeLanguage = function(key) {
        $translate.use(key);
    };
}]);