function authenticate() {
  const answer = prompt("what treat did you give me on your 13th birthday?.What was the name we decided on for our son?");
  if (answer === "icecream.yeasif") {
    initializeApp();
  } else {
    alert("Incorrect answer. Please enter your answer without any capital letters, spaces (e.g pizza.einstein ) (use . between the two answer) and double-check for spelling errors.");
    authenticate();
  }
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

  displayOutput(outputText);
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

  displayOutput(outputText);
}

function displayOutput(text) {
  const outputDiv = document.getElementById('outputDiv');
  outputDiv.innerHTML = '';
  outputDiv.style.marginLeft = '10px'; /* Add left margin */
  outputDiv.style.marginRight = '10px'; /* Add right margin */

  let index = 0;

  function type() {
    outputDiv.innerHTML += text.charAt(index);
    index++;
    if (index < text.length) {
      setTimeout(type, 50);
    }
  }

  type();
}
window.onload = function () {
  authenticate();
};
