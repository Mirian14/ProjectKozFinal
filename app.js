function currentTime() {
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let meridiem = "AM";


  if (hour > 12) {
    meridiem = "PM";
  }

  /* Converting a number to a string */
  hour = (hour < 10) ? "0" + hour.toString() : hour;
  minutes = (minutes < 10) ? "0" + minutes.toString() : minutes;
  seconds = (seconds < 10) ? "0" + seconds.toString() : seconds;

  let time = hour + ":" + minutes + ":" + seconds + " " + meridiem;

  document.getElementById("clock").innerText = time;
  let t = setTimeout(function () { currentTime() }, 1000);

}

currentTime()

/*****************************************/

// This is where you set the countdown Date
const countdownToDate = new Date("December 31, 2023 23:59:59").getTime();

// Need to countdown every second
const countdownClock = setInterval(function () {
  // The following gets current date and time
  const currentTime = new Date().getTime();

  // Substract the time remaining between current time and the countdown date
  const differenceBetweenTime = countdownToDate - currentTime;

  // Calculate days, hours, minutes, and seconds remaining
  const days = Math.floor(differenceBetweenTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((differenceBetweenTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((differenceBetweenTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((differenceBetweenTime % (1000 * 60)) / 1000);

  
  document.querySelector(".count-down-clock").innerHTML = `${days}d: ${hours}h: ${minutes}m: ${seconds}s`;

  // Message to display after countdown completes
  if (differenceBetweenTime < 0) {
    clearInterval(countdownClock);
    document.querySelector(".count-down-clock").innerHTML = "Countdown expired!";
  }
}, 1000);

/****************************************/