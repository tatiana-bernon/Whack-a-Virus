// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

// Declare variables for score and timer
let counter = 20
let whacks = 1

//this function starts the game
let clicked = document.getElementById('start');
let cells = document.getElementsByTagName("TD")
let virus = document.createElement('img');
var totalWhacks = document.getElementById("whackcounter");
let timer = document.getElementById("timer");
let alertSound = new Audio("./alert.mp3");

virus.src = "images/rsz_1coronavirus.png";
clicked.onclick = startGame

const spawnVirus = function () {
  let randomIndex = Math.floor(Math.random() * cells.length);
  let randomCell = cells[randomIndex]
  //virus img appears in random cell
  randomCell.appendChild(virus);
  // click on the virus
  virus.onclick = whackedVirus
}

function startGame() {
  startTimer()
  spawnVirus()
  startCountdown()
}

//virus respawns in another cell
function whackedVirus() {
  spawnVirus()
  //add sound when whackedVirus
  let audio = new Audio("./coronavirus.mp3");
  audio.play();
  totalWhacks.innerHTML = whacks++;
}

//Create function which start and stop timer, displays alert message and reloads page
const startTimer = function () {
  setInterval(function () {
    counter--;
    if (counter >= 0) { timer.innerHTML = counter; }    
  }, 1000);
}

//Function to play sounds
function playAudio(id) {
  document.getElementById(id).play();
}

const startCountdown = function () {
  setTimeout(function () {
    alertSound.play()
    alert("BREAKING NEWS: Today " + whacks + " countries have been declared COVID-Free! Ka pai to Mahi! Don't forget to wash your hands! ...hehe");
    location.reload();
  }, 20000)
}

