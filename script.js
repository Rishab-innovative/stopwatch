let timeStamp = [],
  initialValueOnStop,
  initialTime = 0;
let currentTime,
  hours,
  seconds,
  miliSeconds,
  minutes = 0,
  lapMinute,
  interval,
  lapHours,
  lapmilisecond,
  lapSecond;
document.getElementById("stop").style.display = "none";
let lapcurrentTime, lapstartTime;
const startstop = document.getElementById("start");
let count = 0;
function start() {
  if (initialTime == 0) {
    initialTime = Date.now();
    lapstartTime = Date.now();
  } else {
    initialTime = Date.now() - (initialValueOnStop - initialTime);
    lapstartTime = Date.now() - (initialValueOnStop - lapstartTime);
  }
  interval = setInterval(watchcalc, 10);
  document.getElementById("start").style.display = "none";
  document.getElementById("stop").style.display = "inline-block";
  document.getElementById("lapId").style.display = "inline-block";
}

const watchcalc = () => {
  currentTime = Date.now() - initialTime;
  lapcurrentTime = Date.now() - lapstartTime;

  hours = Math.floor(currentTime / 3600000);
  minutes = Math.floor((currentTime % 3600000) / 60000);
  seconds = Math.floor((currentTime % 60000) / 1000);
  miliSeconds = Math.floor((currentTime % 1000) / 10);

  lapHours = Math.floor(lapcurrentTime / 3600000);
  lapMinute = Math.floor((lapcurrentTime % 3600000) / 60000);
  lapSecond = Math.floor((lapcurrentTime % 60000) / 1000);
  lapmilisecond = Math.floor((lapcurrentTime % 1000) / 10);

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (lapHours < 10) {
    lapHours = "0" + lapHours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (lapMinute < 10) {
    lapMinute = "0" + lapMinute;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (lapSecond < 10) {
    lapSecond = "0" + lapSecond;
  }
  if (miliSeconds < 10) {
    miliSeconds = "0" + miliSeconds;
  }
  if (lapmilisecond < 10) {
    lapmilisecond = "0" + lapmilisecond;
  }
  document.getElementById("timer").innerHTML =
    hours + ":" + minutes + ":" + seconds + ":" + miliSeconds;
};

const stop = () => {
  clearInterval(interval);
  initialValueOnStop = Date.now();
  document.getElementById("start").style.display = "inline-block";
  document.getElementById("stop").style.display = "none";
  document.getElementById("lapId").style.display = "none";
};
const lap = () => {
  lapstartTime = Date.now();
  let lapvalue =
    lapHours + ":" + lapMinute + ":" + lapSecond + ":" + lapmilisecond;
  let lapcounter = 0;
  timeStamp.push(lapvalue);
  timeStamp.reverse();
  let lapsHTML = "";
  let lapcount = document.getElementById("laps");
  for (let i = 0; i < timeStamp.length; i++) {
    lapcounter++;
    lapsHTML += "LAP" + lapcounter + "  " + timeStamp[i] + "<br>";
    count++;
  }
  //   lapcount.innerHTML = "LAP" + (i + 1);
  document.getElementById("lapList").innerHTML = lapsHTML;

  timeStamp.reverse();
  lapHours = 0;
  lapMinute = 0;
  lapSecond = 0;
  lapmilisecond = 0;
  lapsHTML.style = "coloumn-reverse";
};

const reset = () => {
  clearInterval(interval);
  (hours = 0), (minutes = 0), (seconds = 0), (miliSeconds = 0);
  initialTime = 0;
  document.getElementById("timer").innerHTML =
    "0" +
    hours +
    ":" +
    "0" +
    minutes +
    ":" +
    "0" +
    seconds +
    ":" +
    "0" +
    miliSeconds;
  document.getElementById("start").style.display = "inline-block";
  document.getElementById("stop").style.display = "none";
  document.getElementById("lapId").style.display = "none";
  document.getElementById("lapList").innerHTML = "";
  timeStamp = [];
};
