export interface Character {
    name: string;
    health?: number;
    cookingSkill?: number;
    humorLevel?: number;
    stealthLevel?: number;
    strength?: number;
    magicPower?: number;
    performSong?(): void;
    cookMeal?(): void;
    tellJoke?(): void;
    sneak?(): void;
    attack?(): void;
    castSpell?(): void;
}

export interface Dungeon {
    layout: string[][];
    monsters: string[];
    treasures: string[];
}