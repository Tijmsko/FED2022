// JavaScript Document
console.log("hi");

// stap 1: zoek de menu-button op en sla die op in een variabele
var deButton = document.querySelector("nav button");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
deButton.addEventListener("click", toggleMenu);

// stap 3: voeg in de functie een class toe aan de nav
function toggleMenu() {  
  // zoek de nav op
  var deNav = document.querySelector("nav");
  // voeg een class toe aan de nav
  // en verwijder die weer bij nogmaals klikken
  // toggle
  deNav.classList.toggle("toonMenu");
}


/* bonus: menu sluiten met escape */
window.addEventListener("keydown", handleKeydown);

function handleKeydown(event) {
  if (event.key == "Escape") {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
  }
}

// einde menu







// Begin spelers filter

var populairRadio = document.querySelector("#populair");
var totwRadio = document.querySelector("#currentTotw");
var newRadio = document.querySelector("#newPlayers");


populairRadio.addEventListener("click", populairTonen);
totwRadio.addEventListener("click", totwTonen);
newRadio.addEventListener("click", newTonen);

function populairTonen() {
	var deUl = document.querySelector("main>ul:nth-of-type(1)");
	deUl.classList.remove("totw", "new");
  console.log("populair")
	// deUl.classList.remove("new");
}

function totwTonen() {
	var deUl = document.querySelector("main>ul:nth-of-type(1)");
	deUl.classList.add("totw");
	deUl.classList.remove("new");
  console.log("totw")
}

function newTonen() {
	var deUl = document.querySelector("main>ul:nth-of-type(1)");
	deUl.classList.add("new");
	deUl.classList.remove("totw");
  console.log("new")
}