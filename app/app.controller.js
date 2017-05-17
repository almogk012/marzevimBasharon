(function () {
    'use strict';

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.goToTop').fadeIn();
        } else {
            $('.goToTop').fadeOut();
        }
    });
    $(document).ready(function () {
        $('#goToTop').click(function () {
            $("html, body").animate({scrollTop: 0}, 1000);
            return false;
        });
        $(".dropdown-menu li a").click(function () {
            $('.navbar-collapse').collapse('hide');
        });
        $('#btn-horiz').click(function () {
            $('.navbar-collapse').collapse('hide');
        });
        $(".close1").click(function () {
            $('.navbar-collapse').collapse('hide');
        });
        $("#menu ul li a").click(function () {
            $(".dropdown-menu").css('border-radius','5%');
        });
    });
    angular
        .module('app')
        .controller('app-controller', function ($scope) {
            $scope.isCollapsedHorizontal = true;


            $scope.share = function () {
                FB.ui({
                    method: 'share',
                    display: 'popup',
                    href: 'http://marzevimbasharon.co.il/#/home'
                }, function(response){
                    // if (response && !response.error_message) {
                    //     alert('Posting completed.');
                    // } else {
                    //     alert('Error while posting.');
                    // }
                });
            }
            $scope.zorKesher = false;
            $scope.mouseup = function () {
                $scope.zorKesher = false;
            }
        });
})();
