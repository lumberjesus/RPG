"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bard = void 0;
class Bard {
    constructor(name) {
        this.name = name;
        this.health = 100; // Default health
        this.attack = 10; // Default attack value
    }
    performSong() {
        return `${this.name} performs a beautiful song, inspiring allies!`;
        const enemies = 5; // Decrease enemy attack temporarily
    }
    castSpell() {
        const damage = 15; // Damage dealt by casting a spell
        return {
            message: `${this.name} casts a magical spell with their music, dealing ${damage} damage!`,
            damage,
        };
    }
    charm() {
        return `${this.name} charms the audience with their enchanting performance!`;
        const enemyaccuracy = 5; // Decrease enemy accuracy
    }
    swingLute() {
        const damage = 8; // Damage dealt by swinging the lute
        return {
            message: `${this.name} swings their lute, dealing ${damage} damage to the enemy!`,
            damage,
        };
    }
}
exports.Bard = Bard;
const bard = new Bard("Lyra");
const spellResult = bard.castSpell();
console.log(spellResult.message); // "Lyra casts a magical spell with their music, dealing 15 damage!"
console.log(`Damage dealt: ${spellResult.damage}`); // Damage dealt: 15
