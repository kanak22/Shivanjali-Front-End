(function ($) {
    "use strict";


    // News Two Carousel
    if ($(".news-two__carousel").length) {
        $(".news-two__carousel").owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            smartSpeed: 500,
            autoHeight: false,
            autoplay: true,
            dots: false,
            autoplayTimeout: 10000,
            navText: [
                '<span class="icon-right-arrow left"></span>',
                '<span class="icon-right-arrow"></span>',
            ],
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                800: {
                    items: 2,
                },
                1024: {
                    items: 2,
                },
                1200: {
                    items: 2,
                },
            },
        });
    }


    // Popular Causes Carousel
    if ($(".popular-causes__carousel").length) {
        $(".popular-causes__carousel").owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            smartSpeed: 500,
            autoHeight: false,
            autoplay: true,
            dots: false,
            autoplayTimeout: 10000,
            navText: [
                '<span class="icon-right-arrow left"></span>',
                '<span class="icon-right-arrow"></span>',
            ],
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                800: {
                    items: 2,
                },
                1024: {
                    items: 2,
                },
                1200: {
                    items: 3,
                },
            },
        });
    }



    // Testimonials Two Carousel
    if ($(".testimonials-two__carousel").length) {
        $(".testimonials-two__carousel").owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            smartSpeed: 500,
            autoHeight: false,
            autoplay: true,
            dots: true,
            autoplayTimeout: 10000,
            navText: [
                '<span class="icon-right-arrow left"></span>',
                '<span class="icon-right-arrow"></span>',
            ],
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                800: {
                    items: 1,
                },
                1024: {
                    items: 1,
                },
                1200: {
                    items: 1,
                },
            },
        });
    }

    
    // Featured Campaigns Carousel
    if ($(".featured-campaigns__carousel").length) {
        $(".featured-campaigns__carousel").owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            smartSpeed: 500,
            autoHeight: false,
            autoplay: true,
            dots: false,
            autoplayTimeout: 10000,
            navText: [
                '<span class="icon-right-arrow left"></span>',
                '<span class="icon-right-arrow"></span>',
            ],
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                800: {
                    items: 1,
                },
                1024: {
                    items: 1,
                },
                1200: {
                    items: 1,
                },
            },
        });
    }


   
    
    

    if ($(".range-slider-price").length) {
        var priceRange = document.getElementById("range-slider-price");

        noUiSlider.create(priceRange, {
            start: [30, 150],
            limit: 200,
            behaviour: "drag",
            connect: true,
            range: {
                min: 10,
                max: 200,
            },
        });

        var limitFieldMin = document.getElementById("min-value-rangeslider");
        var limitFieldMax = document.getElementById("max-value-rangeslider");

        priceRange.noUiSlider.on("update", function (values, handle) {
            (handle ? $(limitFieldMax) : $(limitFieldMin)).text(values[handle]);
        });
    }



    if ($(".contact-form-validated").length) {
        $(".contact-form-validated").validate({
            // initialize the plugin
            rules: {
                name: {
                    required: true,
                },
                email: {
                    required: true,
                    email: true,
                },
                message: {
                    required: true,
                },
                subject: {
                    required: true,
                },
            },
            submitHandler: function (form) {
                // sending value with ajax request
                $.post($(form).attr("action"), $(form).serialize(), function (
                    response
                ) {
                    $(form).parent().find(".result").append(response);
                    $(form).find('input[type="text"]').val("");
                    $(form).find('input[type="email"]').val("");
                    $(form).find("textarea").val("");
                    console.log(response);
                });
                return false;
            },
        });
    }





    if ($(".banner-bg-slide").length) {
        $(".banner-bg-slide").each(function () {
            var Self = $(this);
            var bgSlideOptions = Self.data("options");
            var bannerTwoSlides = Self.vegas(bgSlideOptions);
        });
    }





    //Submenu Dropdown Toggle
    if ($(".main-nav__main-navigation li.dropdown ul").length) {
        $(".main-nav__main-navigation li.dropdown")
            .children("a")
            .append(
                '<button class="dropdown-btn"><i class="fa fa-angle-down"></i></button>'
            );
    }



    // mobile menu
    if ($(".main-nav__main-navigation").length) {
        let mobileNavContainer = $(".mobile-nav__container");
        let mainNavContent = $(".main-nav__main-navigation").html();

        mobileNavContainer.append(mainNavContent);

        //Dropdown Button
        mobileNavContainer
            .find("li.dropdown .dropdown-btn")
            .on("click", function (e) {
                $(this).toggleClass("open");
                $(this).parent().parent().children("ul").slideToggle(500);
                e.preventDefault();
            });
    }




    if ($(".stricky").length) {
        $(".stricky")
            .addClass("original")
            .clone(true)
            .insertAfter(".stricky")
            .addClass("stricked-menu")
            .removeClass("original");
    }




    if ($(".side-menu__toggler").length) {
        $(".side-menu__toggler").on("click", function (e) {
            $(".mobile-nav__wrapper").toggleClass("expanded");
            e.preventDefault();
        });
    }



    if ($(".mobile-nav__overlay").length) {
        $(".mobile-nav__overlay").on("click", function (e) {
            $(".side-menu__block").removeClass("expanded");
            e.preventDefault();
        });
    }






    if ($(".scroll-to-target").length) {
        $(".scroll-to-target").on("click", function () {
            var target = $(this).attr("data-target");
            // animate
            $("html, body").animate({
                    scrollTop: $(target).offset().top,
                },
                1000
            );

            return false;
        });
    }

    if ($(".search-popup__toggler").length) {
        $(".search-popup__toggler").on("click", function (e) {
            $(".search-popup").addClass("active");
            e.preventDefault();
        });
    }

    if ($(".search-popup__overlay").length) {
        $(".search-popup__overlay").on("click", function (e) {
            $(".search-popup").removeClass("active");
            e.preventDefault();
        });
    }

    if ($(".wow").length) {
        var wow = new WOW({
            boxClass: "wow", // animated element css class (default is wow)
            animateClass: "animated", // animation css class (default is animated)
            offset: 250, // distance to the element when triggering the animation (default is 0)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true, // act on asynchronously loaded content (default is true)
        });
        wow.init();
    }

    function SmoothMenuScroll() {
        var anchor = $(".scrollToLink");
        if (anchor.length) {
            anchor.children("a").bind("click", function (event) {
                if ($(window).scrollTop() > 10) {
                    var headerH = "67";
                } else {
                    var headerH = "100";
                }
                var target = $(this);
                $("html, body")
                    .stop()
                    .animate({
                            scrollTop: $(target.attr("href")).offset().top -
                                headerH +
                                "px",
                        },
                        1200,
                        "easeInOutExpo"
                    );
                anchor.removeClass("current");
                target.parent().addClass("current");
                event.preventDefault();
            });
        }
    }
    SmoothMenuScroll();

    function OnePageMenuScroll() {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 100) {
            var menuAnchor = $(".one-page-scroll-menu .scrollToLink").children(
                "a"
            );
            menuAnchor.each(function () {
                // grabing section id dynamically
                var sections = $(this).attr("href");
                $(sections).each(function () {
                    // checking is scroll bar are in section
                    if ($(this).offset().top <= windscroll + 100) {
                        // grabing the dynamic id of section
                        var Sectionid = $(sections).attr("id");
                        // removing current class from others
                        $(".one-page-scroll-menu")
                            .find("li")
                            .removeClass("current");
                        // adding current class to related navigation
                        $(".one-page-scroll-menu")
                            .find("a[href*=\\#" + Sectionid + "]")
                            .parent()
                            .addClass("current");
                    }
                });
            });
        } else {
            $(".one-page-scroll-menu li.current").removeClass("current");
            $(".one-page-scroll-menu li:first").addClass("current");
        }
    }


    if ($(".counter").length) {
        $(".counter").counterUp({
            delay: 10,
            time: 3000,
        });
    }

    // Popular Causes Progress Bar
    if ($('.count-bar').length) {
        $('.count-bar').appear(function () {
            var el = $(this);
            var percent = el.data('percent');
            $(el).css('width', percent).addClass('counted');
        }, {
            accY: -50
        });

    }

    //Fact Counter + Text Count
    if ($(".count-box").length) {
        $(".count-box").appear(
            function () {
                var $t = $(this),
                    n = $t.find(".count-text").attr("data-stop"),
                    r = parseInt($t.find(".count-text").attr("data-speed"), 10);

                if (!$t.hasClass("counted")) {
                    $t.addClass("counted");
                    $({
                        countNum: $t.find(".count-text").text(),
                    }).animate({
                        countNum: n,
                    }, {
                        duration: r,
                        easing: "linear",
                        step: function () {
                            $t.find(".count-text").text(
                                Math.floor(this.countNum)
                            );
                        },
                        complete: function () {
                            $t.find(".count-text").text(this.countNum);
                        },
                    });
                }
            }, {
                accY: 0
            }
        );
    }

    if ($(".img-popup").length) {
        var groups = {};
        $(".img-popup").each(function () {
            var id = parseInt($(this).attr("data-group"), 10);

            if (!groups[id]) {
                groups[id] = [];
            }

            groups[id].push(this);
        });

        $.each(groups, function () {
            $(this).magnificPopup({
                type: "image",
                closeOnContentClick: true,
                closeBtnInside: false,
                gallery: {
                    enabled: true,
                },
            });
        });
    }


    if ($(".video-popup").length) {
        $(".video-popup").magnificPopup({
            disableOn: 700,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: true,

            fixedContentPos: false,
        });
    }


    $(window).on("scroll", function () {
        if ($(".stricked-menu").length) {
            var headerScrollPos = 100;
            var stricky = $(".stricked-menu");
            if ($(window).scrollTop() > headerScrollPos) {
                stricky.addClass("stricky-fixed");
            } else if ($(this).scrollTop() <= headerScrollPos) {
                stricky.removeClass("stricky-fixed");
            }
        }
        OnePageMenuScroll();
        if ($(".scroll-to-top").length) {
            var strickyScrollPos = 100;
            if ($(window).scrollTop() > strickyScrollPos) {
                $(".scroll-to-top").fadeIn(500);
            } else if ($(this).scrollTop() <= strickyScrollPos) {
                $(".scroll-to-top").fadeOut(500);
            }
        }
    });

    // ===Project===
    function projectMasonaryLayout() {
        if ($('.masonary-layout').length) {
            $('.masonary-layout').isotope({
                layoutMode: 'masonry'
            });
        }
        if ($('.post-filter').length) {
            $('.post-filter li').children('.filter-text').on('click', function () {
                var Self = $(this);
                var selector = Self.parent().attr('data-filter');
                $('.post-filter li').removeClass('active');
                Self.parent().addClass('active');
                $('.filter-layout').isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 500,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });
        }

        if ($('.post-filter.has-dynamic-filters-counter').length) {
            // var allItem = $('.single-filter-item').length;
            var activeFilterItem = $('.post-filter.has-dynamic-filters-counter').find('li');
            activeFilterItem.each(function () {
                var filterElement = $(this).data('filter');
                var count = $('.filter-layout').find(filterElement).length;
                $(this).children('.filter-text').append('<span class="count">' + count + '</span>');
            });
        };
    }


    $(window).on("load", function () {

        // swiper slider

        const swiperElm = document.querySelectorAll(".thm-swiper__slider");

        swiperElm.forEach(function (swiperelm) {
            const swiperOptions = JSON.parse(swiperelm.dataset.swiperOptions);
            let thmSwiperSlider = new Swiper(swiperelm, swiperOptions);
        });


        if ($("#testimonials-one__thumb").length) {
            let testimonialsThumb = new Swiper("#testimonials-one__thumb", {
                slidesPerView: 3,
                spaceBetween: 0,
                speed: 1400,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                loop: true,
                autoplay: {
                    delay: 5000
                }
            });

            let testimonialsCarousel = new Swiper("#testimonials-one__carousel", {
                observer: true,
                observeParents: true,
                speed: 1400,
                mousewheel: true,
                slidesPerView: 1,
                autoplay: {
                    delay: 5000
                },
                thumbs: {
                    swiper: testimonialsThumb
                }
            });
        }



        if ($(".thm__owl-carousel").length) {
            $(".thm__owl-carousel").each(function () {
                var Self = $(this);
                var carouselOptions = Self.data("options");
                var carouselPrevSelector = Self.data("carousel-prev-btn");
                var carouselNextSelector = Self.data("carousel-next-btn");
                var thmCarousel = Self.owlCarousel(carouselOptions);
                if (carouselPrevSelector !== undefined) {
                    $(carouselPrevSelector).on("click", function () {
                        thmCarousel.trigger("prev.owl.carousel");
                        return false;
                    });
                }
                if (carouselNextSelector !== undefined) {
                    $(carouselNextSelector).on("click", function () {
                        thmCarousel.trigger("next.owl.carousel");
                        return false;
                    });
                }
            });
        }





        if ($(".side-menu__block-inner").length) {
            $(".side-menu__block-inner").mCustomScrollbar({
                axis: "y",
                theme: "dark",
            });
        }

        if ($(".custom-cursor__overlay").length) {
            // / cursor /
            var cursor = $(".custom-cursor__overlay .cursor"),
                follower = $(".custom-cursor__overlay .cursor-follower");

            var posX = 0,
                posY = 0;

            var mouseX = 0,
                mouseY = 0;

            TweenMax.to({}, 0.016, {
                repeat: -1,
                onRepeat: function () {
                    posX += (mouseX - posX) / 9;
                    posY += (mouseY - posY) / 9;

                    TweenMax.set(follower, {
                        css: {
                            left: posX - 22,
                            top: posY - 22,
                        },
                    });

                    TweenMax.set(cursor, {
                        css: {
                            left: mouseX,
                            top: mouseY,
                        },
                    });
                },
            });

            $(document).on("mousemove", function (e) {
                var scrollTop =
                    window.pageYOffset || document.documentElement.scrollTop;
                mouseX = e.pageX;
                mouseY = e.pageY - scrollTop;
            });
            $("button, a").on("mouseenter", function () {
                cursor.addClass("active");
                follower.addClass("active");
            });
            $("button, a").on("mouseleave", function () {
                cursor.removeClass("active");
                follower.removeClass("active");
            });
            $(".custom-cursor__overlay").on("mouseenter", function () {
                cursor.addClass("close-cursor");
                follower.addClass("close-cursor");
            });
            $(".custom-cursor__overlay").on("mouseleave", function () {
                cursor.removeClass("close-cursor");
                follower.removeClass("close-cursor");
            });
        }

        if ($(".preloader").length) {
            $(".preloader").fadeOut();
        }

        if ($(".countdown-one__list").length) {
            $(".countdown-one__list").countdown({
                date: "June 7, 2020 15:03:25",
                render: function (date) {
                    this.el.innerHTML =
                        "<li> <div class='days'> <i>" +
                        date.days +
                        "</i> <span>Days</span> </div> </li>" +
                        "<li> <div class='hours'> <i>" +
                        date.hours +
                        "</i> <span>Hours</span> </div> </li>" +
                        "<li> <div class='minutes'> <i>" +
                        date.min +
                        "</i> <span>Minutes</span> </div> </li>" +
                        "<li> <div class='seconds'> <i>" +
                        date.sec +
                        "</i> <span>Seconds</span> </div> </li>";
                },
            });
        }



    });

    // Dom Ready Function
    jQuery(document).on("ready", function () {
        (function ($) {
            // add your functions
            singleProductTab();
            priceFilter();
            projectMasonaryLayout();
        })(jQuery);
    });




})(jQuery);