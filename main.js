$(function () {

    var $content = $('.site-content'),
        $footer = $('.site-footer'),
        $logo = $('.logo');

    $content
        .css({
            top: '-20px',
            opacity: 0
        })
        .animate({
            opacity: 1.0,
            top: 0
        }, 600);

    $footer
        .css({
            bottom: '-100px',
            opacity: 0
        })
        .animate({
            opacity: 1.0,
            bottom: '0'
        }, 600);

    $logo.hide().fadeIn(2500);

});
