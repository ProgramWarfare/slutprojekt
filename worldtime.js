"use strict";
function Time() {
  var date = new Date(); 
  date.setTime(date.getTime() + (60 * 60 * 0));

 
  // Creating object of the Date class
 
  // Get current hour
  
  var hour = date.getUTCHours();
  // Get current minute
  var minute = date.getUTCMinutes();
  // Get current second
  var second = date.getUTCSeconds();
  // Variable to store AM / PM
  var period = "";
  // Updating hour, minute, and second
  // if they are less than 10
  hour = update(hour);
  minute = update(minute);
  second = update(second);
  // Adding time elements to the div
  document.getElementById("digital-clock").innerText = hour + " : " + minute + " : " + second + " " + period;
  document.getElementById("Digital").innerText = hour + " : " + minute + " : " + second + " " + period;
  document.getElementById("Digi").innerText = hour + " : " + minute + " : " + second + " " + period;
  document.getElementById("D").innerText = hour + " : " + minute + " : " + second + " " + period;
  document.getElementById("D1").innerText = hour + " : " + minute + " : " + second + " " + period;
  document.getElementById("D2").innerText = hour + " : " + minute + " : " + second + " " + period;
  document.getElementById("D3").innerText = hour + " : " + minute + " : " + second + " " + period;
  document.getElementById("D4").innerText = hour + " : " + minute + " : " + second + " " + period;
  document.getElementById("D5").innerText = hour + " : " + minute + " : " + second + " " + period;
  document.getElementById("D6").innerText = hour + " : " + minute + " : " + second + " " + period;
  document.getElementById("D7").innerText = hour + " : " + minute + " : " + second + " " + period;
  document.getElementById("D8").innerText = hour + " : " + minute + " : " + second + " " + period;
  document.getElementById("D9").innerText = hour + " : " + minute + " : " + second + " " + period;
  document.getElementById("D0").innerText = hour + " : " + minute + " : " + second + " " + period;
  document.getElementById("D11").innerText = hour + " : " + minute + " : " + second + " " + period;
  document.getElementById("D12").innerText = hour + " : " + minute + " : " + second + " " + period;
  document.getElementById("D13").innerText = hour + " : " + minute + " : " + second + " " + period;
  document.getElementById("D14").innerText = hour + " : " + minute + " : " + second + " " + period;


    // Set Timer to 1 sec (1000 ms)
  setTimeout(Time, 1000);
 }
  // Function to update time elements if they are less than 10
  // Append 0 before time elements if they are less than 10
 function update(t) {
  if (t < 10) {
  return "0" + t;
  }
  else {
  return t;
  }
 }
 Time();

 
