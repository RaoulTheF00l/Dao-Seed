import { player } from "./state.js";
import { addLog, updateGame } from "./ui.js";

// =====================================================
// PLAYER ACTIONS
// Each action changes player state, logs feedback,
// then updates the visible game.
// =====================================================

export function cultivate() {
    player.qi += 8;
    player.innerDemon += 2;

    addLog("You sit beneath the old tree and circulate qi through your meridians.");

    updateGame();
}

export function meditate() {
    player.spirit += 2;
    player.innerDemon -= 5;

    if (player.innerDemon < 0) {
        player.innerDemon = 0;
    }

    addLog("You quiet your breathing. The whispers in your heart grow faint.");

    updateGame();
}

export function work() {
    player.stones += 3;
    player.body += 1;

    addLog("You spend the day hauling water for the outer sect. It is not glorious, but it pays.");

    updateGame();
}

export function explore() {
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
    }

    updateGame();
}

export function attemptBreakthrough() {
    player.stage = Number(player.stage);

    if (Number.isNaN(player.stage)) {
        player.stage = 1;
    }

    if (player.qi < 50) {
        addLog("Your qi is too thin. You are not ready to break through.");
        return;
    }

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