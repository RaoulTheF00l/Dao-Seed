// ===========================================
// PLAYER STATE
// Stores the player's current character data.
// ===========================================

export const DEFAULT_PLAYER = {
    realm: "Mortal",
    stage: 1,
    qi: 0,
    body: 5,
    spirit: 5,
    stones: 0,
    innerDemon: 0
};

export const player = {
    ...DEFAULT_PLAYER
};

export const SAVE_KEY = "daoSeedSave"
