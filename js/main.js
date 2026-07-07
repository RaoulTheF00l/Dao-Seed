import {
    cultivate,
    meditate,
    work,
    explore,
    attemptBreakthrough
} from "./actions.js";

import {
    saveGame,
    loadGame,
    resetGame
} from "./save.js";

import { updateGame } from "./ui.js";

// =====================================================
// BUTTON REFERENCES
// This file connects the HTML buttons to game functions.
// =====================================================

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
// INITIAL PAGE UPDATE
// Draws starting stats when the page first loads.
// =====================================================

updateGame();