module.exports = {
    name: 'dice',
    async execute(client, message, args) {
        let thingtosend = message.content.slice(7).rpremovepings()
        if (thingtosend == isNaN){
          message.channel.send("🎲:x: Not a number (NaN)")
        }
        if (message.content.substring(6) === "") {
          message.channel.send('🎲 ' + Math.floor(Math.random() * 6))
        } else {
          dice = Math.floor(Math.random() * message.content.slice(7))
          message.channel.send('🎲 ' + dice)
          return
        }
    }
}