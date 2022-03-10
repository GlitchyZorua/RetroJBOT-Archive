module.exports = {
    name: 'yesno',
    async execute(client, message, args) {
      message.channel.send(Math.random() > 0.5 ? "yes" : "no")
    }
}