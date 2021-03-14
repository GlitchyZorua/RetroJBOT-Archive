module.exports = {
    name: 'countsa',
    async execute(client, message, args) {
      message.channel.send(counter);
      console.log('[MSG]' + counter);
    }
}