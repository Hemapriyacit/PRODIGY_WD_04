$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleclass('fa-times');
        $('header').toggleclass('toggle');

    });

    $(window).one('scroll load',function(){
        $('#menu').removeclass('fa-times');
        $('header').removeclass('toggle');

        if( $(window).scrollTop() > 0){
            $('.top').show();
        }else{
            $('.top').hide();
        }

    });

    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
          

        scrollTop : $($(this).attr('href')).offset().top,
        },
        500,
        'linear'
        );

    });

});