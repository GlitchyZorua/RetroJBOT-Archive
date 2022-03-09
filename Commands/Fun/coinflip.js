module.exports = {
  name: 'coinflip',
  async execute() {
    return `:coin: The coin landed on **${Math.random() > 0.5 ? "Heads" : "Tails"}**!`;
  }
}