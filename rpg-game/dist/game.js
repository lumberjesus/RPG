"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wizard = exports.Warrior = exports.Rogue = exports.Comedian = exports.Bard = void 0;
const readline_1 = __importDefault(require("readline"));
const dungeonGenerator_1 = require("./dungeon/dungeonGenerator");
class Bard {
    constructor(name) {
        this.name = name;
        this.health = 100; // Default health value
    }
    attack() {
        console.log(`${this.name} plays a melody to attack!`);
    }
}
exports.Bard = Bard;
class Comedian {
    constructor(name) {
        this.name = name;
        this.health = 90; // Default health value
    }
    attack() {
        console.log(`${this.name} tells a joke to attack!`);
    }
}
exports.Comedian = Comedian;
class Rogue {
    constructor(name) {
        this.name = name;
        this.health = 85; // Default health value
    }
    attack() {
        console.log(`${this.name} sneaks up to attack!`);
    }
}
exports.Rogue = Rogue;
class Warrior {
    constructor(name) {
        this.name = name;
        this.health = 120; // Default health value
    }
    attack() {
        console.log(`${this.name} swings a sword to attack!`);
    }
}
exports.Warrior = Warrior;
class Wizard {
    constructor(name) {
        this.name = name;
        this.health = 95; // Default health value
    }
    attack() {
        console.log(`${this.name} casts a spell to attack!`);
    }
}
exports.Wizard = Wizard;
// Character selection logic
const characters = [
    new Bard('Bard'),
    new Comedian('Comedian'),
    new Rogue('Rogue'),
    new Warrior('Warrior'),
    new Wizard('Wizard'),
];
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function askQuestion(query) {
    return new Promise((resolve) => rl.question(query, resolve));
}
function chooseCharacter() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Choose your character:");
        characters.forEach((character, index) => {
            console.log(`${index + 1}: ${character.name}`);
        });
        const choice = yield askQuestion("Enter the number of your choice: ");
        const index = parseInt(choice) - 1;
        if (isNaN(index) || index < 0 || index >= characters.length) {
            throw new Error("Invalid choice. Game cannot proceed.");
        }
        return characters[index];
    });
}
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
    // Check if the new position is a wall
    if (dungeon[newPosition.y][newPosition.x] === 'W') {
        console.log("You can't move there, it's a wall!");
        return playerPosition; // Return the original position
    }
    return newPosition; // Return the updated position
}
function startGame() {
    return __awaiter(this, void 0, void 0, function* () {
        const playerCharacter = yield chooseCharacter();
        console.log(`You have chosen: ${playerCharacter.name}`);
        const dungeon = (0, dungeonGenerator_1.generateDungeon)();
        let playerPosition = { x: 0, y: 0 }; // Start at the top-left corner
        console.log("You have entered a dungeon!");
        while (true) {
            displayDungeon(dungeon, playerPosition);
            const direction = yield askQuestion("Move (w/a/s/d): ");
            if (!direction) {
                console.log("No input detected. Exiting game.");
                break;
            }
            playerPosition = movePlayer(dungeon, playerPosition, direction);
        }
        rl.close();
    });
}
startGame();
