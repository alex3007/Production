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

});
