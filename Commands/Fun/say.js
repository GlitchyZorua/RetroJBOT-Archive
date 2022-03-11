module.exports = {
    name: 'say',
    async execute({ input }) {
      if (input === "") return ":x: Syntax error! Syntax: j.say <text>";
      return input;
    }
}