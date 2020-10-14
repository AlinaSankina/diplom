$(document).ready(function () {

    new WOW({animateClass: 'animate__animated',}).init();


    $('.gallery-item').magnificPopup({
        type: 'image'
        // other options
    });


    $("#accordion").accordion();


    var helpers = {
        addZeros: function (n) {
            return (n < 10) ? +n : '' + n;
        }
    };

    function sliderInit() {
        var $slider = $('#masters-group');
        $slider.each(function () {

            var $sliderParent = $(this).parent();
            $('#masters-group').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                responsive: [
                    {
                        breakpoint: 1231,
                        settings: {
                            infinite: true,
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            dots: false,
                        }
                    },
                    {
                        breakpoint: 505,
                        settings: {
                            infinite: true,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: false,
                        }
                    }
                ],
            });

            if ($(this).find('.master').length > 1) {
                $(this).siblings('.slides-numbers').show();
            }

            $(this).on('afterChange', function (event, slick, currentSlide) {
                $sliderParent.find('.slides-numbers .active').html(helpers.addZeros(currentSlide + 1));
            });

            var sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
            $sliderParent.find('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));

        });
    };

    sliderInit();


    $('#gallery-img').slick({
        centerMode: true,
        dots: true,
        infinite: true,
        centerPadding: '250px',
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1730,
                settings: {
                    centerPadding: '200px',
                }
            },
            {
                breakpoint: 1601,
                settings: {
                    centerPadding: '100px',
                }
            },
            {
                breakpoint: 1410,
                settings: {
                    centerPadding: '70px',
                }
            },
            {
                breakpoint: 1330,
                settings: {
                    centerMode: true,
                    centerPadding: '200px',
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 1230,
                settings: {
                    centerMode: true,
                    centerPadding: '150px',
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 1150,
                settings: {
                    centerMode: true,
                    centerPadding: '100px',
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 1108,
                settings: {
                    centerMode: true,
                    centerPadding: '150px',
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 980,
                settings: {
                    centerMode: true,
                    centerPadding: '100px',
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 902,
                settings: {
                    centerMode: true,
                    centerPadding: '150px',
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    centerMode: true,
                    centerPadding: '100px',
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 690,
                settings: {
                    centerMode: true,
                    centerPadding: '50px',
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 505,
                settings: {
                    centerMode: true,
                    centerPadding: '100px',
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 430,
                settings: {
                    centerMode: true,
                    centerPadding: '50px',
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            },
        ]
    });


    $('#burger').click(() => {
        $('#header').toggleClass('menu-open');
    });

    $('#header #menu').click(() => {
        $('#header').removeClass('menu-open');
    })


    $('.open-popup-link').click(() => {
        $('#reservation-container').css('display', 'flex');
    });

    $('#reservation-cancel-close, #reservation-cancel, #reservation-container').click((e) => {
        if (e.target.id === 'reservation-container' || e.target.id === 'reservation-cancel-close'
            || e.target.id === 'reservation-cancel') {
            $('#reservation-container').hide();
        }
    });


    let input = $('.input');
    console.log(input);
    let error = $('.error_input');
    console.log(error);
    let button = $('#submit');
    let loader = $('#loader');

    button.click(function () {
        $('.error_input').hide();
        input.css('border-color', '#721163');
        let hasError = false;
        for (i = 0; i < input.length; i++) {
            if (!input[i].value) {
                error[i].style.display = 'block';
                input[i].style.borderColor = 'red';
                hasError = true;
            }
        }

        let name = $('#name');
        let phone = $('#form_phone');
        let service = $('#form_service');
        let dateAndTime = $('#time_date');

        if (!hasError) {
            loader.css('display', 'flex');
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name.val() + '&service=' + service.val() + '&dateAndTime=' + dateAndTime.val() + '&phone=' + phone.val(),
                success: () => {
                    $('#reservation-sent').css('display', 'flex');
                    $('#reservation-content').css('display', 'none');
                },
            })
            .done(function (message) {
                    loader.hide();
                })
            }
    });



    let inputFaq = $('#faq_phone');
    console.log(inputFaq);
    let errorFaq = $('.error_faq_input');
    console.log(errorFaq);
    let buttonFaq = $('#submit_faq');

    buttonFaq.click(function () {
        $('.error_faq_input').hide();
        inputFaq.css('border-color', '#721163');
        let hasError = false;
        for (i = 0; i < inputFaq.length; i++) {
            if (!inputFaq[i].value) {
                errorFaq[i].style.display = 'block';
                inputFaq[i].style.borderColor = 'red';
                hasError = true;
            };
        }

        let phone = $('#faq_phone');

        if (!hasError) {
            loader.css('display', 'flex');
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'phone=' + phone.val(),
                success: () => {
                    $('#thanks').css('display', 'block');
                    $('#form').css('display', 'none');
                },
            })
            .done(function (message) {
                    loader.hide();
                })
            }
    });


});