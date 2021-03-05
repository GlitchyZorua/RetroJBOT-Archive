module.exports = {
    name: 'say',
    async execute(client, message) {
      let thingtosend = message.content.slice(6).removepings()
      if (thingtosend != '') message.channel.send(thingtosend) //sends the message
      console.log(message.content.slice(6))
    }
}