module.exports = {
    name: 'ping',
    async execute(client, message, args) {
        message.channel.send(":ping_pong: Pong!`" + Math.floor(client.ws.ping) + ' ms`');
    console.log("[MSG] :ping_pong: Pong!  `" + Math.floor(client.ws.ping) + ' ms`');
    }
}