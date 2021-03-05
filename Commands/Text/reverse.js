module.exports = {
    name: 'reverse',
    async execute(client, message) {
      let thingtosend = message.content.slice(10).aremovepings()
    
      message.channel.send('```'+reverse(thingtosend)+'```')
    }
}