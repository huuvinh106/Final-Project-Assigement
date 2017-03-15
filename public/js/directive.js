app.directive('slideBar', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            itemData: "="
        },
        templateUrl: 'parts/directiveTemplate/slideBar.html'
    };
});