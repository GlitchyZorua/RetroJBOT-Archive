module.exports = {
    name: 'ctf',
    async execute(client, message) {
      var cel = message.content.slice(6)
      var cel = Number(cel)
      celfinal = 32 + 1.8 * cel
      message.channel.send(':thermometer: ' + celfinal + '°F');
      console.log('[MSG] :thermometer: ' + celfinal + '°F');
      return
    }
}