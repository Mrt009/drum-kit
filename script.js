alert("the page is connected");

var drumElements = document.querySelectorAll(".drum");
for (var i = 0; i < drumElements.length; i++) {
  drumElements[i].addEventListener("click", function() {
    var button = this.innerHTML;
    playSound(button);
    currentKey(button);
  });
}

document.addEventListener("keydown", function(event) {
  var key = event.key.toLowerCase();
  playSound(key);
  currentKey(key);
});

function playSound(input) {
  var audio;

  switch (input) {
    case 'w':
      audio = new Audio('./sounds/tom-1.mp3');
      break;
    case 'a':
      audio = new Audio('./sounds/tom-2.mp3');
      break;
    case 's':
      audio = new Audio('./sounds/tom-3.mp3');
      break;
    case 'd':
      audio = new Audio('./sounds/crash.mp3');
      break;
    case 'j':
      audio = new Audio('./sounds/snare.mp3');
      break;
    case 'k':
      audio = new Audio('./sounds/kick-bass.mp3');
      break;
    default:
      audio = new Audio('./sounds/tom-4.mp3');
  }

  audio.play();
}

function currentKey(button) {
  var color = document.querySelector("." + button);
  color.classList.add("pressed");

  // Remove the "pressed" class after a certain delay
  setTimeout(function() {
    color.classList.remove("pressed");
  }, 900);
}
