

$(document).ready(function () {
    $('.homereviews-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        arrows: false,
        dots: true,
        nav: false,
        pauseOnHover: false,
        navText: ["<div class='nav-btn prev-slide'>swfds</div><div id='slider-num'>", "</div><div class='nav-btn next-slide'>dgfdg</div>"],
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});

