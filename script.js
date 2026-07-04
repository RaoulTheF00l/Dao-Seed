// =====================================================
// PLAYER STATE
// This object stores the player's current character data.
// Think of it like the player's character sheet.
// =====================================================

const player = {
  realm: "Mortal",
  stage: 1,
  qi: 0,
  body: 5,
  spirit: 5,
  stones: 0,
  innerDemon: 0
};

// =====================================================
// HTML ELEMENT REFERENCES
// These variables let JavaScript talk to the HTML page.
// =====================================================

const statsElement = document.getElementById("stats");
const logElement = document.getElementById("log");

const cultivationButton = document.getElementById("cultivateButton");
const meditateButton = document.getElementById("meditateButton");
const workButton = document.getElementById("workButton");
const exploreButton = document.getElementById("exploreButton");
const breakthroughButton = document.getElementById("breakthroughButton");


// =====================================================
// BUTTON EVENT LISTENERS
// These connect button clicks to game functions.
// =====================================================
