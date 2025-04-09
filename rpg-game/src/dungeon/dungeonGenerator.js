"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDungeon = generateDungeon;
const enemies_1 = require("./enemies");
const healer_1 = require("./healer");
function generateDungeon() {
    const dungeon = [];
    const width = Math.floor(Math.random() * 10) + 5; // Random width between 5 and 15
    const height = Math.floor(Math.random() * 10) + 5; // Random height between 5 and 15
    for (let i = 0; i < height; i++) {
        const row = [];
        for (let j = 0; j < width; j++) {
            const randomValue = Math.random();
            if (randomValue < 0.2) {
                row.push('W'); // 20% chance of a wall
            }
            else if (randomValue < 0.25) {
                const enemy = enemies_1.enemies[Math.floor(Math.random() * enemies_1.enemies.length)];
                row.push(enemy.name[0]); // Place an enemy (first letter of its name)
            }
            else if (randomValue < 0.27) {
                row.push('H'); // 2% chance of a healer NPC
            }
            else {
                row.push('.'); // Empty space
            }
        }
        dungeon.push(row);
    }
    return dungeon;
}
// Example interaction logic
function interactWithHealer(playerHealth) {
    const healResult = healer_1.healer.healAction();
    const newHealth = Math.min(playerHealth + healResult.healAmount, 100); // Cap health at 100
    return {
        message: healResult.message,
        newHealth,
    };
}
// Example usage
let playerHealth = 50;
const interaction = interactWithHealer(playerHealth);
console.log(interaction.message); // "The Healer restores your health by 20 points!"
playerHealth = interaction.newHealth;
console.log(`Player's new health: ${playerHealth}`); // Player's new health: 70
