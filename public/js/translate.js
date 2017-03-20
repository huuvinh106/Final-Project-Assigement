var ng = angular.module('ng', ['pascalprecht.translate']);
ng.config(['$translateProvider', function($translateProvider) {
    $translateProvider.fallbackLanguage('en');
    $translateProvider.registerAvailableLanguageKeys(['en', 'vi', {
        'en_*': 'en',
    }])
    $translateProvider.translations('en', {
        BUTTON_LANG_EN: "english"

    });
    // $translateProvider
    //     .useStaticFilesLoader({
    //         prefix: '/translations/',
    //         suffix: '.json'
    //     })
    //     .preferredLanguage('ar')
    //     .useMissingTranslationHandlerLog();
}]);
var lang = ng.controller('lang', ['$scope', '$translate', function($scope, $translate) {
    $scope.changeLanguage = function(key) {
        $translate.use(key);
    };
}]);