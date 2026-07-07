import { DEFAULT_PLAYER, player, SAVE_KEY } from "./state.js";
import { addLog, clearLog, updateGame } from "./ui.js";

// =====================================================
// SAVE / LOAD / RESET
// Handles localStorage logic.
// =====================================================

export function saveGame() {
    const saveData = JSON.stringify(player);

    localStorage.setItem(SAVE_KEY, saveData);

    addLog("Your journey has been recorded.");
}

export function loadGame() {
    const saveData = localStorage.getItem(SAVE_KEY);

    if (saveData === null) {
        addLog("No saved game was found.");
        return;
    }

    const loadedPlayer = JSON.parse(saveData);

    Object.assign(player, DEFAULT_PLAYER, loadedPlayer);

    player.stage = Number(player.stage);

    if (Number.isNaN(player.stage)) {
        player.stage = DEFAULT_PLAYER.stage;
    }

    addLog("Your recorded journey has been restored.");

    updateGame();
}

export function resetGame() {
    Object.assign(player, DEFAULT_PLAYER);

    localStorage.removeItem(SAVE_KEY);

    clearLog();

    addLog("Your path begins again beneath a quiet sky.");

    updateGame();
}