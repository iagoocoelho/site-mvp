// ADD GREY RECTANGLE CLASS
$(document).ready(function() {
    $('<span>', {
        class: 'grey-rectangle',
    }).appendTo('section#services .container');
    $(".grey-rectangle").addClass("fixed");

    $('#redirect #mvp-link').click(function (e){
        e.preventDefault();
        $('#redirect').hide();
    });

});

// RESPONSIVE PHONE MENU
$('.menu-toggle').click(function() {

    $('ul').toggleClass('opening');
    $(this).toggleClass('open');
});

$('.close-menu').click(function() {

    $('ul').removeClass('opening');
    $('.menu-toggle').removeClass('open');
});

// GameLab1 EXPAND & COMPRESS

$( "#btn-gamelab1" ).click(function() {
    $("#gamelab1").toggle("slow");

    if ($('#btn-gamelab1 button').attr('class') == 'fas fa-images') {
        $('#btn-gamelab1 button').removeClass('fas fa-images').addClass('fas fa-times');
        $('#btn-gamelab1 button span').addClass('display-none');
    } else {
        $('#btn-gamelab1 button').removeClass('fas fa-times').addClass('fas fa-images');
        $('#btn-gamelab1 button span').removeClass('display-none');
    }
});

// eFEST EXPAND & COMPRESS

$( "#btn-efest" ).click(function() {
    $("#efest").toggle("slow");

    if ($('#btn-efest button').attr('class') == 'fas fa-images') {
        $('#btn-efest button').removeClass('fas fa-images').addClass('fas fa-times');
        $('#btn-efest button span').addClass('display-none');
    } else {
        $('#btn-efest button').removeClass('fas fa-times').addClass('fas fa-images');
        $('#btn-efest button span').removeClass('display-none');
    }
});

// CPUE 2019 EXPAND & COMPRESS

$( "#btn-cpue2019" ).click(function() {
    $("#cpue2019").toggle("slow");

    if ($('#btn-cpue2019 button').attr('class') == 'fas fa-images') {
        $('#btn-cpue2019 button').removeClass('fas fa-images').addClass('fas fa-times');
        $('#btn-cpue2019 button span').addClass('display-none');
    } else {
        $('#btn-cpue2019 button').removeClass('fas fa-times').addClass('fas fa-images');
        $('#btn-cpue2019 button span').removeClass('display-none');
    }
});