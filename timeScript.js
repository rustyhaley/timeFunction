//Set valid date and define time units
var tTest = Date.parse(new Date()) + 10;
var time = 10;
var div = document.getElementById('clock');

// The countdown function

function timer() {
  div.innerHTML = time;
  if (time <= 0) {
    div.innerHTML = "stopped";
    clearInterval(running);

  }

  time -= 1;
}

var running = setInterval(timer, 1000);

//When user clicks on clock, it starts or stops after another click

//Set pomodro clock time

//Set break time
