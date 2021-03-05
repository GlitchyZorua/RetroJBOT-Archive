module.exports = {
    name: 'angry',
    async execute(client, message) {
      message.channel.send("*" + message.author.tag + " is so angry, that he smashed there keyboard and throwed it out of the window!*");
    }
}