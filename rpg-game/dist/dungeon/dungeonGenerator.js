"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDungeon = void 0;
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
exports.generateDungeon = generateDungeon;
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
function displayDungeon(dungeon, playerPosition) {
    for (let i = 0; i < dungeon.length; i++) {
        let row = '';
        for (let j = 0; j < dungeon[i].length; j++) {
            if (i === playerPosition.y && j === playerPosition.x) {
                row += 'P '; // Player's position
            }
            else {
                row += dungeon[i][j] + ' ';
            }
        }
        console.log(row);
    }
}
function movePlayer(dungeon, playerPosition, direction) {
    const newPosition = Object.assign({}, playerPosition);
    if (direction === 'w' && playerPosition.y > 0) {
        newPosition.y -= 1; // Move up
    }
    else if (direction === 's' && playerPosition.y < dungeon.length - 1) {
        newPosition.y += 1; // Move down
    }
    else if (direction === 'a' && playerPosition.x > 0) {
        newPosition.x -= 1; // Move left
    }
    else if (direction === 'd' && playerPosition.x < dungeon[0].length - 1) {
        newPosition.x += 1; // Move right
    }
    const cell = dungeon[newPosition.y][newPosition.x];
    if (cell === 'W') {
        console.log("You can't move there, it's a wall!");
        return playerPosition; // Return the original position
    }
    else if (cell !== '.' && cell !== 'P') {
        console.log(`You encountered an enemy: ${cell}!`);
        // Add combat logic here
    }
    return newPosition; // Return the updated position
}
