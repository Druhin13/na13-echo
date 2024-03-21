$(document).ready(function () {
  if ($("#faq-wrapper").length > 0) {
    let initialHeights = [];

    $(".faq-wrapper").each(function (index) {
      let faqQuestionId = "faq-question-wrapper-" + index;
      $(this).find(".faq-question-wrapper").attr("id", faqQuestionId);

      initialHeights[index] = $(this)
        .find(".faq-question-wrapper")
        .outerHeight();
      $(this).height(initialHeights[index]);
    });

    $(".faq-question-wrapper").click(function () {
      let $parent = $(this).closest(".faq-wrapper");
      let index = $parent.index();
      let $img = $(this).find("img"); // Find the img element

      if ($parent.hasClass("expanded")) {
        // Collapse and rotate img back to 0 degrees
        $parent.height(initialHeights[index]).removeClass("expanded");
        $img.css("transform", "rotate(0deg)");
      } else {
        // Expand and rotate img by 45 degrees
        let expandedHeight =
          $(this).outerHeight() +
          $parent.find(".faq-answer-wrapper").outerHeight();
        $parent.height(expandedHeight).addClass("expanded");
        $img.css("transform", "rotate(135deg)");
      }
    });

    // faq color extraction
    //check if there's an element with attribute data-faq-bg="true"
    if ($("[data-faq-bg=true]").length > 0) {
      //store the bg color value of the first element with attribute data-faq-bg="true"
      let faqBg = $("[data-faq-bg=true]").css("background-color");
      console.log("FAQ background color: " + faqBg);
      let faqText = $("[data-faq-bg=true]").css("color");
      console.log("FAQ text color: " + faqText);

      //if there are elements with attribute data-text-color-extract, then set their text color to the value of faqText
      if ($("[data-text-color-extract]").length > 0) {
        $("[data-text-color-extract]").css("color", faqText);
      }
      //if there are elements with attribute data-bg-color-extract, then set their bg color to the value of faqBg
      if ($("[data-bg-color-extract]").length > 0) {
        $("[data-bg-color-extract").css("background-color", faqText);
      }
    }
  }
});
