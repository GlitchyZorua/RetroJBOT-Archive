module.exports = {
    name: 'vaporwave',
    async execute(client, message) {
      message.channel.send(message.content.slice(12).replace(/()/g, ' '))
    console.log("[ M S G ] [ I N F O ]" + message.content.slice(12).toUpperCase().replace(/()/g, ' '));
    }
}