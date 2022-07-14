const currentDate = moment()

function currentDay () {
    var currentMoment = moment().format('LLLL')
    var dayElement = document.getElementById("currentDay");
    dayElement.innerText = currentMoment;
}