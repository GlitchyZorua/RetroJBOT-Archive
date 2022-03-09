const doughnuts = ["🍩", "<:american_donut:502294189048987648>"]; //jacob???
module.exports = {
    name: 'donut',
    async execute({ message }) {
      let str = doughnuts[Math.floor(Math.random() * doughnuts.length)];
      message.react(str);
      return "Have a donut: " + str;
    }
}