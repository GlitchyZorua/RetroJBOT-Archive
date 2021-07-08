const fs = require('fs-extra');
var ssbans = fs.readJSONSync('ssbans.txt')
const Discord = require('discord.js')
var adminlist = fs.readJSONSync('./admins.txt')
module.exports = {
    name: 'sunban',
    async execute(client, message, args) {
      if (!adminlist.admins.includes(message.author.id)) {
        message.channel.send(':x: Access Denied. You must have `BOT_ADMIN`');
        return
        }
      let personb = message.content.slice(9).removepings()
      const person = ssbans.bans.indexOf(personb)
      ssbans > -1 ? ssbans.splice(ssbans, 1) : false
      const embed = new Discord.MessageEmbed()
      .setColor('#ff0000')
      .setTitle('User unbanned From Serversend!')
      .setDescription('User unbanned: '+person)
      .setThumbnail('https://cdn.discordapp.com/attachments/676219827282509843/788948802773319720/vglitch.png')
      fs.writeFileSync('ssbans.txt', JSON.stringify(ssbans))
      message.channel.send('Succesfully unbanned user: '+message.content.slice(9));
      client.channels.cache.get('476209927128612864').send(embed)
      return;
    }
}

