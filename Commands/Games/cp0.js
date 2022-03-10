module.exports = {
  name: 'cp0',
  async execute({ input }) {
    var a = Math.random() > 0.5 ? "heads" : "tails";
    if (a.toLowerCase() === input) return `The coin landed on **${a}**. You won!`;
    else return `The coin landed on **${a}**. You lost...`;
  }
}