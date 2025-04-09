"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healer = void 0;
exports.healer = {
    name: "Healer",
    healAmount: 20,
    healAction: () => {
        return {
            message: "The Healer restores your health by 20 points!",
            healAmount: 20,
        };
    },
};
