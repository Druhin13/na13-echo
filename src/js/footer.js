// Reset scroll top
history.scrollRestoration = "manual";
$(window).on("beforeunload", function () {
    $(window).scrollTop(0);
});

$(document).ready(function () {
    //copyright year
    let copyContent = "© Echo ";
    var copyYear = copyContent + new Date().getFullYear();
    $("#copyright-year")[0].innerHTML = copyYear;

    //footer menu hover interaction
    //if user hovers over .body2.white.link, add .not-hovered class to all its siblings within its parent and remove .not-hovered class from itself
    $(".body2.white.link").hover(
        function () {
            $(this).siblings().addClass("not-hovered");
            $(this).removeClass("not-hovered");
        },
        function () {
            $(this).siblings().removeClass("not-hovered");
        }
    );

    //footer height adjustment
    footerHeight();

    //delete all the elements with attribute data-webflow-debugger=true
    $("[data-webflow-debugger=true]").remove();

    //get the bg color of #footer-top, and set the bg color of body to that value
    let footerTopBg = $("#footer-top").css("background-color");
    $("body").css("background-color", footerTopBg);

    //get the bg color of #nav-bar
    let navBg = $("#nav-bar").css("background-color");

    //create a new css color variable named --swatches--footercustom and set it to the value of footerTopBg
    document.documentElement.style.setProperty(
        "--swatches--footercustom",
        footerTopBg
    );
    //create a new css color variable named --swatches--navcustom and set it to the value of navBg
    document.documentElement.style.setProperty("--swatches--navcustom", navBg);

    //if the window is resized, call footerHeight
    $(window).resize(function () {
        footerHeight();
    });

    function footerHeight() {
        //get the outer height of #footer, and set the min-height of #footer-height to that value
        let footerHeight = $("#footer").outerHeight();
        $("#footer-height").css("min-height", footerHeight);
        // console.log(footerHeight);
    }


    //console log the scroll position as the user scrolls
    $(window).scroll(function () {
        footerAreaCalc();
    });

    function footerAreaCalc() {


        //get the outer height of body
        let bodyHeight = $("body").outerHeight();
        // console.log(bodyHeight);
        let footerHeightNew = $("#footer").outerHeight();
        // console.log(footerHeightNew);
        let footerAreaNeeded = $("#footer").outerHeight() * 2;
        // console.log("Footer Area Needed = " + footerAreaNeeded);

        // console.log("Current Scroll Position = " + $(window).scrollTop());
        // console.log("Needed Scroll Position = " + (bodyHeight - footerAreaNeeded));

        if ($("#text-header-top").length) {
            //as soon as the user scrolls past (bodyHeight - footerAreaNeeded), hide #text-header-top, but if the user scrolls back up, show #text-header-top
            if ($(window).scrollTop() > bodyHeight - footerAreaNeeded) {
                $("#text-header-top").hide();
                $("#footer").show();
                // console.log("Header hidden");
                // console.log("Footer shown");
            } else {
                $("#text-header-top").show();
                $("#footer").hide();
                // console.log("Header shown");
                // console.log("Footer hidden");
            }
        }

        // //check if the user is at the top of the page or bottom of the page
        // if ($(window).scrollTop() > ($(document).height() - $(window).height())) {
        //     console.log("user is at the bottom of the page");
        //     //get the value of attribute data-end-bg of body, and set the bg color of body to that value
        //     let endBg = $('body').attr('data-end-bg');
        //     $('body').css('background-color', endBg);
        //     $('#page-wrapper').css('background-color', endBg);
        //     $('#footer-top').css('background-color', endBg);
        //     document.documentElement.style.setProperty('--swatches--footercustom', endBg);
        //     console.log(endBg);
        // }

        if ($(window).scrollTop() == 0 || $(window).scrollTop() < 0) {
            console.log("user is at the top of the page");
            //get the value of attribute data-start-bg of body, and set the bg color of body to that value
            let startBg = $("body").attr("data-start-bg");
            $("body").css("background-color", startBg);
            $("#page-wrapper").css("background-color", startBg);
            $("#footer-top").css("background-color", startBg);
            document.documentElement.style.setProperty(
                "--swatches--footercustom",
                startBg
            );
            // console.log(startBg);
        } else {
            // console.log("user is not at the top of the page");
            //get the value of attribute data-end-bg of body, and set the bg color of body to that value
            let endBg = $("body").attr("data-end-bg");
            $("body").css("background-color", endBg);
            $("#page-wrapper").css("background-color", endBg);
            $("#footer-top").css("background-color", endBg);
            document.documentElement.style.setProperty(
                "--swatches--footercustom",
                endBg
            );
            // console.log(endBg);
        }
    }

    footerAreaCalc();
});