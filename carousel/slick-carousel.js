angular.module('app').directive('slickCarousel', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
          model: '=',
          autoplay: '=',
          index: '=',
          slides: '=',
          type: '@',
          image:'@'
      },
        link: function (scope) {
           scope.open = function (img) {
               scope.image = img;
           }
        },
      controller: ['$scope', '$location', function ($scope, $location) {
          sca = $scope;

          setTimeout(function(){
              //console.log('slick!');
               $('.carousel-'+$scope.index).slick({
                   nextArrow: '<div class="next"><i class="fa fa-arrow-right icon fa-4x"></i></div>',
                   prevArrow: '<div class="prev"><i class="fa fa-arrow-left icon fa-4x"></i></div>',
                   dots: true,
                   infinite: true,
                   speed: 800,
                   centerMode:true,
                   slidesToShow: $scope.slides,
                   slidesToScroll: 1,
                   initialSlide:2,
                   autoplay: $scope.autoplay,
                   autoplaySpeed: 5000,
                   centerPadding: '40px',
                   responsive: [
                     {
                       breakpoint: 1400,
                       settings: {
                           dots: true,
                           arrows: true,
                           infinite: true,
                           slidesToShow: 1,
                           slidesToScroll: 2
                       }
                     },
                     {
                       breakpoint: 1200,
                       settings: {
                           dots: false,
                           arrows: true,
                           infinite: false,
                           slidesToShow: 1,
                           slidesToScroll: 2
                       }
                     },
                     {
                       breakpoint: 992,
                       settings: {
                           dots: false,
                           arrows: false,
                           infinite: false,
                           slidesToShow: 1,
                           slidesToScroll: 2
                       }
                   },
                   {
                     breakpoint: 768,
                     settings: {
                         dots: false,
                         arrows: false,
                         infinite: true,
                         slidesToShow: 1,
                         slidesToScroll: 2
                     }
                   }
                   ]
               });

          }, 0);


         //icon icon-arrow-right-32x83

          $scope.go = function (path) {
              $location.path(path);
          }
      }],
      templateUrl: 'carousel/slick-carousel.html'
    };
  })
