var nineAm = moment().set({"hour":9, "minute":0, "second":0})
var tenAm = moment().set({"hour":10, "minute":0, "second":0})
var elevenAm = moment().set({"hour":11, "minute":0, "second":0})
var twelvePm = moment().set({"hour":12, "minute":0, "second":0})
var onePm = moment().set({"hour":13, "minute":0, "second":0})
var twoPm = moment().set({"hour":14, "minute":0, "second":0})
var threePm = moment().set({"hour":15, "minute":0, "second":0})
var fourPm = moment().set({"hour":16, "minute":0, "second":0})
var fivePm = moment().set({"hour":17, "minute":0, "second":0})


const currentDate = moment()

function currentDay (){
    var currentMoment = moment().format('LLLL')
    var dayElement = document.getElementById("currentDay");
    dayElement.innerText = currentMoment;
}


function getTense(moment, id) {
    var textElement = document.getElementById(id);

    if(moment < currentDate) {
        textElement.className = "description past"
        return;
    }


    if(moment.hour() === currentDate.hour()) {
        textElement.className = "description present"
        return;
    }

    if(moment > currentDate) {
        textElement.className = "description future"
        return;
    }
}


function getUserInputFromLocalStorage(textAreaID) {
    var userInput = localStorage.getItem(textAreaID)
    if (userInput){
        document.getElementById(textAreaID).value = userInput    
    }
    else {
        document.getElementById(textAreaID).value = ""
    }
}


function saveBtn(textAreaID){
    var userInput = document.getElementById(textAreaID).value;
    localStorage.setItem(textAreaID, userInput);
}


function clearBtn(){
    localStorage.clear();
    getUserInputFromLocalStorage("nineAmElement")
    getUserInputFromLocalStorage("tenAmElement")
    getUserInputFromLocalStorage("elevenAmElement")
    getUserInputFromLocalStorage("twelvePmElement")
    getUserInputFromLocalStorage("onePmElement")
    getUserInputFromLocalStorage("twoPmElement")
    getUserInputFromLocalStorage("threePmElement")
    getUserInputFromLocalStorage("fourPmElement")
    getUserInputFromLocalStorage("fivePmElement")
}

document.getElementById('clear').addEventListener("click", function (){clearBtn()})

document.getElementById('9amSAVE').addEventListener("click", function () { saveBtn("nineAmElement")})
document.getElementById('10amSAVE').addEventListener("click", function () { saveBtn("tenAmElement")})
document.getElementById('11amSAVE').addEventListener("click", function () { saveBtn("elevenAmElement")})
document.getElementById('12pmSAVE').addEventListener("click", function () { saveBtn("twelvePmElement")})
document.getElementById('1pmSAVE').addEventListener("click", function () { saveBtn("onePmElement")})
document.getElementById('2pmSAVE').addEventListener("click", function () { saveBtn("twoPmElement")})
document.getElementById('3pmSAVE').addEventListener("click", function () { saveBtn("threePmElement")})
document.getElementById('4pmSAVE').addEventListener("click", function () { saveBtn("fourPmElement")})
document.getElementById('5pmSAVE').addEventListener("click", function () { saveBtn("fivePmElement")})

getTense(nineAm, "nineAmElement")
getTense(tenAm, "tenAmElement")
getTense(elevenAm, "elevenAmElement")
getTense(twelvePm, "twelvePmElement")
getTense(onePm, "onePmElement")
getTense(twoPm, "twoPmElement")
getTense(threePm, "threePmElement")
getTense(fourPm, "fourPmElement")
getTense(fivePm, "fivePmElement")

getUserInputFromLocalStorage("nineAmElement")
getUserInputFromLocalStorage("tenAmElement")
getUserInputFromLocalStorage("elevenAmElement")
getUserInputFromLocalStorage("twelvePmElement")
getUserInputFromLocalStorage("onePmElement")
getUserInputFromLocalStorage("twoPmElement")
getUserInputFromLocalStorage("threePmElement")
getUserInputFromLocalStorage("fourPmElement")
getUserInputFromLocalStorage("fivePmElement")

currentDay();