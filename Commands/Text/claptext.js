module.exports = {
    name: 'claptext',
    async execute(client, message) {
      let thingtosend = message.content.slice(`11`).rpremovepings().replace(/ /g, '👏');
      message.channel.send(thingtosend)
    }
}