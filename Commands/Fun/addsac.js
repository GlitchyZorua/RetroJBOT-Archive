module.exports = {
    name: 'addsac',
    async execute(client, message, args) {
      counter++;
      message.channel.send(counter);
      console.log('[MSG]' + counter);
      return
    }
}