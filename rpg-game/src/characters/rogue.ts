export class Rogue {
    name: string;
    health: number;
    stealthLevel: number;

    constructor(name: string) {
        this.name = name;
        this.health = 100; // Default health
        this.stealthLevel = 10; // Default stealth level
    }

    attack(): { message: string; damage: number } {
        const damage = 15; // Damage dealt by the rogue
        return {
            message: `${this.name} attacks with stealth, dealing ${damage} damage!`,
            damage,
        };
    }
    pickPocket(): { message: string; goldStolen: number } {
        const goldStolen = Math.floor(Math.random() * 20) + 1; // Random gold stolen between 1 and 20
        return {
            message: `${this.name} attempts to pickpocket a nearby target and steals ${goldStolen} gold!`,
            goldStolen,
        };
    }

    stab(): { message: string; damage: number } {
        const damage = 20; // Fixed damage for stabbing
        return {
            message: `${this.name} stabs the enemy with a dagger, dealing ${damage} damage!`,
            damage,
        };
    }

    hide(): { message: string; stealthBoost: number } {
        const stealthBoost = 5; // Boost stealth level temporarily
        return {
            message: `${this.name} hides in the shadows, increasing their stealth level by ${stealthBoost}!`,
            stealthBoost,
        };
    }
}

const rogue = new Rogue("Shadow");
const pickPocketResult = rogue.pickPocket();
console.log(pickPocketResult.message); 
// Output: "Shadow attempts to pickpocket a nearby target and steals 15 gold!" (random value)

const stabResult = rogue.stab();
console.log(stabResult.message); 
// Output: "Shadow stabs the enemy with a dagger, dealing 20 damage!"
console.log(`Damage dealt: ${stabResult.damage}`); 
// Output: Damage dealt: 20

const hideResult = rogue.hide();
console.log(hideResult.message); 
// Output: "Shadow hides in the shadows, increasing their stealth level by 5!"
console.log(`Stealth boost: ${hideResult.stealthBoost}`); 
// Output: Stealth boost: 5