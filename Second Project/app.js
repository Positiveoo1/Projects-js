const stop = document.getElementById("stop");
const milliseconds = document.getElementById("milliseconds");
const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");
const hours = document.getElementById("hours");
const start = document.getElementById("start");
const reset = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let interval;

start.addEventListener("click", () => {
  if (interval) clearInterval(interval);

  startTime = Date.now() - elapsedTime;
  interval = setInterval(() => {
    elapsedTime = Date.now() - startTime;

    milliseconds.textContent = Math.floor((elapsedTime % 1000) / 10).toString().padStart(2);
    seconds.textContent = Math.floor(elapsedTime / 1000 % 60).toString().padStart(2, "0");
    minutes.textContent = Math.floor(elapsedTime / (1000 * 60) % 60).toString().padStart(2, "0") + ":";
    hours.textContent = Math.floor(elapsedTime / (1000 * 60 * 60)).toString().padStart(2, "0") + ":";
  }, 1);
});

stop.addEventListener("click", () => {
  clearInterval(interval);
});

reset.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  startTime = 0;
  elapsedTime = 0;
  milliseconds.textContent = "00";
  seconds.textContent = "00";
  minutes.textContent = "00:";
  hours.textContent = "00:";
});
