import readline from 'readline';
import { generateDungeon } from './dungeon/dungeonGenerator';
import { Character } from './types';

export class Bard implements Character {
    name: string;
    health: number;

    constructor(name: string) {
        this.name = name;
        this.health = 100; // Default health value
    }

    attack(): void {
        console.log(`${this.name} plays a melody to attack!`);
    }
}

export class Comedian implements Character {
    name: string;
    health: number;

    constructor(name: string) {
        this.name = name;
        this.health = 90; // Default health value
    }

    attack(): void {
        console.log(`${this.name} tells a joke to attack!`);
    }
}

export class Rogue implements Character {
    name: string;
    health: number;

    constructor(name: string) {
        this.name = name;
        this.health = 85; // Default health value
    }

    attack(): void {
        console.log(`${this.name} sneaks up to attack!`);
    }
}

export class Warrior implements Character {
    name: string;
    health: number;

    constructor(name: string) {
        this.name = name;
        this.health = 120; // Default health value
    }

    attack(): void {
        console.log(`${this.name} swings a sword to attack!`);
    }
}

export class Wizard implements Character {
    name: string;
    health: number;

    constructor(name: string) {
        this.name = name;
        this.health = 95; // Default health value
    }

    attack(): void {
        console.log(`${this.name} casts a spell to attack!`);
    }
}

// Character selection logic
const characters: Character[] = [
    new Bard('Bard'),
    new Comedian('Comedian'),
    new Rogue('Rogue'),
    new Warrior('Warrior'),
    new Wizard('Wizard'),
];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(query: string): Promise<string> {
    return new Promise((resolve) => rl.question(query, resolve));
}

async function chooseCharacter(): Promise<Character> {
    console.log("Choose your character:");
    characters.forEach((character, index) => {
        console.log(`${index + 1}: ${character.name}`);
    });

    const choice = await askQuestion("Enter the number of your choice: ");
    const index = parseInt(choice) - 1;

    if (isNaN(index) || index < 0 || index >= characters.length) {
        throw new Error("Invalid choice. Game cannot proceed.");
    }

    return characters[index];
}

function displayDungeon(dungeon: string[][], playerPosition: { x: number; y: number }) {
    for (let i = 0; i < dungeon.length; i++) {
        let row = '';
        for (let j = 0; j < dungeon[i].length; j++) {
            if (i === playerPosition.y && j === playerPosition.x) {
                row += 'P '; // Player's position
            } else {
                row += dungeon[i][j] + ' ';
            }
        }
        console.log(row);
    }
}

function movePlayer(
    dungeon: string[][],
    playerPosition: { x: number; y: number },
    direction: string
): { x: number; y: number } {
    const newPosition = { ...playerPosition };

    if (direction === 'w' && playerPosition.y > 0) {
        newPosition.y -= 1; // Move up
    } else if (direction === 's' && playerPosition.y < dungeon.length - 1) {
        newPosition.y += 1; // Move down
    } else if (direction === 'a' && playerPosition.x > 0) {
        newPosition.x -= 1; // Move left
    } else if (direction === 'd' && playerPosition.x < dungeon[0].length - 1) {
        newPosition.x += 1; // Move right
    }

    // Check if the new position is a wall
    if (dungeon[newPosition.y][newPosition.x] === 'W') {
        console.log("You can't move there, it's a wall!");
        return playerPosition; // Return the original position
    }

    return newPosition; // Return the updated position
}

async function startGame() {
    const playerCharacter = await chooseCharacter();
    console.log(`You have chosen: ${playerCharacter.name}`);
    
    const dungeon = generateDungeon();
    let playerPosition = { x: 0, y: 0 }; // Start at the top-left corner

    console.log("You have entered a dungeon!");
    while (true) {
        displayDungeon(dungeon, playerPosition);
        const direction = await askQuestion("Move (w/a/s/d): ");
        if (!direction) {
            console.log("No input detected. Exiting game.");
            break;
        }
        playerPosition = movePlayer(dungeon, playerPosition, direction);
    }

    rl.close();
}

startGame();