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
    }
  });
  