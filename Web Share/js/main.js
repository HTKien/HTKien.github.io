$(function() {
    $(window).on('load', function(event) {
        $('#preloader').delay(1000).fadeOut('fast');
    });
    var srcollToTop = function() {
        //Check to see if the window is top if not then display button
        $(window).on('scroll', (function() {
            if ($(this).scrollTop() > 100) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        }));
        //Click event to scroll to top
        $('#back-to-top').click(function() {
            $('html, body').animate({ scrollTop: 0 }, 100);
            return false;
        });
    }
    srcollToTop();
    var sliders = {
        init:function(){
           this.homeSlider();
           this.trendingSlider();
           this.instagramSlider();
           this.partnerSlider();
        },
        homeSlider:function(){
            $('#homeslider').owlCarousel({
                loop: true,
                nav: false,
                autoplay: true,
                animateOut: 'fadeOut',
                dots: true,
                mouseDrag: false,
                touchDrag: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    400: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }
            });

            $('#homeslider').on('change.owl.carousel', function(event) {
                var item = event.item.index - 1;
                //thay doi noi dung xoa class
                $('.slider__text h2').removeClass('animate__fadeInDown');
                $('.slider__text h6').removeClass('animate__fadeInDown');
                $('.slider__text p').removeClass('animate__fadeInDown');
                $('.slider__text a').removeClass('animate__fadeInUp');
                //tim item active add class animate
                $('.owl-item').not('.cloned').eq(item).find('h2').addClass('animate__fadeInDown');
                $('.owl-item').not('.cloned').eq(item).find('h6').addClass('animate__fadeInDown');
                $('.owl-item').not('.cloned').eq(item).find('p').addClass('animate__fadeInDown');
                $('.owl-item').not('.cloned').eq(item).find('a').addClass('animate__fadeInUp');

            });
        },
        trendingSlider:function(){
            $('.trending__slider').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                margin:10,
                responsive: {
                    0: {
                        items: 1
                    },
                    400: {
                        items: 1
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 4
                    }
                }
            });

            var selector = $('.trending__slider');

            $('.my-next-button').click(function() {
                selector.trigger('next.owl.carousel');
            });
            $('.my-prev-button').click(function() {
                selector.trigger('prev.owl.carousel');
            });
        },
        instagramSlider:function(){
            $('.instagram__images-box').owlCarousel({
                loop: true,
                margin: 0,
                autoplay: true,
                dots: false,
                responsive: {
                    0: {
                        items: 2
                    },
                    480: {
                        items: 3
                    },
                    768: {
                        items: 4
                    },
                    992: {
                        items: 6
                    }
                }
            });
        },
        partnerSlider:function(){
            $('.partners__images-box').owlCarousel({
                loop: true,
                margin: 30,
                autoplay: true,
                dots: false,
                responsive: {
                    0: {
                        items: 2
                    },
                    480: {
                        items: 3
                    },
                    768: {
                        items: 4
                    },
                    992: {
                        items: 5
                    }
                }
            });
        }
    }
    sliders.init();
    var products = {
        init:function(){
            this.product();
            this.size();
            this.zoomProduct();
        },
        product:function(){
            $('.product_color_switch span').each(function() {
                var get_color = $(this).attr('data-color');
                $(this).css('background-color', get_color);
            });

            $('.product_color_switch span,.product_size_switch span').on('click', function() {
                $(this).siblings(this).removeClass('active').end().addClass('active');
            });
            $('.plus').on('click', function() {
                if ($(this).prev().val()) {
                    $(this).prev().val(+$(this).prev().val() + 1);
                }
            });
            $('.minus').on('click', function() {
                if ($(this).next().val() > 1) {
                    if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
                }
            });
        },
        size:function(){
            var sizes = document.querySelectorAll('.product_size_switch span');
            sizes.forEach(item => {
                item.addEventListener('click', function() {
                    item.classList.add('active');
                });
            });
        },
        zoomProduct:function(){
            $('#exampleModalCenter').on('shown.bs.modal', function() {
                $('body').addClass('zoom_image');
                var image = $('#product_img');
                //var zoomConfig = {};
                var zoomActive = false;
                zoomActive = !zoomActive;
                if (zoomActive) {
                    if ($(image).length > 0) {
                        $(image).elevateZoom({
                            cursor: 'crosshair',
                            easing: true,
                            gallery: 'pr_item_gallery',
                            zoomType: 'inner',
                            galleryActiveClass: 'active'
                        });
                    }
                } else {
                    $.removeData(image, 'elevateZoom'); //remove zoom instance from image
                    $('.zoomContainer:last-child').remove(); // remove zoom container from DOM
                }
            });
            $('#exampleModalCenter').on('hidden.bs.modal', function() {
                setTimeout(function() {
                    $('body').removeClass('zoom_image');
                    $('body').removeClass('zoom_gallery_image');
                    $('.zoomContainer:last-child').remove(); // remove zoom container from DOM
                    $('.zoomContainer').slice(1).remove();
                }, 100);
            });
        }

    }
    products.init();
    var topBar = {
        init:function(){
            $('.header__top-left >div').click(function() {
                $(this).children('ul').slideToggle();
            });
        }
    }
    topBar.init()
    var modal = {
        init:function(){
          this.modalIntever();
        },
        modalIntever:function(){
            var modalPopUp = function() {
                $(window).on('load', function() {
                    setTimeout(function() {
                        $('#modal-popup').modal('show');
                    }, 4000);
                });
            };
        }
    }
    modal.init()
    new WOW().init();

});