module.exports = {
    name: 'test',
    async execute(client, message, args) {
        message.channel.send("Testing... it works");
    console.log("[MSG] Testing... it works");
    }
}