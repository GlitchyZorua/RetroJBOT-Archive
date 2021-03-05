module.exports = {
    name: 'snuggle',
    async execute(client, message) {
      let thingtosend = message.content.slice(10).rpremovepings()
      message.channel.send("*" + message.author.tag + " snuggles" + thingtosend + "! OwO*");
    }
}