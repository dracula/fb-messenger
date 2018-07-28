"use strict";

var createStylesheetElement = function(){
	let a    = chrome.extension.getURL("src/css/dracula.css"),
        link = document.createElement('link');

	link.type = 'text/css';
	link.rel = 'stylesheet';
	link.id = "draculaMessenger";
	link.href = a;

	return link
}

if (document.getElementById('draculaMessenger')){
	console.log("Theme is already active.");	
} else {
	// check if empty before hand to avoid error
	// add custom colour to messages sent by me
	var myMessages = document.getElementsByClassName("_3i_m");
	var customColour = myMessages[myMessages.length - 1].getAttribute("threadcustomcolor");

	myMessages = Array.prototype.slice.call(myMessages);
	myMessages.map(message => message.style.setProperty('--custom-colour', customColour));

	// add custom colour to text next to icons in Conversation Information > Options
	var sharedFiles = document.getElementsByClassName("_fy2");
	sharedFiles = Array.prototype.slice.call(sharedFiles);
	sharedFiles.map(file => file.style.setProperty('--custom-colour', customColour));

	let draculaStylesheet = createStylesheetElement();
	document.head.appendChild(draculaStylesheet);
    chrome.storage.sync.set({ activated : true }, function(){
      console.log("Activated");
    });   
    console.log("Dracula theme activated.");
}