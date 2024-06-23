// background.js

// Example: Listen for browser startup event
chrome.runtime.onStartup.addListener(() => {
    console.log("Extension started!");
  });
  
  // Example: Listen for tab creation
  chrome.tabs.onCreated.addListener((tab) => {
    console.log("New tab created:", tab);
  });
  
  // Example: Listen for messages from content scripts
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Message received from content script:", message);
  
    // Example: Send a response back to the content script
    sendResponse({ response: "Message received successfully!" });
  });
  
  // background.js
 chrome.storage.sync.get(['fontFamily', 'fontSize'], function(items) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'changeFont', fontFamily: items.fontFamily, fontSize: items.fontSize });
    });
  });
  
  