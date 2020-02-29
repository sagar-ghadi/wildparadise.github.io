(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 2000, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click().fadeIn(200);
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

    $('#activities_all').click(function(){
        $('#activities_all_gallery').fadeIn(600);
        $('#activities_water_gallery').fadeOut(800);
        $('#activities_nature_gallery').fadeOut(800);
        $('#activities_nightcamping_gallery').fadeOut(800);
    });
    $('#activities_water').click(function(){
        $('#activities_water_gallery').fadeIn(600);
        $('#activities_all_gallery').fadeOut(800);
        $('#activities_nature_gallery').fadeOut(800);
        $('#activities_nightcamping_gallery').fadeOut(800);
    });
    $('#activities_nature').click(function(){
        $('#activities_nature_gallery').fadeIn(600);
        $('#activities_all_gallery').fadeOut(800);
        $('#activities_water_gallery').fadeOut(800);
        $('#activities_nightcamping_gallery').fadeOut(800);
    });
    $('#activities_night_camping').click(function(){
        $('#activities_nightcamping_gallery').fadeIn(600);
        $('#activities_nature_gallery').fadeOut(800);
        $('#activities_all_gallery').fadeOut(800);
        $('#activities_water_gallery').fadeOut(800);
    });

})(jQuery); 

