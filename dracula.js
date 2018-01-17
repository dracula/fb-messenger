"use strict";

var createStylesheetElement = function(){
	let a    = chrome.extension.getURL("dracula.css"),
        link = document.createElement('link');

	link.type = 'text/css';
	link.rel = 'stylesheet';
	link.id = "draculaMessenger";
	link.href = a;

	return link;
}

if (document.getElementById('draculaMessenger')){
	console.log("Already exists.");	
} else {
	let nightMessengerStylesheet = createStylesheetElement();
	document.head.appendChild(nightMessengerStylesheet);
    chrome.storage.sync.set({ activated : true }, function(){
      console.log("Activated");
    });   
	console.log("Dracula theme activated.");