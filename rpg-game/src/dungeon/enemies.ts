export interface Enemy {
    name: string;
    health: number;
    attack: number;
    attackAction: () => { message: string; damage: number };
}

export const enemies: Enemy[] = [
    {
        name: "Goblin",
        health: 10,
        attack: 2,
        attackAction: () => {
            const damage = 2;
            return { message: "The Goblin slashes with its rusty dagger!", damage };
        },
    },
    {
        name: "Skeleton",
        health: 8,
        attack: 3,
        attackAction: () => {
            const damage = 3;
            return { message: "The Skeleton swings its brittle sword!", damage };
        },
    },
    {
        name: "Orc",
        health: 15,
        attack: 4,
        attackAction: () => {
            const damage = 4;
            return { message: "The Orc smashes with its club!", damage };
        },
    },
    {
        name: "Slime",
        health: 5,
        attack: 1,
        attackAction: () => {
            const damage = 1;
            return { message: "The Slime oozes onto you, dealing sticky damage!", damage };
        },
    },
    {
        name: "Dragon Whelp",
        health: 20,
        attack: 6,
        attackAction: () => {
            const damage = 6;
            return { message: "The Dragon Whelp breathes a small burst of fire!", damage };
        },
    },
    {
        name: "Zombie",
        health: 12,
        attack: 2,
        attackAction: () => {
            const damage = 2;
            return { message: "The Zombie bites with decayed teeth!", damage };
        },
    },
    {
        name: "Vampire",
        health: 18,
        attack: 5,
        attackAction: () => {
            const damage = 5;
            return { message: "The Vampire sinks its fangs into you, draining your life!", damage };
        },
    },
    {
        name: "Troll",
        health: 25,
        attack: 7,
        attackAction: () => {
            const damage = 7;
            return { message: "The Troll swings its massive club with brute force!", damage };
        },
    },
    {
        name: "Giant Spider",
        health: 15,
        attack: 4,
        attackAction: () => {
            const damage = 4;
            return { message: "The Giant Spider bites with venomous fangs!", damage };
        },
    },
    {
        name: "Bandit",
        health: 10,
        attack: 3,
        attackAction: () => {
            const damage = 3;
            return { message: "The Bandit slashes with a stolen blade!", damage };
        },
    },
    {
        name: "Heckler",
        health: 12,
        attack: 2,
        attackAction: () => {
            const damage = 2;
            return { message: "The Heckler insults you, dealing emotional damage!", damage };
        },
    },
    {
        name: "Mimic",
        health: 20,
        attack: 5,
        attackAction: () => {
            const damage = 5;
            return { message: "The Mimic chomps down with its hidden teeth!", damage };
        },
    },
    {
        name: "Beholder",
        health: 30,
        attack: 8,
        attackAction: () => {
            const damage = 8;
            return { message: "The Beholder fires a deadly eye ray!", damage };
        },
    },
    {
        name: "Lich",
        health: 40,
        attack: 10,
        attackAction: () => {
            const damage = 10;
            return { message: "The Lich casts a dark spell, draining your soul!", damage };
        },
    },
    {
        name: "Hydra",
        health: 50,
        attack: 12,
        attackAction: () => {
            const damage = 12;
            return { message: "The Hydra strikes with multiple heads!", damage };
        },
    },
    {
        name: "Minotaur",
        health: 35,
        attack: 9,
        attackAction: () => {
            const damage = 9;
            return { message: "The Minotaur charges with its horns!", damage };
        },
    },
    {
        name: "Basilisk",
        health: 28,
        attack: 7,
        attackAction: () => {
            const damage = 7;
            return { message: "The Basilisk petrifies you with its gaze!", damage };
        },
    },
];