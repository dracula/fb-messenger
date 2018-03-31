"use strict";
var toggle;

chrome.storage.sync.get("activated", function(obj){
  toggle = obj.activated;
  console.log(toggle);
}); 

var toggleOnOff = function(tab){
  toggle = !toggle;
  if (toggle) { 
    chrome.tabs.executeScript(tab.id, {file: "src/js/dracula.js"});
  } else {
    chrome.tabs.executeScript(tab.id, {file: "src/js/normal.js"});
  }
};

// Add listener to toggle
chrome.browserAction.onClicked.addListener(toggleOnOff);