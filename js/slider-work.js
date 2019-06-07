$(document).ready(function(){
     $('.owl-carousel').owlCarousel({
        loop: true,
        margin:5,
        responsiveClass:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        navText : ["" ,""],
        responsive:{
            0:{
                items:1
                
            },
            480:{
                items:1
                
            },
            750:{
                items:1
                
            },
            1170:{
                items:1
               
            }
        }
    });
    $('.slade-they-trust-us').slick({
      infinite: true,
      speed: 300,
      accessibility: true,
      adaptiveHeight: true,
      autoplay: true,
      prevArrow: $('.trust-arrow-left'),
      nextArrow: $('.trust-arrow-right'),
      responsive: [
        {
          breakpoint: 10000,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
          }
        },
        {
          breakpoint: 1170,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        ]
        });
    $('.slider-work-content').slick({
      infinite: false,
      speed: 300,
      accessibility: true,
      adaptiveHeight: true,
      autoplay: true,
      prevArrow: $('.work-arrow-left'),
      nextArrow: $('.work-arrow-right'),
      responsive: [{
          breakpoint: 10000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 1170,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
});

$(document).ready(function () {
    $('.slide-content').slick({
        infinite: true,
          speed: 300,
          accessibility: true,
          adaptiveHeight: true,
          autoplay: true,
          prevArrow: $('.arrow-left'),
          nextArrow: $('.arrow-right'),
          responsive: [{
              breakpoint: 10000,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
              }
            },
            {
              breakpoint: 1170,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 850,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 750,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 320,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });
});
$('.arrow-right').on('click', function () {
    $('.slide-content').slick('slickNext');
});
$('.arrow-left').on('click', function () {
    $('.slide-content').slick('slickPrev');
});
$('.arrow-right-content').on('click', function () {
    $('.slide-content-content').slick('slickNext');
});
$('.arrow-left-content').on('click', function () {
    $('.slide-content-content').slick('slickPrev');
});