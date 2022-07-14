var nineAM =  moment().set({"hour":9, "minute":0, "second":0})
var tenAM =  moment().set({"hour":10, "minute":0, "second":0})
var elevenAM =  moment().set({"hour":11, "minute":0, "second":0})
var twelvePM =  moment().set({"hour":12, "minute":0, "second":0})
var onePM =  moment().set({"hour":13, "minute":0, "second":0})
var twoPM =  moment().set({"hour":14, "minute":0, "second":0})
var threePM =  moment().set({"hour":15, "minute":0, "second":0})
var fourPM =  moment().set({"hour":16, "minute":0, "second":0})
var fivePM =  moment().set({"hour":17, "minute":0, "second":0})

const currentDate = moment()

function currentDay () {
    var currentMoment = moment().format('LLLL')
    var dayElement = document.getElementById("currentDay");
    dayElement.innerText = currentMoment;
}