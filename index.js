let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.querySelector(".timerDisplay");
let int = null;

//event handler for start button
document.getElementById("startTimer").addEventListener("click", () => {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displayTimer, 10);
});

//event handler for pause button
document.getElementById("pauseTimer").addEventListener("click", () => {
  clearInterval(int);
});

//event handler for rest button
document.getElementById("resetTimer").addEventListener("click", () => {
  clearInterval(int);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  timerRef.innerHTML = "00 : 00 : 00 : 000 ";
});

//display Timer function to caluclate and display accurate time int the display bar
function displayTimer() {
  //increase miliseconds by 10 automatically initialy
  milliseconds += 10;
  //rest ms, sec, mins, hours 0 when they reach 1000 and 60 resp and increase the count of the next bogger unit of time
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  //below used logic uses a ternary operator to check if the time units are in single digits (leser than 10) appends extra zero ("0") in the front of it, in case of miliseconds appends dubel zeros ("00")
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;

  timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}
