module.exports = {
    name: 'guildid',
    async execute(client, message) {
      const unixTime = Math.floor(Date.now() / 1000);
      message.channel.send("🕒 " + unixTime)
      return
    }
}