// Script to handle user interactions in the popup interface
const fontFamilySelect = document.getElementById('font-family-select');
const fontSizeRange = document.getElementById('font-size-range');
const fontSizeValue = document.getElementById('font-size-value');

fontFamilySelect.addEventListener('change', () => {
  // Change font family on user selection
  document.body.style.fontFamily = fontFamilySelect.value;
});

fontSizeRange.addEventListener('input', () => {
  // Change font size dynamically and update display
  const fontSize = fontSizeRange.value + 'px';
  document.body.style.fontSize = fontSize;
  fontSizeValue.textContent = fontSize;
});


// Popup script to handle button click
document.getElementById('changeFontBtn').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {file: 'content.js'});
    });
});


// Find all elements with a specific class (e.g., .article-content)
const elements = document.querySelectorAll(".article-content");

// Loop through elements and set their font styles
elements.forEach(element => {
  element.style.fontFamily = "your_desired_font";
  // Set other font properties like size, weight, etc.
});


//test speech

document.getElementById("readAloud").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "getSelection" });
  
      if (window.getSelection().toString().trim() !== "") {
      // Get selected text
      const selectedText = window.getSelection().toString();
      // Use browser TTS API (compatibility check needed)
      if (typeof speechSynthesis !== "undefined" && speechSynthesis.speak) {
        const utterance = new SpeechSynthesisUtterance(selectedText);
        speechSynthesis.speak(utterance);
      } else {
        alert("Text-to-speech not supported on your browser");
      }
    }
    });
  
    
  });