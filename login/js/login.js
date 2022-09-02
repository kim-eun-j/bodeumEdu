$(function(){
    //mobile menu
    $("#nav>li>a").click(function () {
        $(this).next().slideToggle(300)
            .parent()
            .siblings()
            .children(".sub").slideUp(300);
        $(this).parents().toggleClass("active")
            .siblings().removeClass("active")
    })

    //nav 나오고 들어가고
    $(".ham").on("click", function () {
        $("nav, .leftGnb, .close img").stop().animate({
            left: 0
        }, 500)
    })
    $(".close").on("click", function () {
        $("nav, .leftGnb, .close img").stop().animate({
            left: -100 + "%"
        }, 500)
    })

    var button = false;
    $(".icon").on("click", function () {
        if (button == false) {
            $(".rightGnb").stop().animate({
                right: 0
            }, 500)
            button = true;
        }
        else {
            $(".rightGnb").stop().animate({
                right: -100 + "%"
            }, 500)
            button = false;
        }

    })
})