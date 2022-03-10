module.exports = {
    name: 'dice',
    async execute({ input }) {
        input = parseInt(input);
        if (isNaN(input)) return "🎲:x: Not a number (NaN)";
        input = input || 6; //could have used ||=
        return '🎲 ' + Math.floor(Math.random() * input);
    }
}