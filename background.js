"use strict";
var toggle;

chrome.storage.sync.get("activated", function(obj){
  toggle = obj.activated;
  console.log(toggle);
}); 

var toggleOnOff = function(tab){
  toggle = !toggle;
  if (toggle) { 
    // Change Icon
    // chrome.browserAction.setIcon({path: "on.png", tabId: tab.id});
    // Apply Script + CSS
    chrome.tabs.executeScript(tab.id, {file: "dracula.js"});
  } else {
    // Change Icon
    // chrome.browserAction.setIcon({path: "off.png", tabId: tab.id});
    // Apply Script + CSS
    chrome.tabs.executeScript(tab.id, {file: "normal.js"});
  }
};

chrome.browserAction.onClicked.addListener(toggleOnOff);