/* Hands-on Project 7-4
Author: Carlo Nandino 
Date: 03/06/2023
Filename: script.js */

"use strict";
var delivSummary = document.getElementById("deliverTo") 
var delivInfo = {};

function processDeliveryInfo() {
  var prop;
  delivInfo.name = document.getElementById("nameinput").value;
  delivInfo.addr = document.getElementById("addrinput").value;
  delivInfo.city = document.getElementById("cityinput").value;
  delivInfo.email = document.getElementById("emailinput").value;
  delivInfo.phone = document.getElementById("phoneinput").value;

  for (prop in delivInfo) {
    delivSummary.innerHTML += "<p>" + delivInfo[prop] + "</p>";
  }
}
 
  function previewOrder() {
    processDeliveryInfo();
    document.querySelector("section").style.display = "block";
    document.getElementById("deliverTo").style.display = "block";
  }

function createEventListener() {
    var previewButton = document.getElementById("previewBtn");
    if (previewButton.addEventListener) {
        previewButton.addEventListener("click", previewOrder, false);
    } else if (previewButton.attachEvent) {
        previewButton.attachEvent("onclick", previewOrder);
    }
}

if (window.addEventListener) {
    window.addEventListener("load", createEventListener, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListener);
}