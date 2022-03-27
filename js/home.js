"use strict";
var btnContainer = document.getElementById("kvar");


var btns = btnContainer.getElementsByClassName("meny");


for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function myFunction() {
    var x = document.getElementById("kvar");
    if (x.className === "li") {
      x.className += " responsive";
    } else {
      x.className = "li";
    }
  }


