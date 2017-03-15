app.directive('slideBars', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            itemData: "="
        },
        templateUrl: 'parts/directiveTemplates/sliderBar.html'
    };
});