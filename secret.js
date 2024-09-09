function authenticate() {
    const answer = prompt("what treat did you give me on your 13th birthday?.What was the name we decided on for our son?");
    if (answer === "icecream.yeasif") {
      initializeApp();
    } else {
      alert("Incorrect answer. Please enter your answer without any capital letters, spaces (e.g pizza.einstein ) (use . between the two answer) and double-check for spelling errors.");
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
        setTimeout(type, 45);
      }
    }
  
    type();
  }
  
  function encodeText() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    let outputText = '';
  
    const letterToSymbol = {
        
            'a': '(',
            'b': ')',
            'c': '$',
            'd': '#',
            'e': '<',
            'f': '&',
            'g': '>',
            'h': '"',
            'i': '-',
            'j': '`',
            'k': '@',
            'l': ':',
            'm': '*',
            'n': '|',
            'o': '%',
            'p': '^',
            'q': '/',
            'r': '+',
            's': '=',
            't': ';',
            'u': '_',
            'v': '~',
            'w': '{',
            'x': '}',
            'y': '[',
            'z': ']',
          
          
    };
  
    for (let i = 0; i < inputText.length; i++) {
      const char = inputText.charAt(i);
  
      if (char >= 'a' && char <= 'z') {
        outputText += letterToSymbol[char];
      } else {
        outputText += char;
      }
    }
  
    return outputText;
  }
  
  function decodeText() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    let outputText = '';
  
    const symbolToLetter = {
'(': 'a',
')': 'b',
'$': 'c',
'#': 'd',
'<': 'e',
'&': 'f',
'>': 'g',
'"': 'h',
'-': 'i',
'`': 'j',
'@': 'k',
':': 'l',
'*': 'm',
'|': 'n',
'%': 'o',
'^': 'p',
'/': 'q',
'+': 'r',
'=': 's',
';': 't',
'_': 'u',
'~': 'v',
'{': 'w',
'}': 'x',
'[': 'y',
']': 'z',

    };
  
    for (let i = 0; i < inputText.length; i++) {
      const char = inputText.charAt(i);
  
      if (char in symbolToLetter) {
        outputText += symbolToLetter[char];
      } else {
        outputText += char;
      }
    }
  
    return outputText;
  }
  
  // Check authentication when the page loads
  window.onload = function () {
    authenticate();
  };
  
