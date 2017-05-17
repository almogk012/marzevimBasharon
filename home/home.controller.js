(function () {
    'use strict';

    angular
        .module('app')
        .controller('home-controller', function ($scope) {
            $scope.isCollapsed = true;
            $scope.isCollapsed2 = true;
            $scope.isCollapsed3 = true;
            $scope.myInterval = 3000;
            $scope.noWrapSlides = false;
            $scope.active = 0;
            $scope.slides = [
                {
                    image: 'categories/gutters/copper/images/pic8.jpg'
                },
                {
                    image: 'categories/gutters/aluminum/images/pic6.jpg'
                },
                {
                    image: 'categories/gutters/copper/images/pic22.jpg'
                }
            ];
        });
})();


