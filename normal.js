"use strict";

// Removes the stylesheet element
document.getElementById('nightMessenger').parentNode.removeChild(document.getElementById('nightMessenger'));

// Turn off sync preference
chrome.storage.sync.set({ activated : false  }, function() {
  console.log("Deactivated."); 
});