module.exports = {
    name: 'lowercase',
    async execute(client, message) {
      let thingtosend = message.content.slice(12).removepings()
      message.channel.send(thingtosend.toLowerCase())
      console.log("[MSG]" + thingtosend.toLowerCase())
    }
}