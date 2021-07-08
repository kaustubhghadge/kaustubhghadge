$(document).ready(function () {
    $(function () {

$('.blog_index').typed({
    strings: [" ^3000 cat posts"],
    typeSpeed: 0,
    showCursor: true,
    contentType: 'text',
    startDelay: 10,
    callback: function () {
        setTimeout(function () {
            $("#posts").removeClass("hide");
            $("#ls").find(".typed-cursor").hide();
        }, 3000);
    },
    preStringTyped: function () {
        setTimeout(function () {
            $("#ls").removeClass("hide");
        }, 700);
    }
});


})});



