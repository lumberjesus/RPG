export class Warrior {
    name: string;
    health: number;
    strength: number;

    constructor(name: string) {
        this.name = name;
        this.health = 100; // Default health
        this.strength = 15; // Default strength
    }

    attack(): { message: string; damage: number } {
        const damage = this.strength; // Damage equals the warrior's strength
        return {
            message: `${this.name} attacks with strength of ${this.strength}, dealing ${damage} damage!`,
            damage,
        };
    }

    defend(): string {
        return `${this.name} defends against the attack, reducing incoming damage!`;
    }

    charge(): { message: string; damage: number } {
        const damage = this.strength + 5; // Charge deals extra damage
        return {
            message: `${this.name} charges into battle with fierce determination, dealing ${damage} damage!`,
            damage,
        };
    }

    enrage(): { message: string; damageBoost: number } {
        const damageBoost = 10; // Enrage increases attack power temporarily
        return {
            message: `${this.name} enters a state of rage, increasing their attack power by ${damageBoost}!`,
            damageBoost,
        };
    }
}

const warrior = new Warrior("Thorin");
const attackResult = warrior.attack();
console.log(attackResult.message); // "Thorin attacks with strength of 15, dealing 15 damage!"
console.log(`Damage dealt: ${attackResult.damage}`); // Damage dealt: 15

const chargeResult = warrior.charge();
console.log(chargeResult.message); // "Thorin charges into battle with fierce determination, dealing 20 damage!"
console.log(`Damage dealt: ${chargeResult.damage}`); // Damage dealt: 20

const enrageResult = warrior.enrage();
console.log(enrageResult.message); // "Thorin enters a state of rage, increasing their attack power by 10!"
console.log(`Damage boost: ${enrageResult.damageBoost}`); // Damage boost: 10