const fs = require('fs-extra');
var ssbans = fs.readJSONSync('ssbans.txt')
const Discord = require('discord.js')
var adminlist = fs.readJSONSync('./admins.txt')
module.exports = {
    name: 'sban',
    async execute(client, message, args) {
      if (!adminlist.admins.includes(message.author.id)) {
        message.channel.send(':x: Access Denied. You must have `BOT_ADMIN`');
        return
        }
      let person = message.content.slice(7).removepings()
      ssbans.bans.push(person)
      const embed = new Discord.MessageEmbed()
      .setColor('#ff0000')
      .setTitle('User Banned From Serversend!')
      .setDescription('User Banned: '+person)
      .setThumbnail('https://cdn.discordapp.com/attachments/676219827282509843/788948802773319720/vglitch.png')
      fs.writeFileSync('ssbans.txt', JSON.stringify(ssbans))
      message.channel.send('Success! Swinged the banned hammer on ' + person + " from using Serversend https://media1.tenor.com/images/ae83976e867ebc2722054a632ff045ad/tenor.gif?itemid=11035060\n:warning: You can sban people, but most of the RetroJBOT services aren't available.");
      client.channels.cache.get('476209927128612864').send(embed)
      return;
    }
}