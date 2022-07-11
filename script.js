let updateTime = function() {
    document.getElementById('currentDay').innerHTML=moment().format("dddd, MMM Do, h:mm:ss a"
    );
};

setInterval(
    updateTime, 1000
);