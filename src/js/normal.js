"use strict";

// Removes the stylesheet element
document.getElementById('draculaMessenger').parentNode.removeChild(document.getElementById('draculaMessenger'));

// Turn off sync preference
chrome.storage.sync.set({ activated : false  }, function() {
  console.log("Deactivated."); 
});