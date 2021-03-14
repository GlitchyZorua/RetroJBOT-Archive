module.exports = {
    name: 'calc',
    async execute(client, message) {
      message.content = message.content.slice(7)
    var nanieeggyes = nanieegg[Math.floor(Math.random() * nanieegg.length)]
    if (!message.content) return message.channel.send("🖩 " + nanieeggyes)
    message.channel.send('🖩 ' + calc(message.content))
    console.log('🖩 ' + calc(message.content))
    }
}