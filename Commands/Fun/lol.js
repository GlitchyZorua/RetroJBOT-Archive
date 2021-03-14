module.exports = {
    name: 'lol',
    async execute(client, message, args) {
        message.channel.send("Haha! funny!");
        console.log('[MSG] Haha! funny!');
    }
}