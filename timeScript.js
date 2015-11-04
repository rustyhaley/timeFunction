var milliseconds = 120 * 1000;
var timeDiv = document.getElementById('time-area');
var running = setInterval(timer, 1000);

function timer() {
  var minAmt = timeConversion(milliseconds).minutes;
  var secAmt = timeConversion(milliseconds).seconds;
  timeDiv.innerHTML = minAmt + ':' + secAmt;
  console.log(timeDiv.innerHTML = minAmt + ':' + secAmt);
  if (minAmt < 10) {
    timeDiv.innerHTML = '0' + minAmt + ":" + secAmt;
  }
  if (milliseconds <= 0) {
    secAmt = 0;
    clearInterval(running);


  }

  milliseconds -= 1000;
}

function timeConversion(rawTime) {
  return {
      minutes: Math.floor(milliseconds/(60000)),
      seconds: Math.floor(milliseconds/1000)
  }

}
