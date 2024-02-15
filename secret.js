function authenticate() {
    dispatchEvent
   const answer = prompt("On your 13th birthday, what gift did I give you?");
   if (answer === "wallmate") {
     initializeApp();
   } else {
     alert("Incorrect answer. Please enter your answer without any capital letters, spaces (e.g chocolatebox) and double-check for spelling errors.");
     authenticate(); 
   }
 }
 
 function initializeApp() {
   const inputText = document.getElementById('inputText');
   const encodeButton = document.querySelector('.primary');
   const decodeButton = document.querySelector('.secondary');
 
   inputText.removeAttribute("disabled");
   encodeButton.removeAttribute("disabled");
   decodeButton.removeAttribute("disabled");
 }
 
 function simulateTyping(callback) {
   const outputDiv = document.createElement('div');
   document.body.appendChild(outputDiv);
   outputDiv.style.marginLeft = '10px'; /* Add left margin */
   outputDiv.style.marginRight = '10px'; /* Add right margin */
 
   const text = callback();
   let index = 0;
 
   function type() {
     outputDiv.innerHTML += text.charAt(index);
     index++;
     if (index < text.length) {
       setTimeout(type,45);
     }
   }
 
   type();
 }
 
 function encodeText() {
   const inputText = document.getElementById('inputText').value.toLowerCase();
   let outputText = '';
 
   for (let i = 0; i < inputText.length; i++) {
     const charCode = inputText.charCodeAt(i);
 
     if (charCode >= 97 && charCode <= 122) {
       const encodedCharCode = 219 - charCode;
       outputText += String.fromCharCode(encodedCharCode);
     } else {
       outputText += inputText[i];
     }
   }
 
   return outputText;
 }
 
 function decodeText() {
   const inputText = document.getElementById('inputText').value.toLowerCase();
   let outputText = '';
 
   for (let i = 0; i < inputText.length; i++) {
     const charCode = inputText.charCodeAt(i);
 
     if (charCode >= 97 && charCode <= 122) {
       const decodedCharCode = 219 - charCode;
       outputText += String.fromCharCode(decodedCharCode);
     } else {
       outputText += inputText[i];
     }
   }
 
   return outputText;
 }
 


 //////


 
 // Check authentication when the page loads
 window.onload = function () {
   authenticate();
 };
 
