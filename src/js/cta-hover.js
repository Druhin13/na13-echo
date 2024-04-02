$(document).ready(function () {
    let defaultStylesCta1 = [];
    let defaultStylesCta2 = [];

    // Initialize default styles for .cta1 elements
    $(".cta1").each(function (index) {
        let bgColor = $(this).css("background-color");
        let textColor =
            $(this).children().length > 0 ?
            $(this).children().css("color") :
            $(this).css("color");
        defaultStylesCta1.push({
            bgColor,
            textColor
        });
    });

    // Initialize default styles for .cta2 elements
    $(".cta2").each(function (index) {
        let bgColor = $(this).css("background-color");
        let textColor =
            $(this).children().length > 0 ?
            $(this).children().css("color") :
            $(this).css("color");
        defaultStylesCta2.push({
            bgColor,
            textColor
        });
    });

    // Hover functionality for .cta1 that doesnt have the class no-link
    $(".cta1:not(.no-link)").hover(
        function () {
            let index = $(this).index(".cta1:not(.no-link)");
            let {
                bgColor,
                textColor
            } = defaultStylesCta1[index];
            $(this).css("background-color", textColor);
            if ($(this).children().length > 0) {
                $(this).children().css("color", bgColor);
            } else {
                $(this).css("color", bgColor);
            }
        },
        function () {
            let index = $(this).index(".cta1:not(.no-link)");
            let {
                bgColor,
                textColor
            } = defaultStylesCta1[index];
            $(this).css("background-color", bgColor);
            if ($(this).children().length > 0) {
                $(this).children().css("color", textColor);
            } else {
                $(this).css("color", textColor);
            }
        }
    );

    // Hover functionality for .cta2
    $(".cta2:not(.no-link)").hover(
        function () {
            let index = $(this).index(".cta2");
            let {
                bgColor,
                textColor
            } = defaultStylesCta2[index];
            $(this).css("background-color", textColor);
            if ($(this).children().length > 0) {
                $(this).children().css("color", bgColor);
            } else {
                $(this).css("color", bgColor);
            }
        },
        function () {
            let index = $(this).index(".cta2");
            let {
                bgColor,
                textColor
            } = defaultStylesCta2[index];
            $(this).css("background-color", bgColor);
            if ($(this).children().length > 0) {
                $(this).children().css("color", textColor);
            } else {
                $(this).css("color", textColor);
            }
        }
    );
});