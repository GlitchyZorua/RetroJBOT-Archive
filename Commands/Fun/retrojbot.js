module.exports = {
    name: 'retrojbot',
    async execute(client, message, args) {
        message.channel.send("Thats me!");
        console.log('[MSG] Thats me!')
    }
}