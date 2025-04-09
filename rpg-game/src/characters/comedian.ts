export class Comedian {
    name: string;
    humorLevel: number;
    health: number;
    attack: number;

    constructor(name: string, humorLevel: number) {
        this.name = name;
        this.humorLevel = humorLevel;
        this.health = 80; // Default health
        this.attack = 5; // Default attack value
    }

    tellJoke(): { message: string; damage: number } {
        const damage = 10; // Damage dealt by telling a joke
        return {
            message: `${this.name} tells a joke: "Why don't scientists trust atoms? Because they make up everything!" It deals ${damage} damage from laughter!`,
            damage,
        };
    }

    entertainAudience(): string {
        return `The comedian ${this.name} performs with a humor level of ${this.humorLevel}.`;
        const increaseDamage: () => string = () => {
            return `${this.name}'s humor level increases the damage of their jokes!`;
        };
    }

    roast(): { message: string; damage: number } {
        const damage = 15; // Damage dealt by roasting
        return {
            message: `${this.name} delivers a hilarious roast, dealing ${damage} damage to the enemy's ego!`,
            damage,
        };
    }

    slapstick(): { message: string; damage: number } {
        const damage = 8; // Damage dealt by slapstick humor
        return {
            message: `${this.name} uses slapstick humor to create a funny scene, dealing ${damage} damage!`,
            damage,
        };
    }

    improvise(): { message: string; damage: number } {
        const damage = 12; // Damage dealt by improvising
        return {
            message: `${this.name} improvises a funny skit on the spot, dealing ${damage} damage!`,
            damage,
        };
    }
}

const comedian = new Comedian("Charlie", 100);
const roastResult = comedian.roast();
console.log(roastResult.message); // "Charlie delivers a hilarious roast, dealing 15 damage to the enemy's ego!"
console.log(`Damage dealt: ${roastResult.damage}`); // Damage dealt: 15