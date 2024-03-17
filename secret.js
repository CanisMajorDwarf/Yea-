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
