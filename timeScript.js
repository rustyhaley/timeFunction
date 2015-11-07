var inputMin = 1,
    inputMinBreak = 2,
    currentTime = new Date().getTime(),
    endTime = new Date(),
    timeDiv = document.getElementById('time-area'),
    running,
    output;

//UI functions

function render(min, sec) {
  output = min + ":" + sec;

  if(min < 10) {
    output = '0' + min + ":" + sec;
  }
  if(sec < 10) {
    output = '0' + min + ":" + sec;

  }

  timeDiv.innerHTML = output;
}

function update() {
  currentTime = new Date().getTime();

  var minAmt = timeConversion(currentTime).minutes;
  var secAmt = timeConversion(currentTime).seconds;

  render(minAmt, secAmt);


  if(minAmt <=0 && secAmt <=0) {
    startTimer(inputMinBreak);
  }

}

//Calculation functions

function timeConversion(currentTime) {
  var length = (endTime - currentTime);

  return {
      minutes: Math.floor(length/60000),
      seconds: Math.floor((length/1000) % 60)
  }

}


function startTimer(iTime) {
  endTime.setMinutes(endTime.getMinutes() + iTime);

  running = setInterval(update, 1000);

}

startTimer(inputMin);

//Helper functions
