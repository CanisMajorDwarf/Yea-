
// Confetti effect
function startConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confettis = [];
  const confettiCount = 300;

  function randomRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  function createConfetti() {
    for (let i = 0; i < confettiCount; i++) {
      confettis.push({
        x: randomRange(0, canvas.width),
        y: randomRange(0, canvas.height),
        speedX: randomRange(-5, 5),
        speedY: randomRange(2, 10),
        radius: randomRange(2, 5),
        color: `hsl(${randomRange(0, 360)}, 100%, 50%)`
      });
    }
  }

  function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettis.forEach(confetti => {
      ctx.beginPath();
      ctx.arc(confetti.x, confetti.y, confetti.radius, 0, 2 * Math.PI);
      ctx.fillStyle = confetti.color;
      ctx.fill();

      confetti.x += confetti.speedX;
      confetti.y += confetti.speedY;

      if (confetti.y > canvas.height) {
        confetti.y = -confetti.radius;
      }
    });
  }

  let animationFrameId;

  function updateConfetti() {
    drawConfetti();
    animationFrameId = requestAnimationFrame(updateConfetti);
  }

  createConfetti();
  updateConfetti();

  // Stop the confetti after 5 seconds
  setTimeout(() => {
    cancelAnimationFrame(animationFrameId);
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas when confetti stops
  }, 99000); // 5000ms = 5 seconds
}

    // Display birthday message
    function displayBirthdayMessage() {
      const birthdayMessage = document.getElementById('birthday-message');
      birthdayMessage.style.display = 'block';
      setTimeout(() => {
        birthdayMessage.style.display = 'none';
      }, 9000); // Hide the message after 4 seconds
    }

    // Authentication and App Initialization
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
  const unlockSound = document.getElementById('unlock-sound');
  
  inputText.removeAttribute("disabled");
  encodeButton.removeAttribute("disabled");
  decodeButton.removeAttribute("disabled");

  // Call the function to show birthday message and confetti
  displayBirthdayMessage();
  startConfetti();

  unlockSound.addEventListener('canplaythrough', () => {
    unlockSound.play().catch(error => {
      console.error('Error playing sound:', error);
    });
  });

   unlockSound.play().catch(error => {
     console.error('Error playing sound:', error);
   });
}

    function simulateTyping(callback) {
      // Remove previous output div if exists
      const previousOutputDiv = document.querySelector('.output-div');
      if (previousOutputDiv) {
        previousOutputDiv.remove();
      }

      // Create a new output div
      const outputDiv = document.createElement('div');
      outputDiv.className = 'output-div'; // Added class for easy removal
      document.body.appendChild(outputDiv);

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
  
    // Call authentication on page load
    authenticate();
  