$(document).ready(function() {

    $(window).bind('load', function() {
        $("#preloader").fadeOut();
        $("#preloader").delay(2000).fadeOut("slow");
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
            anchors: ['block01', 'block02', 'block03', 'block04', 'block05', 'block06', 'block07', 'block08', 'block09']
        });

    }

    $(".popup, .certificate-img").fancybox({
        padding: '0'
    });
});