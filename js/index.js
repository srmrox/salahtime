function getPosition(num) {
    num = num / 24 * 100;
    num = +(Math.round(num + "e+2") + "e-2");

    return (num.toString() + "%");
}

function getDuration(start, end) {
    var time = end - start;
    return getPosition(time);
}

var latitude = 34;
var longitude = 73;
var altitude = 0;

var onSuccess = function (position) {

    latitude = Math.round(position.coords.latitude);
    longitude = Math.round(position.coords.longitude);
    altitude = Math.round(position.coords.altitude);
};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: ' + error.code + '\n' +
          'message: ' + error.message + '\n');
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);

prayTimes.setMethod('Karachi');

var date = new Date(); // today

var times = prayTimes.getTimes(date, [latitude, longitude], (date.getTimezoneOffset() / 60 * -1), 0, 'Float');

var fajarStart = times.fajr;
var fajarEnd = times.sunrise;

var zuhurStart = times.dhuhr;
var zuhurEnd = times.asr;

var asrStart = times.asr;
var asrEnd = times.sunset;

var maghribStart = times.maghrib;
var maghribEnd = times.isha;

var ishaStart = times.isha;
var ishaEnd = times.imsak;

var d = new Date();

var nowStart = d.getHours() + (d.getMinutes() / 60);

document.getElementById('now').style.top = getPosition(nowStart);

document.getElementById('fajar').style.top = getPosition(fajarStart);
document.getElementById('fajar').style.height = getDuration(fajarStart, fajarEnd);

document.getElementById('zuhur').style.top = getPosition(zuhurStart);
document.getElementById('zuhur').style.height = getDuration(zuhurStart, zuhurEnd);

document.getElementById('asr').style.top = getPosition(asrStart);
document.getElementById('asr').style.height = getDuration(asrStart, asrEnd);

document.getElementById('maghrib').style.top = getPosition(maghribStart);
document.getElementById('maghrib').style.height = getDuration(maghribStart, maghribEnd);

document.getElementById('ishaNight').style.top = getPosition(ishaStart);
document.getElementById('ishaNight').style.height = getDuration(ishaStart, 24);

document.getElementById('ishaDay').style.top = getPosition(0);
document.getElementById('ishaDay').style.height = getDuration(0, ishaEnd);

document.getElementById('sunrise').style.top = getPosition(times.sunrise);
document.getElementById('sunset').style.top = getPosition(times.sunset);