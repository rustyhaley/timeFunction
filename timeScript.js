var currentTime = new Date().getTime(),
  endTime = new Date(),
  timeDiv = document.getElementById('time-area'),
  breakDiv = document.getElementById('break-area'),
  workDiv = parseInt(document.getElementById("worktimer").innerHTML),
  breakDiv = parseInt(document.getElementById("breaktimer").innerHTML),
  resetButton = document.getElementById('reset'),
  running = -1,
  output,
  workbreak = true;


//UI functions(DOM)
resetButton.addEventListener("click", function() {
  stopTimer(running);
  startTimer(
    Number(document.getElementById("worktimer").innerHTML)
  );
  workbreak = true;
});

function render(min, sec, div) {
  var output;

  output = min + ":" + sec;
  if (min < 10) {
    output = '0' + min + ":";
  } else {
    output = min + ":";
  }
  if (sec < 10) {
    output += '0' + sec;
  } else {
    output += sec;
  }

  div.innerHTML = output;

}

function update() {
  currentTime = new Date().getTime();

  var minAmt = timeConversion(currentTime).minutes;
  var secAmt = timeConversion(currentTime).seconds;
  if (workbreak) {
    render(minAmt, secAmt, timeDiv);
  } else {
    render(minAmt, secAmt, breakDiv);
  }
  // render(minAmt, secAmt, timeDiv);
  if (minAmt <= 0 && secAmt <= 0) {
    switchTimer(document.getElementById("breaktimer").innerHTML);
  }

}

//Calculation functions

function timeConversion(currentTime) {
  currentTime = new Date();
  var length = (endTime - currentTime);
  return {
    minutes: Math.floor(length / 60000),
    seconds: Math.floor((length / 1000) % 60)
  }

}

function stopTimer(r) {
  console.log("remove timer id ", r);
  clearInterval(r);
  running = -1;
}

function startTimer(iTime) {
  if (running > 0) {
    stopTimer(running);
  }
  endTime = new Date();
  //add one minute
  endTime.setSeconds(endTime.getSeconds() + iTime + 1);

  running = setInterval(update, 100);
  console.log("new timer id: ", running);
}

//startTimer(inputMin);

//Helper functions
function switchTimer(inputTime) {
  //var minAmt = timeConversion(currentTime).minutes;
  //var secAmt = timeConversion(currentTime).seconds;
  //render(minAmt, secAmt, breakDiv);
  if (workbreak) {
    workbreak = false;
    stopTimer(running);
    startTimer(
      Number(document.getElementById("breaktimer").innerHTML)
    );
  } else {
    stopTimer(running);

  }
}
