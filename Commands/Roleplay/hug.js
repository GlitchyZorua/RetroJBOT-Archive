module.exports = {
    name: 'hug',
    async execute(client, message) {
      let thingtosend = message.content.slice(6).rpremovepings()
      message.channel.send("*" + message.author.tag + " hugged " + thingtosend + " Awwww... UwU*");
    }
}