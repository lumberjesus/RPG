export class Wizard {
    name: string;
    magicPower: number;
    health: number;
    attack: number;

    constructor(name: string, magicPower: number) {
        this.name = name;
        this.magicPower = magicPower;
        this.health = 90; // Default health
        this.attack = 12; // Default attack value
    }

    castSpell(spell: string): { message: string; damage: number } {
        const damage = this.magicPower * 2; // Damage scales with magic power
        return {
            message: `${this.name} casts ${spell} with ${this.magicPower} magic power, dealing ${damage} damage!`,
            damage,
        };
    }

    concentrate(): { message: string; damageBoost: number } {
        const damageBoost = 5; // Concentrate increases magic power temporarily
        return {
            message: `${this.name} concentrates, increasing their magic power by ${damageBoost}!`,
            damageBoost,
        };
    }

    fireball(): { message: string; damage: number } {
        const damage = 25; // Fixed damage for fireball
        return {
            message: `${this.name} casts a powerful fireball spell, dealing ${damage} damage!`,
            damage,
        };
    }

    lightningStrike(): { message: string; damage: number } {
        const damage = 30; // Fixed damage for lightning strike
        return {
            message: `${this.name} summons a lightning strike, dealing ${damage} damage!`,
            damage,
        };
    }
}

const wizard = new Wizard("Merlin", 20);
const spellResult = wizard.castSpell("Ice Blast");
console.log(spellResult.message); // "Merlin casts Ice Blast with 20 magic power, dealing 40 damage!"
console.log(`Damage dealt: ${spellResult.damage}`); // Damage dealt: 40

const fireballResult = wizard.fireball();
console.log(fireballResult.message); // "Merlin casts a powerful fireball spell, dealing 25 damage!"
console.log(`Damage dealt: ${fireballResult.damage}`); // Damage dealt: 25