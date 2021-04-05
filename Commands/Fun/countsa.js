module.exports = {
    name: 'countsa',
    async execute(client, message, args) {
      message.channel.send("Community Counter has been discontinued");
      console.log('[MSG]' + "Community Counter has been discontinued");
    }
}