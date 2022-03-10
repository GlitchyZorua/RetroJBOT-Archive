module.exports = {
    name: 'ping',
    async execute({ client }) {
        return ":ping_pong: Pong!`" + Math.floor(client.ws.ping) + ' ms`'
    }
}