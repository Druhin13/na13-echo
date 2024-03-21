$(document).ready(function () {
    if ($("[data-quote-update=true]").length > 0) {
      $("[data-quote-update=true]").each(function () {
        var quoteElement = $(this);
  
        // Add closing quotation mark
        var quoteText = quoteElement.text() + "”";
        quoteElement.text(quoteText);
  
        // Create and style the opening quotation mark element
        var startQuoteSpan = $("<span class='start-quote'>“</span>");
  
        // Apply styles from the quote element to match its appearance
        startQuoteSpan.css({
          fontFamily: quoteElement.css("font-family"),
          fontSize: quoteElement.css("font-size"),
          fontStyle: quoteElement.css("font-style"),
          fontWeight: quoteElement.css("font-weight"),
          color: quoteElement.css("color"),
          marginTop: "0rem",
        });
  
        // Insert the opening quote before the quote element
        quoteElement.before(startQuoteSpan);
  
        //wait for 500ms
        //check if the quote element also has an attribute of data-quote-mask=true
        if ($(this).attr("data-quote-mask") == "true") {
          //click on #testimonial-slider
          setTimeout(function () {
            console.log("this quote is inside a testimonial slider");
            //store the start quote's width
            var startQuoteWidth = $(".start-quote").outerWidth() * -1 - 3;
            //find the closest .testimonial-slide-mask and adjust its left margin
            $(".testimonial-slide-mask").css("margin-left", startQuoteWidth);
            //find all the elements with data-quote-rest="true" and adjust its left margin
            var restQuoteWidth = $(".start-quote").outerWidth() + 3;
            $("[data-quote-rest=true]").css("margin-left", restQuoteWidth);
          }, 500);
        } else {
          setTimeout(function () {
            // Adjust the left margin of the start quote based's parent on its width
            //store the start quote's width
            var startQuoteWidth = $(".start-quote").outerWidth() * -1 - 3;
            // Adjust the right margin of all the start quote's parent
            $(".start-quote").parent().css("margin-left", startQuoteWidth);
          }, 500);
        }
      });
    }
  });
  