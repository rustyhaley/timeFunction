//Set valid date and define time units
var tTest = Date.parse(new Date()) + 10;

function getTimeRemaining(endTime) {
  var time = Number(endTime) - Number(new Date()),
      seconds = Math.floor((time/1000 % 60)),
      minutes = Math.floor( (time/1000/60) % 60 ),
      hours = Math.floor( (time/(1000*60*60) % 24)),
      days =  Math.floor( time/(1000*60*60*24) );

  return {
    total: time,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };


}

//Pomodoro is displayed on DOM and user can see countdown

function initializeClock (clockObj, endTime) {
  var clock = document.getElementById(clockObj),
  function updateClock() {
        var time = getTimeRemaining(endTime);
        clock.innerHTML = 'days: ' + time.days + '<br>' +
          'hours:' + time.hours + '<br>' +
          'minutes: ' + time.minutes + '<br>' +
          'seconds: ' + time.seconds;

        if(t.total<=0) {
          clearInterval(timeinterval);
        }

  updateClock(); // To avoid delay
  var timeInt = setInterval(updateClock, 1000);

      });

}

initializeClock('clock', tTest);
//When user clicks on clock, it starts or stops after another click

//Set pomodro clock time

//Set break time
