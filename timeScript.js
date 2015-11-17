var currentTime = new Date().getTime(),
  endTime = new Date(),
  timeDiv = document.getElementById('time-area'),
  breakDiv = document.getElementById('break-area'),
  resetButton = document.getElementById('reset'),
  workMinAdd = document.getElementById('workMinAdd'),
  workMinMinus = document.getElementById('workMinMinus'),
  breakMinAdd = document.getElementById('breakMinAdd'),
  breakMinMinus = document.getElementById('breakMinMinus'),
  workTime = document.getElementById('worktimer'),
  breakTime = document.getElementById('breaktimer'),
  workInput = 25,
  breakInput = 5,
  running = -1,
  output,
  workbreak = true;

//UI functions(DOM)

workTime.innerHTML = workInput;
breakTime.innerHTML = breakInput;

workMinAdd.addEventListener("click", function() {
  workInput += 1;
  workTime.innerHTML = workInput;

});

workMinMinus.addEventListener("click", function() {
  if (workInput > 1) {
    workInput -= 1;
    workTime.innerHTML = workInput;
    console.log(workInput);
  } else {
    alert("You cannot have zero work time.");

  }
});

breakMinAdd.addEventListener("click", function() {
  breakInput += 1;
  breakTime.innerHTML = breakInput;

});

breakMinMinus.addEventListener("click", function() {
  if (breakInput > 1) {
    breakInput -= 1;
    breakTime.innerHTML = breakInput;

  } else {
    alert("Why are you trying to do? Work yourself to death? You can't have zero break time.");

  }
});

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

  timeDiv.innerHTML = output;

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

function endTimeCalculation(inputTime) {
  return endTime.setMinutes(endTime.getMinutes() + inputTime);

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
  endTimeCalculation(iTime);

  running = setInterval(update, 100);
  console.log("new timer id: ", running);
}

//Helper functions
function switchTimer(inputTime) {
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
