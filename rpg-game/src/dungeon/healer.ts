export const healer = {
    name: "Healer",
    healAmount: 20,
    healAction: () => {
        return {
            message: "The Healer restores your health by 20 points!",
            healAmount: 20,
        };
    },
};