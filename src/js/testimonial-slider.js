$(document).ready(function () {
    //if #testimonial-slider exists
    if ($("#testimonial-slider").length > 0) {
        //hide both #testimonial-slider-next and #testimonial-slider-prev
        $("#testimonial-slider-next").hide();
        $("#testimonial-slider-prev").hide();

        //if #testimonial-slider-next-proxy is clicked, click on #testimonial-slider-next
        $("#testimonial-slider-next-proxy").click(function () {
            $("#testimonial-slider-next").click();
        });

        //if #testimonial-slider-prev-proxy is clicked, click on #testimonial-slider-prev
        $("#testimonial-slider-prev-proxy").click(function () {
            $("#testimonial-slider-prev").click();
        });

        // auto slider calculation

        var autoClickInterval;

        function startAutoClick() {
            // Clear existing interval to avoid duplicates
            if (autoClickInterval) {
                clearInterval(autoClickInterval);
            }

            // Start a new interval for auto-clicking
            autoClickInterval = setInterval(function () {
                $("#testimonial-slider-next-proxy").click();
            }, 7500);
        }

        // Initial start of the auto-clicking process
        startAutoClick();

        // Reset the auto-clicking process when user clicks next or prev buttons
        $("#testimonial-slider-next-proxy, #testimonial-slider-prev-proxy").on(
            "click",
            function () {
                startAutoClick();
            }
        );

        // Trigger the first click as soon as the document is ready
        $("#testimonial-slider-next-proxy").click();
    }
});