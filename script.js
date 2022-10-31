
let hours = document.getElementById("hours");
let minuts = document.getElementById("minuts");
let seconds = document.getElementById("seconds");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let Interval;
let i = 0;
let j = 0;
let k = 0;

start.onclick = function () {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 1000);
}

stop.onclick = function () {
  clearInterval(Interval);
}

reset.onclick = function () {
  clearInterval(Interval);
  seconds.textContent = "00";
  minuts.textContent = "00";
  hours.textContent = "00";
}



function startTimer() {
  i++
  if (i <= 9) {
    seconds.textContent = "0" + i;
  }
  else if (i <= 60) {
    seconds.textContent = i;
    if (seconds.textContent == "60") {
      seconds.textContent = "00";
      i = 0;
      j++
      if (j <= 9) {
        minuts.textContent = "0" + j;
      }
      else if (j <= 60) {
        minuts.textContent = j;
        if (minuts.textContent === "60") {
          j = 0;
          k++
          if (k <= 9) {
            hours.textContent = "0" + k;
          }
          else {
            hours.textContent = k;
          }
          minuts.textContent = "00";
        }
      }
    }
  }
}
