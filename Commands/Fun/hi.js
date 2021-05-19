module.exports = {
    name: 'hi',
    async execute(client, message) {
      message.channel.send("Hello!");
      console.log('[MSG] Hello!');
    }
}