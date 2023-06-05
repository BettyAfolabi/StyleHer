"use strict";
let tips = document.getElementsByClassName("div-toggle");
let tipCount = document.getElementsByClassName("tipcount");
let currentTip = 0;
function showNextDiv() {
  tips[currentTip].style.display = "none";
  tipCount[currentTip].style.display = "none";

  currentTip++;

  if (currentTip >= tips.length) {
    currentTip = 0;
  }
  if (currentTip >= tipCount.length) {
    currentTip = 0;
  }

  tips[currentTip].style.display = "block";
  tipCount[currentTip].style.display = "block";
  tips[currentTip].style.transition = "all 3s ease-in-out";
  tips[currentTip].style.transitionDelay = "2s";
}

let change = document.getElementById("tap");
change.addEventListener("click", showNextDiv);
