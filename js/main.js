!function() {


    var $header = $('header:first');
    var headerBottom;
    var lastUpdate = -Infinity;

    var $overview = $('.overview');
    var $document = $(document);
    var isFixed = false;
    var adjustFixed = function() {
        var now = +new Date();
        var scrollTop = $document.scrollTop();
        if (now - lastUpdate > 500) {
            headerBottom = $header[0].getBoundingClientRect().bottom + scrollTop;
            lastUpdate = now;
        }
        if (isFixed) {
            if (scrollTop < headerBottom) {
                isFixed = false;
                $overview.removeClass('fixed');
            }
        } else {
            if (scrollTop >= headerBottom) {
                isFixed = true;
                $overview.addClass('fixed');
            }
        }
    };
    adjustFixed();
    $document.on('scroll', adjustFixed);

    $document.ready(function(){
        $('#nav').onePageNav();
        $(window).trigger('scroll.onePageNav');

        $('a[href^="http"]').attr('target','_blank');

        $('.toggle').click(function(){
            $('.overview').toggleClass('open');
        });
    });
}();
