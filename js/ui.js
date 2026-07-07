import { player } from "./state.js";

// =====================================================
// HTML ELEMENT REFERENCES
// =====================================================

const statsElement = document.getElementById("stats");
const logElement = document.getElementById("log");

// =====================================================
// UI UPDATE FUNCTIONS
// =====================================================

export function updateGame() {
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

export function addLog(message) {
    const paragraph = document.createElement("p");
    paragraph.textContent = message;
    logElement.prepend(paragraph);
}

export function clearLog() {
    logElement.innerHTML = "";
}