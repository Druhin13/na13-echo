$(document).ready(function () {

    //go through all the elements with attribute data-date-update=true, get its text which would be in the format of 17.3.24, convert it to make sure all the single digit numbers have a 0 in front of them, and then set the text of the element to the new value
    $("[data-date-update=true]").each(function () {
        let date = $(this).text();
        let dateArray = date.split(".");
        for (let i = 0; i < dateArray.length; i++) {
            if (dateArray[i].length == 1) {
                dateArray[i] = "0" + dateArray[i];
            }
        }
        let newDate = dateArray.join(".");
        $(this).text(newDate);
    });

});