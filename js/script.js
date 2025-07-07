$(function () {
    $('.menu>li').mouseover(function () {
        $(this).children('.sub').stop().slideDown();
    }).mouseout(function () {
        $('.sub').stop().slideUp();
    });
});

function slide() {
    $('.slide').stop().animate({ marginLeft: '-100%' }, 'slow', function () {
        $('.slide li:first').appendTo('.slide');
        $('.slide').css({ marginLeft: 0 });
    })
}
setInterval(slide, 3000)

$(function () {
    $('.roombox').hover(function () {
        $(this).children('.room_text').stop().animate({ 'opacity': '1', 'top': '30%' }, 'slow');
    }, function () {
        $(this).children('.room_text').stop().animate({ 'opacity': '0.5', 'top': '80%' }, 'slow');
    });
});

function csprev() {
    $('.customer_content:last').prependTo('.customer_content_wrap');
    $('.customer_content_wrap').css('margin-left', '-100%');
    $('.customer_content_wrap').stop().animate({ marginLeft: 0 }, 800);
}

function csSlide() {
    $('.customer_content_wrap').stop().animate({ marginLeft: '-100%' }, 'slow', function () {
        $('.customer_content:first').appendTo('.customer_content_wrap');
        $('.customer_content_wrap').css({ marginLeft: 0 });
    })
}
setInterval(csSlide, 3000)

$('.fa-arrow-left').click(function () {
    csprev();
});

$('.fa-arrow-right').click(function () {
    csSlide();
});

// $(function(){
//     $('.menu>li').click(function(){
//         $('.sub').stop().slideUp();
//         $(this).find('.sub').stop().slideToggle();
//     });
// });

$(function () {
    $('.fa-bars').click(function () {
        $('nav').slideToggle
            ();
    });
})
