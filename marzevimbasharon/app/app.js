(function () {
    'use strict';

    angular.module('app', ['ui.router','ui.bootstrap','ngAnimate', 'ngSanitize']);

    angular.module('app').config(['$stateProvider', '$urlRouterProvider','$compileProvider', function ($stateProvider, $urlRouterProvider,$compileProvider) {

        $compileProvider.debugInfoEnabled(false);

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'home/home.html',
                controller: 'home-controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'about/about.html'
            })
            .state('gutters-aluminum', {
                url: '/gutters-aluminum',
                templateUrl: 'categories/gutters/aluminum/aluminum.html',
                controller: 'gutters-aluminum-controller'
            })
            .state('gutters-copper', {
                url: '/gutters-copper',
                templateUrl: 'categories/gutters/copper/copper.html',
                controller: 'gutters-copper-controller'
            })
            .state('gutters-galvanized', {
                url: '/gutters-galvanized',
                templateUrl: 'categories/gutters/galvanized/galvanized.html',
                controller: 'gutters-zinc-controller'
            })
            .state('gutters-tin', {
                url: '/gutters-tin',
                templateUrl: 'categories/gutters/tin/tin-gutters-semicircular.html'
            })
            .state('roofs-aluminum',{
                url: '/roofs-aluminum',
                templateUrl: 'categories/roofs/aluminum/aluminum.html'
            })
            .state('roofs-copper',{
                url: '/roofs-copper',
                templateUrl: 'categories/roofs/copper/copper.html',
                controller: 'roof-copper-controller'
            })
            .state('roofs-zinc',{
                url: '/roofs-zinc',
                templateUrl: 'categories/roofs/zinc/zinc.html',
                controller: 'roof-zinc-controller'
            })
            .state('sashes-window-blackened-zinc',{
                url: '/sashes-window-blackened-zinc',
                templateUrl: 'categories/sashes-window/blackened-zinc/blackened-zinc.html',
                controller: 'sashes-window-blackened-zinc-controller'
            })
            .state('sashes-window-copper',{
                url: '/sashes-window-copper',
                templateUrl: 'categories/sashes-window/copper/copper.html'
            })
            .state('sashes-window-natural-zinc',{
                url: '/sashes-window-natural-zinc',
                templateUrl: 'categories/sashes-window/natural-zinc/natural-zinc.html',
                controller: 'sashes-window-natural-zinc-controller'
            })
            .state('shingles-roofs',{
                url: '/shingles-roofs',
                templateUrl: 'categories/shingles-roofs/shingles-roofs.html'
            })
            .state('tin-gutter-between-two-houses',{
                url: '/tin-gutter-between-two-houses',
                templateUrl: 'categories/tin-gutter-between-two-houses/tin-gutter-between-two-houses.html'
            })
            .state('wind-crate-coating',{
                url:'/wind-crate-coating',
                templateUrl:'categories/wind-crate-coating/wind-crate-coating.html',
                controller: 'wind-crate-coating-controller'
            })
    }]);
})();