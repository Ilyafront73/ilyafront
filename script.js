$(document).ready(function () {

    // scroll width
    function scrollWidth() {
        var div = $('<div>').css({
            position: 'absolute',
            top: '0px',
            left: '0px',
            width: '100px',
            height: '100px',
            visibility: 'hidden',
            overflow: 'scroll',
        });

        $('body').eq(0).append(div);

        var width = div.get(0).offsetWidth - div.get(0).clientWidth;

        div.remove();

        return width;
    }
    var scrollBarWidth = parseInt(scrollWidth());


    $("body").on("click", ".about-info__btn", function () {
        $(".about-info__text").fadeIn();
        $(".about-info__btn").remove();

    });

    $("body").on("click", ".btn-js", function () {
        $("header, main, footer").css('filter', "blur(3px)");
        $(".popup__container").fadeIn();
        $("body").addClass("overflow");
        $(".site-container").css({ "padding-right": scrollBarWidth + "px" });

        $(document).mouseup(function (e) {
            var popup = $(".popup__container")
            if (e.target != popup[0] && popup.has(e.target).length === 0) {
                $(".popup__container").fadeOut();
                $("header, main, footer").css('filter', "none");
                $("body").removeClass("overflow");
                $(".site-container").css({ "padding-right": "0" });

            }
        });

        $('input[type="tel"]').inputmask({ "mask": "+7 (999) 999-9999" }); //specifying options

        $('form').each(function () {
            $(this).validate({
                errorPlacement(error, element) {
                    return true;
                },
                focusInvali: false,
                rules: {
                    tel: {
                        required: true,
                    },
                    name: {
                        required: true,
                    },
                    email: {
                        required: true,

                    }
                },


                submitHandler(form) {
                    let th = $(form);

                    $.ajax({
                        type: "POST",
                        url: "mail.php",
                        data: th.serialize(),
                    }).done(() => {
                        th.trigger('reset');
                    });
                    return false;
                }



            })
        });

    });

    $("body").on("click", ".popup__close", function () {
        $(".popup__container").fadeOut();
        $("header, main, footer").css('filter', "none");
        $("body").removeClass("overflow");
        $(".site-container").css({ "padding-right": "0" });


    });

    $("body").on("click", ".header__burger", function () {
        if ($(window).width() <= 1024) {
            $(".nav__list").toggleClass("header__menu");
            $(".header__nav").toggle();
            $(".header__burger").toggleClass("active-menu-icon");
            $('body, html').toggleClass("no-scroll");
        }
    });

    $("body").on("click", ".nav__link", function () {
        if ($(window).width() <= 1024) {
        $(".header__menu").fadeOut();
        $(".header__burger").toggleClass("active-menu-icon");
            $('body, html').removeClass("no-scroll");
        }
    });

    $("body").on("click", ".js__link_first", function () {
        if ($(window).width() > 1024) {
            var firstLink = $(".services").offset().top;
            $("html,body").animate({
                scrollTop: firstLink
            }, 500)
        }
    });

    $("body").on("click", ".js__link_second", function () {
        if ($(window).width() > 1024) {
            var firstLink = $(".portfolio").offset().top;
            $("html,body").animate({
                scrollTop: firstLink
            }, 500)
        }
    });

    $("body").on("click", ".js__link_third", function () {
        if ($(window).width() > 1024) {
            var firstLink = $(".criteria").offset().top;
            $("html,body").animate({
                scrollTop: firstLink
            }, 600)
        }
    });


});

