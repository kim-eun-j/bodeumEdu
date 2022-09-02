$(function () {
    //fullpage**********************************************
    var typingBool = true;
    var myFull = new fullpage("#fullpage", {
        sectionsColor: ["", "", "", "", "", "", "#0a2b4a"],
        navigation: true,
        navigationTooltips: ["BANNER", "INVESTIGATE", "EDUCATION", "APPLY", "REVIEW", "SNS", "FOOTER"],
        showActiveTooltip: true,
        afterLoad: function (anchorLink, index) {
            if (index.index == 1) {
                typingBool = false;
                tpingStart();
            } else {
                typingBool = true;
            }
            deleteLog = true;
        },
    })

    //banner***************************************************
    var showBanner = 0;

    var obj = $(".banner>.b1").clone();

    $(".banner").append(obj);


    var liCount = $(".banner>li").length;
    console.log(liCount);

    $(".banner").width(liCount * 100 + "%");

    $(".banner>li").width(100 / liCount + "%");

    function moveBanner() {
        $(".banner").stop().animate({
            "margin-left": -showBanner * 100 + "%"
        }, 1000)

        if (showBanner == 5) {
            $(".pager>li").eq(0).addClass("active").siblings().removeClass("active")
        }
        else {
            $(".pager>li").eq(showBanner).addClass("active").siblings().removeClass("active");
        }
    }

    $(".pager>li").click(function () {
        showBanner = $(this).index();
        moveBanner();
    })

    // var timer = setInterval(autoBanner,8000);

    // function autoBanner(){
    //     if(showBanner<=1){
    //         showBanner++;
    //     }
    //     else{
    //         showBanner=0;
    //     }
    //     moveBanner();
    // }

    //text효과***********************************************
    var typingIdx = 0;
    var liIndex = 0;
    var liLength = $(".typing-txt>ul>li").length;
    var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
    let tyInt;
    let ison = 0;

    function tpingStart() {
        ison++;
        if (ison == 1) {
            if (typingBool == false) {
                typingBool = true;
                typingTxt = typingTxt.split("");
                tyInt = setInterval(typing, 100);
            }
        }
    }


    function typing() {
        $(".typing ul li").removeClass("on");
        $(".typing ul li").eq(liIndex).addClass("on");
        if (typingIdx < typingTxt.length) {
            $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]);
            typingIdx++;
        } else {
            if (liIndex < liLength - 1) {

                liIndex++;

                typingIdx = 0;
                typingBool = false;
                typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();

                clearInterval(tyInt);

                setTimeout(function () {

                    tyInt = setInterval(typing, 100);
                }, 1000);
            } else if (liIndex == liLength - 1) {

                clearInterval(tyInt);
            }
        }
    }
})