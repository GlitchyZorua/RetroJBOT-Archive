module.exports = {
    name: 'say',
    async execute({ input }) {
      if (input === "") return ":x: Syntax error! Synax: j.say <text>";
      return input;
    }
}