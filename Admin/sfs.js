const fs = require('fs-extra')
var adminlist = fs.readJSONSync('./admins.txt')

module.exports = {
    name: 'sfs',
    async execute(client, message, args) {
      if (!adminlist.admins.includes(message.author.id)) {
        message.channel.send(':x: Access Denied. You must have `BOT_ADMIN`');
        return
        }
      let agszxfg = message.content.slice(6)
      client.channels.cache.get('617865643307434025').send(message.author.tag + `[ADMIN] (id: ${message.author.id})` + ": " + agszxfg)
      message.channel.send(':white_check_mark: Message sent to my server.')
      return;
    }
}