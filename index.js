// first challenge
// searches index.html for the first 'button' class item and add an event listener with the parameters of click and clickHandle
// parameter: listen for the click, upon the click, call on the clickHandle function
// clickHandle does not have () since that would automatically call on our function when the webpage loads
// document.querySelector("button").addEventListener("click", clickHandle);

// gives an alert when the w button (first 'button' item) gets clicked
// function clickHandle() {
//   alert("i got clicked!");
// }

// second challenge
// add an event listener for all 'drum' class items
// created a variable for the array that document.querySelectorAll() returns for class .drum
var buttons = document.querySelectorAll(".drum");

// for loop to go through each index in the array and output an alert when the buttons get clicked on
// for (var i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function() {
//     alert("i got clicked!");
//   });
// }

// for loop to go through each index in the array and play a sound when the buttons get clicked
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML); // passing in same parameter as makeSound (via click) in order to animate button
  });

  // added an EventListener to receive two parameters, keypress and a function to make sound when the specific key is pressed
  document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key); // passing in same parameter as makeSound (via key press) in order to animate button
  });

  function makeSound(key) {
    switch (key) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

      case "j":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

      case "k":
        var kickBass = new Audio("sounds/kick-bass.mp3");
        kickBass.play();
        break;

      case "l":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

      default:
        console.log(key);
    }
  }
}

// function to change style of buttons clicked or pressed
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey); //need to concatenate currentKey with . in order to match class in index.html
  activeButton.classList.add("pressed");
  setTimeout(function() { // removes the style after 100 milliseconds of button being pressed/clicked
    activeButton.classList.remove("pressed");
  }, 100);
}


// challenge: for loop to go through each index in the array and change the text color to white when the buttons get clicked
// for (var i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function() {
//     this.style.color = "white";
//   });
// }
