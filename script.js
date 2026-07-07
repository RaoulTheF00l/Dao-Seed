// =====================================================
// PLAYER STATE
// This object stores the player's current character data.
// Think of it like the player's character sheet.
// =====================================================


const DEFAULT_PLAYER = {
  realm: "Mortal",
  stage: 1,
  qi: 0,
  body: 5,
  spirit: 5,
  stones: 0,
  innerDemon: 0
};




// =====================================================
// PLAYER STATE
// This object stores the player's current character data.
// Think of it like the player's character sheet.
// =====================================================

    const player = {
        ...DEFAULT_PLAYER
    };


    const SAVE_KEY = "daoSeedSave";


// =====================================================
// HTML ELEMENT REFERENCES
// These variables let JavaScript talk to the HTML page.
// =====================================================

const statsElement = document.getElementById("stats");
const logElement = document.getElementById("log");

const cultivateButton = document.getElementById("cultivateButton");
const meditateButton = document.getElementById("meditateButton");
const workButton = document.getElementById("workButton");
const exploreButton = document.getElementById("exploreButton");
const breakthroughButton = document.getElementById("breakthroughButton");
const saveButton = document.getElementById("saveButton");
const loadButton = document.getElementById("loadButton");
const resetButton = document.getElementById("resetButton");


// =====================================================
// BUTTON EVENT LISTENERS
// These connect button clicks to game functions.
// =====================================================

cultivateButton.addEventListener("click", cultivate);
meditateButton.addEventListener("click", meditate);
workButton.addEventListener("click", work);
exploreButton.addEventListener("click", explore);
breakthroughButton.addEventListener("click", attemptBreakthrough);
saveButton.addEventListener("click", saveGame);
loadButton.addEventListener("click", loadGame);
resetButton.addEventListener("click", resetGame);


// =====================================================
// PLAYER ACTIONS
// Each action changes the player state, adds a log message,
// then updates the screen.
// =====================================================

function cultivate() {
  player.qi += 8;
  player.innerDemon += 2;

  addLog("You sit beneath the old tree and circulate qi through your meridians.");

  updateGame();
}


function meditate() {
  player.spirit += 2;
  player.innerDemon -= 5;

  if (player.innerDemon < 0) {
    player.innerDemon = 0;
  }

  addLog("You quiet your breathing. The whispers in your heart grow faint.");

  updateGame();
}


function work() {
  player.stones += 3;
  player.body += 1;

  addLog("You spend the day hauling water for the outer sect. It is not glorious, but it pays.");

  //youngMasterEncounter();

  updateGame();
}


function explore() {
  const roll = Math.random();

  if (roll < 0.4) {
    player.stones += 5;
    addLog("You find a small pouch of spirit stones hidden near a ruined shrine.");
  } else if (roll < 0.7) {
    player.qi += 10;
    player.innerDemon += 4;
    addLog("You discover a strange herb. It strengthens your qi, but leaves your thoughts restless.");
  } else {
    player.body -= 1;
    addLog("A wild beast wounds you before you manage to escape.");
    //combatEncounter();
  }

  updateGame();
}


function attemptBreakthrough() {
  if (player.qi < 50) {
    addLog("Your qi is too thin. You are not ready to break through.");
    return;
  }

  const successChance = player.spirit * 8 - player.innerDemon;
  const roll = Math.random() * 100;

  player.qi -= 50;

  if (roll < successChance) {
    player.stage += 1;
    player.innerDemon += 5;

    if (player.stage > 3) {
      advanceRealm();
    } else {
      addLog(`Your dantian trembles. You break through to ${player.realm} Stage ${player.stage}.`);
    }
  } else {
    player.innerDemon += 10;
    player.body -= 1;

    addLog("Your breakthrough fails. Qi lashes through your body like broken glass.");
  }

  updateGame();
}

function advanceRealm() {
  player.stage = 1;

  if (player.realm === "Mortal") {
    player.realm = "Qi Condensation";
    addLog("Your mortal limits shatter. You step into the Qi Condensation Realm.");
    return;
  }

  if (player.realm === "Qi Condensation") {
    player.realm = "Foundation Establishment";
    addLog("Your foundation stabilizes like stone beneath heaven. You reach Foundation Establishment.");
    return;
  }

  addLog("You have reached the current limit of this prototype.");
}

// =====================================================
// SAVE / LOAD / RESET
// This adds local storage logic.
// =====================================================

function saveGame() {
    const saveData = JSON.stringify(player);

    localStorage.setItem(SAVE_KEY, saveData);

    addLog("Your journey has been recorded.")
}

function loadGame() {
    const saveData = localStorage.getItem(SAVE_KEY);

    if(saveData === null) {
        addLog("No saved game was found.");
        return;
    }

    const loadedPlayer = JSON.parse(saveData);

    Object.assign(player, loadedPlayer);

    addLog("Your recorded journey has been restored.");


    updateGame();
}

function resetGame() {
    return
}


// =====================================================
// COMBAT
// Calls combat scene
// =====================================================




// =====================================================
// UI UPDATE FUNCTIONS
// These redraw the visible page using the current player data.
// =====================================================

function updateGame() {
  updateStats();
}


function updateStats() {
  statsElement.innerHTML = `
    <div class="stat-row">
      <span>Realm</span>
      <strong>${player.realm}</strong>
    </div>

    <div class="stat-row">
      <span>Stage</span>
      <strong>${player.stage}</strong>
    </div>

    <div class="stat-row">
      <span>Qi</span>
      <strong>${player.qi}</strong>
    </div>

    <div class="stat-row">
      <span>Body</span>
      <strong>${player.body}</strong>
    </div>

    <div class="stat-row">
      <span>Spirit</span>
      <strong>${player.spirit}</strong>
    </div>

    <div class="stat-row">
      <span>Spirit Stones</span>
      <strong>${player.stones}</strong>
    </div>

    <div class="stat-row">
      <span>Inner Demon</span>
      <strong>${player.innerDemon}</strong>
    </div>
  `;
}


function addLog(message) {
  const paragraph = document.createElement("p");

  paragraph.textContent = message;

  logElement.prepend(paragraph);
}

export function clearLog() {
    logElement.innerHTML = "";
}


// =====================================================
// INITIAL PAGE UPDATE
// This draws the starting stats when the page first loads.
// =====================================================

updateGame();