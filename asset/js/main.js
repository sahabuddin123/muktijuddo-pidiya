$(document).ready(function(){
    $('.sahab').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ['<i class="fa fa-arrow-left" aria-hidden="true" style="color:red;font-size:24px;"></i>','<i class="fa fa-arrow-right" aria-hidden="true" style="color:red;font-size:24px;"></i>'],
        autoplay: true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
});

$(document).ready(function(){
    $('.sahab2').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>','<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
        autoplay: true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
});
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: false,
        // autoplaySpeed: true,
        navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>','<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
        dots: false,
        dotsEach: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
});