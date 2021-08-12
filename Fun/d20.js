module.exports = {
    name: 'd20',
    async execute(client, message, args) {
        message.channel.send(Math.floor((Math.random() * 30) + 1))
    console.log("[MSGAL] d20")
    }
}