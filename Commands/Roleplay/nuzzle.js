module.exports = {
    name: 'nuzzle',
    async execute(client, message) {
      let thingtosend = message.content.slice(8).rpremovepings()
      message.channel.send("*" + message.author.tag + " nuzzles " + thingtosend + "!*");
    }
}