(function($) {
    'use strict';


    //Toggle Nav for mobile  menu
    $('.menu-toggle').click(function(){
        $('.menu-wrapper').toggleClass('active-nav');
    })

    //   Progress-Bar Counter Up

  $('.counter').counterUp({
    delay: 10,
    time: 1500
});



// Progress Bar

if($('.progress-line').length) {
    $('.progress-line').appear(function(){
        var el = $(this);
        var percent = el.data('width');
        $(el).css('width', percent+'%');
    }, {accY: 0});
   }



		// sticky
	var wind = $(window);
	var sticky = $('#sticky-header');
	wind.on('scroll', function () {
		var scroll = wind.scrollTop();
		if (scroll < 100) {
			sticky.removeClass('sticky');
		} else {
			sticky.addClass('sticky');
		}
	});

	    //header slider
    $('.mobile-slider')['owlCarousel']({
        loop: true,
        margin: 30,
        autoplay: true,
        dots: false,
        items: 1
    });
    var u = $(".mobile-slider"),
        p = $("#next"),
        m = $("#prev");
    p.on("click", function() {
        u.trigger("next.owl.carousel", [400])
    }); m.on("click", function() {
        u.trigger("prev.owl.carousel", [400])
    });


	    $('.blog_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        nav: false,
        navText: ["<i class='fa fa-arrow-left''></i>", "<i class='fa fa-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
			768: {
                items: 2
            },
            992: {
                items: 2
            },
            1000: {
                items: 2
            },
            1920: {
                items: 2
            }
        }
    })

    
    $('.screen_list_blog').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
			768: {
                items: 2
            },
            992: {
                items: 2
            },
            1000: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })


	 $('.brand_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        nav: false,
        navText: ["<i class='fa fa-arrow-left''></i>", "<i class='fa fa-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
			768: {
                items: 3
            },
            992: {
                items: 4
            },
            1000: {
                items: 4
            },
            1920: {
                items: 4
            }
        }
    })
    
    $('.screen_list_service').owlCarousel({
        loop: true,
        center:false,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        dotsEach:true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
			768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })


    $('.testi_list2').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1 
            },
			768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })
 
 $('.testi_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
			768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })
		    /*--
    	One Page Nav
    ----------------------------------- */
    var top_offset = $('.saasoft_main_menu').height() - 100;
    $('.saasoft_main_menu .saasoft_menu .nav_scroll').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 1000,
        scrollOffset: top_offset,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
    });
	
	
	
    /* Portfolio Isotope  */
    $('.image_load').imagesLoaded(function() {

        if ($.fn.isotope) {

            var $portfolio = $('.image_load');

            $portfolio.isotope({

                itemSelector: '.grid-item',

                filter: '*',

                resizesContainer: true,

                layoutMode: 'masonry',

                transitionDuration: '0.8s'

            });
            $('.menu-filtering li').on('click', function() {

                $('.menu-filtering li').removeClass('current_menu_item');

                $(this).addClass('current_menu_item');

                var selector = $(this).attr('data-filter');

                $portfolio.isotope({

                    filter: selector,

                });
            });
        };
    });

	    /*--------------------------
     scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
	    // Venubox

    $('.venobox').venobox({

        numeratio: true,

        infinigall: true

    });
	
	 /*---------------------
    counterUp
    --------------------- */
    $('.counterup-title h1').counterUp({
        delay: 10,
        time: 1000
    });	

	 /*---------------------
    counterUp Index-02
    --------------------- */
    $('.counterup-text h1').counterUp({
        delay: 10,
        time: 1000
    });	
	 /*---------------------
    Service-Area Index-02
    --------------------- */
    $('.screen_list_service').owlCarousel({
        loop: true,
        center:false,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        dotsEach:true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
			768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })


    $('.screen_list_case-study').owlCarousel({
        loop: true,
        center: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
			768: {
                items: 1
            },
            992: {
                items: 2
            },
            1000: {
                items: 2
            },
            1920: {
                items: 2
            }
        }
    })


	// sticky
	var wind = $(window);
	var sticky = $('#sticky-header');
	wind.on('scroll', function () {
		var scroll = wind.scrollTop();
		if (scroll < 100) {
			sticky.removeClass('sticky');
		} else {
			sticky.addClass('sticky');
		}
    });
    






})(jQuery);




















