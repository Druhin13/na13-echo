$(document).ready(function () {

    //hide both by default
    $('#case-study-showcase-2col').hide();
    $('#case-study-showcase-3col').hide();


    //check how many .case-study-card elements are on the page
    let caseStudyCardCount = $('.case-study-card').length;
    console.log("Number of case study cards: " + caseStudyCardCount);
    //if there are more than 2 .case-study-card elements on the page, then hide #case-study-showcase-2col and show #case-study-showcase-3col
    if (caseStudyCardCount > 2) {
        $('#case-study-showcase-2col').hide();
        $('#case-study-showcase-3col').show();
    } else {
        $('#case-study-showcase-2col').show();
        $('#case-study-showcase-3col').hide();
    }
});