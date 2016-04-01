$(document).ready(function() {
    $logo = $('.static-logo');
    $(window).scroll(function() {
        $top = $(window).scrollTop();
        $translatePx = $top / -4;
        $logo.css('transform', 'translateY(' + $translatePx + 'px)');
    });
});
