"use strict";

chrome.storage.sync.get("activated", function(obj){
  let initialToggleState;
  //TODO: remove
  console.log("Hello developper! Check out the repo at https://github.com/dracula/fb-messenger")
  initialToggleState = obj.activated;

  if (initialToggleState) { 
    let a     = chrome.extension.getURL("src/css/dracula.css"),
        link  = document.createElement('link');

    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.id = "draculaMessenger";
    link.href = a;

    document.head.appendChild(link);
  } 
});
