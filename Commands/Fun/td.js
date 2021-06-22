var td = ['truth','dare']
module.exports = {
    name: 'td',
    async execute(client, message, args) {
        message.channel.send(td[Math.floor(Math.random() * td.length)])
    }
}