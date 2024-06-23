// content.js
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'changeFont') {
      document.body.style.fontFamily = message.fontFamily || 'Arial';
      document.body.style.fontSize = message.fontSize || '16px';
    }
  });
  
  // Content script to change font on webpages
function changeFont() {
    // Select all elements on the page
    var elements = document.querySelectorAll('*');

    // Change font family for each element
    elements.forEach(function(element) {
        element.style.fontFamily = 'Arial, sans-serif'; // Change font family here
    });
}

// Call the changeFont function when the extension is activated
changeFont();