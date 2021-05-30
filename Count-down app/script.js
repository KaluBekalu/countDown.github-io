const sec = 1000;
const min = sec * 60;
const hr = min * 60;
const day = hr * 24;
var d = "";
var status = "";

document.querySelector(".error").innerHTML = "";
const takeEvent = () => {
  var eventName = prompt("Please enter your event name");

  if (eventName == null || eventName == "") {
    document.querySelector(".title").innerHTML = "Days left for my event";
  } else {
    document.querySelector(".title").innerHTML ="Days left for "+ eventName;
    }
};

const cntdwn = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(d).getTime();
  const now = new Date().getTime();
  const gap = date - now;

  // Calculation
  const days = Math.floor(gap / day);
  const hours = Math.floor((gap % day) / hr);
  const minutes = Math.floor((gap % hr) / min);
  const seconds = Math.floor((gap % min) / sec);

  if (status === "high") {
    document.querySelector(".TimeDay").innerHTML = days;
    document.querySelector(".TimeHour").innerHTML = hours;
    document.querySelector(".TimeMinute").innerHTML = minutes;
    document.querySelector(".TimeSecond").innerHTML = seconds;
    document.querySelector(".error").innerHTML = "";
    
  } else if (status === "low") {
    document.querySelector(".TimeDay").innerHTML = "--";
    document.querySelector(".TimeHour").innerHTML = "--";
    document.querySelector(".TimeMinute").innerHTML = "--";
    document.querySelector(".TimeSecond").innerHTML = "--";
    document.querySelector(".error").innerHTML = "Date Invalid! Please select a valid date from the future!";
  }
};
// takeEvent();

setInterval(cntdwn, 1000);

const setDate = (e) => {
  d = e.target.value;
  const date = new Date(d).getTime();
  const now = new Date().getTime();
  const gap = date - now;
  const days = Math.floor(gap / day);
  if (days <= 0) {
    status = "low";
  } else {
    status = "high";
  }
};
const input = document.querySelector(".date");
input.addEventListener("input", setDate);
