module.exports = {
    name: 'kill',
    async execute({ input, message }) {
      if (input === "") return ":x: Syntax error! Synax: j.kill <text>";
      return `*${message.author.tag} killed ${input}!*`;
    }
}