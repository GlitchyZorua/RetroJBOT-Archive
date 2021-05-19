var coin = ['Heads', 'Tails']
module.exports = {
    name: 'coinflip',
    async execute(client, message) {
      message.channel.send('The coin landed on ' + "**" + coin[Math.floor(Math.random() * coin.length)] + "**")
        }
}