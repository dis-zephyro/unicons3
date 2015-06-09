// подсказки для форм (можноу удалить)

$(function(){
    var mr_input="input[type=text]";
    $(mr_input).each(function() {    $(this).data('stext',$(this).val());                                               });
    $(mr_input).focus(function(){	 $(this).val()==$(this).data('stext')  ?   $(this).val(''): "0";	               	});
    $(mr_input).blur(function() {    $(this).val().length<=0               ?   $(this).val($(this).data('stext')): "0"; });
});


$(document).ready(function() {

    $(window).bind('load', function() {
        $("#preloader").fadeOut();
    });

    // Анимация
    var Android = navigator.userAgent.search(/Android/i);
    var iPhone = navigator.userAgent.search(/iPhone/i);
    var iPad = navigator.userAgent.search(/iPad/i);
    if(Android != -1 || iPhone != -1 || iPad != -1) {

        $('head').append('<link rel="stylesheet" type="text/css" href="css/mobile.css" />'); //подключение файла mobile.css если мобильник

    } else {

        $('head').append('<link rel="stylesheet" type="text/css" href="js/vendor/jquery.fullPage/jquery.fullPage.css" />'); //подключение файла jquery.fullPage.css если не мобильник

        $('#page').fullpage({
            css3: true,
            verticalCentered: false,
            navigation: true,
            slidesNavigation: false,
            navigationPosition: 'right',
            showActiveTooltip: true,
            responsive: 980,
            anchors: ['block01', 'block02', 'block03', 'block04', 'block05', 'block06', 'block07', 'block08', 'block09'],
            navigationTooltips: ['Первая', 'Вторая', 'Третья', 'Четвертая', 'Пятая', 'Шестая', 'Седьмая', 'Восьмая', 'Контакты']
        });

    }

    $(".popup").fancybox({
        padding: '0'
    });

    $(".reply__link").fancybox({
        padding: '0'
    });
});

// Слайдер с отзывами

$('.reply__item').slick({
    arrows: false,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1
});

$('.reply__nav.prev').click(function(){
    $('.reply__item').slick('slickPrev');
});

$('.reply__nav.next').click(function(){
    $('.reply__item').slick('slickNext');
});