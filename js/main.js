$(document).ready(function () {
    $(function () {

        $(".whoami").typed({
            strings: [" ^3000 whoami"],
            typeSpeed: 0,
            showCursor: true,
            contentType: 'text',
            startDelay: 10,
            callback: function () {
                setTimeout(function () {
                    $("#answhoami").removeClass("hide");
                    $("#pwd").removeClass("hide");
                    $("#whoami").find(".typed-cursor").hide();
                }, 3000);
            },
            preStringTyped: function () {
                setTimeout(function () {
                    $("#whoami").removeClass("hide");
                }, 700);
            }
        });

        $(".pwd").typed({
            strings: [" ^7000 pwd"],
            typeSpeed: 100,
            showCursor: true,
            contentType: 'text',
            startDelay: 10,
            showCursor: true,
            callback: function () {
                setTimeout(function () {
                    $("#anspwd").removeClass("hide")
                    $("#pwd").find(".typed-cursor").hide();
                    $("#cv").removeClass("hide");
                }, 3000);
            }
        });


        $(".catcv").typed({
            strings: [" ^14000 cat cv"],
            typeSpeed: 50,
            showCursor: true,
            contentType: 'text',
            startDelay: 10,
            showCursor: true,
            callback: function () {
                $("#cv").find(".typed-cursor").hide();
                $("#catcv-ans").removeClass("hide");
                $("#endDiv").removeClass("hide");
                $("#footer").removeClass("hide");
            }

        });

        $(".endDiv").typed({
            strings: [" "],
            typeSpeed: 0,
            showCursor: true,
            contentType: 'text',
            startDelay: 10,
            showCursor: true,
            callback: function () {
            }

        });
    });
});