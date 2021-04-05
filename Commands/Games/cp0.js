var coina = ['heads', 'tails']
module.exports = {
    name: 'cp0',
    async execute(client, message, args) {
      var a = coina[Math.floor(Math.random() * coina.length)]
      let thingtosend = message.content.slice(6).removepings()
      if (a.toLowerCase() == thingtosend) {
        message.channel.send('The coin landed on ' + "**" + a + "**. You won!")
        console.log('[MSG] The coin landed on ' + "**" + a + "**. You won!")
      }
      if (a.toLowerCase() !== thingtosend) {
        message.channel.send('The coin landed on ' + "**" + a + "**. You lost...")
        console.log('[MSG] The coin landed on ' + "**" + a + "**. You lost...")
      }
    }
}