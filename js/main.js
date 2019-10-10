$('document').ready(function () {

// accordian
    $('.accordion-toggle').on('click', function () {
        $(this).closest('.panel-group').children().each(function () {
            $(this).find('>.panel-heading').removeClass('active');
        });

        $(this).closest('.panel-heading').toggleClass('active');
    });

//initiate WOW JS
    new WOW().init();

//onePageNav
    $('.navbar-nav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 950,
        scrollThreshold: 0.2,
        filter: '',
        easing: 'swing',
        begin: function () {},
        end: function () {},
        scrollChange: function ($currentListItem) {}
    });

//fancybox    
    $(".fancybox").fancybox();

// blur effect
    var el = $('.blur');
    var a = 'blur(';
    var b = ')';
    var c = 'px)';
    var i = 2;

    (function () {
        if (i > -0.5) {
            el.css({
                'filter': "progid: DXImageTransform.Microsoft.Blur(PixelRadius = '2')",
                'filter': `${a}${i}${b}`,
                '- webkit - filter': `${a}${i}${c}`
            });
            i -= 0.5;
            setTimeout(arguments.callee, 60);
        }
    })();

});
