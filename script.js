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

cultivationButton.addEventListener("click", cultivate);
meditateButton.addEventListener("click", meditate);
workButton.addEventListener("click", work);
exploreButton.addEventListener("click", explore);
breakthroughButton.addEventListener("click", attemptBreakthrough);

// =====================================================
// PLAYER ACTIONS
// Each action changes the player state, add a log message,
// then updates the screen
// =====================================================

function cultivate(){
    player.qi += 8;
    player.innerDemon += 2;

    addLog("You sit in the meditation chamber and circulate qi through your merdians.");

    updateGame();
}

function meditate() {
    player.spirit += 2;
    player.body += 1;

    addLog("You spend the day hauling water in the outer sect. It's not glorious, but it pays.");

    updateGame();
}

function explore() {
    const roll = Math.random

    if (roll < 0.4) {
        addLog("You find a small pouch of spirit stones hidden near a ruined shrine.");
    } else if (roll < 0.7) {
        player.qi += 10;
        player.innerDemon += 4;
        addLog("You discovered a strange herb. It strenghthened your qi, butt leaves your thoughts restless.")
    } else {
        player.body -= 1;
        addLog("A wild beast wounds you before you manage to escape");
    }

    updateGame();
}