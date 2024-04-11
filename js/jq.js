$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $(".navbar").addClass("header-fix");
    }
    else {
        $(".navbar").removeClass("header-fix");
    }
})