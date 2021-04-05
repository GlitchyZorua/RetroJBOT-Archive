module.exports = {
    name: 'oof',
    async execute(client, message) {
      message.channel.send("**I am pissed**");
      console.log('[MSG] **I am pissed**');
    }
}