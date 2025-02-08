$(document).ready(function () {
    var swiperLeft = new Swiper('.left_content .swiper',{
        navigation: {
            nextEl: '.left_content .swiper-button-next',
            prevEl: '.left_content .swiper-button-prev' 
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true, 
        },
        autoplay: {
            delay: 3000
        },
        loop:true
    })
    // sidebar links
    $('.menu_header').click(function () {
        var $child = $(this).next('.menu_child');
    
        if ($child.is(':visible')) {
            $child.slideUp(); 
        } else {
            $('.menu_child').slideUp();
            $child.slideDown(); 
        }
    });
    // slide thumnail
    var swiper = new Swiper(".right_content .mySwiper", {
        loop: true,
        spaceBetween: 0,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,
      });
    //   slide pagination img
    var swiper2 = new Swiper(".right_content .mySwiper2", {
        loop: true,
        spaceBetween: 10,
        navigation: {
          nextEl: ".right_content .swiper-button-next",
          prevEl: ".right_content .swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
    });
    // tab
    $('.news_item .news_title:first').fadeIn()
    $('.news_item a').click(function (e) {
        e.preventDefault();
        var targetId = $(this).attr('href'); 
        console.log(targetId);
        $('.news_item .news_title').fadeOut(0); 
        $(targetId).fadeIn(); 
    });
    
})