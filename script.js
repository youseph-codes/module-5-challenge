function updateTime() {
    let today = moment();

    $("#currentDay").text(today.format("dddd, MMM Do YYYY, h:mm:ss"));

    let rightNow = moment().format("kk");
    for (let i = 0; i < theScheduleElArray.length; i++) {
        theScheduleElArray[i].removeClsss('future past present');

        if (rightNow > theScheduleElArray[i].data("hour")) {
            theScheduleElArray[i].addClass("past");

        } else if (rightNow === theScheduleElArray[i].attr("data-hour")) {
            theScheduleElArray[i].addClass("present");

        } else {
            theScheduleElArray[i].addClass("future");
        }
    }
}