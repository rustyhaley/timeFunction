var inputMin = 1,
    currentTime = new Date().getTime(),
    endTime = new Date(),
    timeDiv = document.getElementById('time-area'),
    running;

//UI functions

function render(min, sec) {

  timeDiv.innerHTML = min + ':' + sec;

  if(min < 10) {
    timeDiv.innerHTML = '0' + min + ":" + sec;
  }
  if(sec < 10) {
    timeDiv.innerHtml = '0' + min + ":" + sec;

    console.log(timeDiv.innerHTML = min + ':' + sec);
  }
}

function update() {
  currentTime = new Date().getTime();

  var minAmt = timeConversion(currentTime).minutes;
  var secAmt = timeConversion(currentTime).seconds;

  console.log(minAmt + secAmt);
  render(minAmt, secAmt);


  if(minAmt <=0 && secAmt <=0) {
    clearInterval(running);
  }

}

//Calculation functions

function timeConversion(rawTime) {
  var length = (endTime - rawTime);
  return {
      minutes: Math.floor(length/600000),
      seconds: Math.floor((length/1000) % 60)
  }

}


function startTimer() {
  endTime.setMinutes(endTime.getMinutes() + inputMin);

  running = setInterval(update, 1000);

}

startTimer();

//Helper functions
  //Break timer function which runs after the "work" timer function   finishes
