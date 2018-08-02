jQuery(function($) {
    $(document).ready(function(){
        $('.slickslider').slick({
                dots: true,
        });

        $('.counterup-text span').counterUp({
            delay: 1,
            time: 200
        });
    });
});

$('.counter-value').niceNumber({
    // auto resize the number input
    autoSize: true,
// the number of extra character
    autoSizeBuffer: 1,
// custom button text
    buttonDecrement: '-',
    buttonIncrement: "+",
// 'around', 'left', or 'right'
    buttonPosition: 'around'
});



