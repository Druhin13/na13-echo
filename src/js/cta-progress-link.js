$(document).ready(function () {

  $("[data-progress-link=true]").css("cursor", "pointer");
  // $("[data-progress-link=true]").css("transition", "transform 4s");

  let link; // Declare link outside the hover function
  let timer; // Declare timer outside the hover function

  // Function to scale down the element
  function scaleDownElement(element) {
    // element.css("transform", "scale(0.975)");
  }

  // Function to scale up the element
  function scaleUpElement(element) {
    // element.css("transform", "scale(1)");
  }

  //go through all the elements with .cta3.no-border, and add an attribute of data-link-trigger to the link
  $(".cta3.no-border").each(function () {
    // let link = $(this).attr("href");
    //find the parent element with attribute data-progress-link=true and add an attribute of data-link-trigger to the link
    let link = $(this).closest("[data-progress-link=true]").attr("href");
    $(this).attr("data-link-trigger", link);
  });

  //if an element with attribute data-progress-link=true is hovered
  $("[data-progress-link=true]").hover(
    function () {
      // Store the href attribute of .cta3.no-border element and remove it
      let ctaNoBorder = $(this).find(".cta3.no-border");
      link = $(this).closest("[data-progress-link=true]").attr("href");
      ctaNoBorder.removeAttr("href");
      //add an attribute of data-link-trigger to the link
      ctaNoBorder.attr("data-link-trigger", link);

      // Trigger a click event on .cta3.no-border
      // ctaNoBorder[0].click();

      $(
        ctaNoBorder[0].click(function (event) {
          event.preventDefault(); // Prevent default action to ensure the link isn't followed immediately.
          event.stopPropagation(); // Stop the event from bubbling up to parent elements.
        })
      );

      // Set a timer to redirect after 4 seconds
      timer = setTimeout(function () {
        window.location.href = link;
      }, 4000);

      // Scale down the element over 4 seconds
      $(this).css("transition", "transform 4s");
      scaleDownElement($(this));
    },
    function () {
      // If mouse leaves the element, restore the href attribute of .cta3.no-border
      let ctaNoBorder = $(this).find(".cta3.no-border");
      // ctaNoBorder[0].click();

      $(
        ctaNoBorder[0].click(function (event) {
          event.preventDefault(); // Prevent default action to ensure the link isn't followed immediately.
          event.stopPropagation(); // Stop the event from bubbling up to parent elements.
        })
      );

      ctaNoBorder.attr("href", link);

      // Clear the timer
      clearTimeout(timer);

      // Scale up the element immediately
      $(this).css("transition", "none");
      scaleUpElement($(this));
    }
  );

  // Add a click event listener for .cta3.no-border
  $(".cta3.no-border").click(function (event) {
    // Prevent default action to ensure the link isn't followed immediately
    event.preventDefault();
    // Add your custom click behavior here if needed
  });

  // Add event listeners for hover on elements with [data-progress-link=true]
  $("[data-progress-link=true]").hover(
    function () {
      // Apply transform animation on hover to the img element inside
      $("img", this).css({
        transition: "transform 4s",
        transform: "scale(1.1)",
      });
    },
    function () {
      // Remove transform and transition on hover out from the img element inside
      $("img", this).css({
        transition: "transform 0.25s",
        transform: "scale(1)",
      });
    }
  );

});