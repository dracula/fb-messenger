"use strict";

chrome.storage.sync.get("activated", function(obj){
  let initialToggleState;
  console.log("Initial check.");
  initialToggleState = obj.activated;

  if (initialToggleState) { 
    let a     = chrome.extension.getURL("nightmode.css"),
        link  = document.createElement('link');

    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.id = "nightMessenger";
    link.href = a;

    document.head.appendChild(link);
  } 
});