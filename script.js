// Create eventListener to all the button 
// All button should be able to play a different sound.
// Function to play the corresponding sound based on the key/button
function playSound(key) {
  let soundUrl;
  switch (key) {
    case 'w':
      soundUrl = "https://files.codingninjas.in/tom-1-28537.mp3";
      break;
    case 'a':
      soundUrl = "https://files.codingninjas.in/tom-2-28541.mp3";
      break;
    case 's':
      soundUrl = "https://files.codingninjas.in/tom-3-28542.mp3";
      break;
    case 'd':
      soundUrl = "https://files.codingninjas.in/tom-4-28543.mp3";
      break;
    case 'j':
      soundUrl = "https://files.codingninjas.in/snare-28545.mp3";
      break;
    case 'k':
      soundUrl = "https://files.codingninjas.in/crash-28546.mp3";
      break;
    case 'l':
      soundUrl = "https://files.codingninjas.in/kick-bass-28547.mp3";
      break;
    default:
      return; // Exit if the key doesn't match any case
  }
  const sound = new Audio(soundUrl);  //<audio src="URL"></audio> ...create Audio object ...HTMLAudioElement

  sound.play();
}

// Add click event listeners to all buttons
document.querySelectorAll('.drum').forEach(button => {
  button.addEventListener('click', function() {
    const buttonText = this.textContent.toLowerCase();
    playSound(buttonText);
    
    // Add animation/visual feedback
    this.classList.add('pressed');
    setTimeout(() => {
      this.classList.remove('pressed');
    }, 100);
  });
});

// Add keypress event listener to the document
document.addEventListener('keydown', function(event) {
  const validKeys = ['w', 'a', 's', 'd', 'j', 'k', 'l'];
  const keyPressed = event.key.toLowerCase();
  
  if (validKeys.includes(keyPressed)) {
    playSound(keyPressed);
    
    // Add animation/visual feedback for the corresponding button
    const button = document.querySelector(`.${keyPressed}`);
    if (button) {
      button.classList.add('pressed');
      setTimeout(() => {
        button.classList.remove('pressed');
      }, 100);
    }
  }
});
