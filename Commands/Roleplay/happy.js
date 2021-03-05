module.exports = {
    name: 'happy',
    async execute(client, message) {
      message.channel.send("*" + message.author.tag + " is happy!*");
    }
}