const fs = require('fs-extra');
var botbans = fs.readJSONSync('botbans.txt')
const Discord = require('discord.js')
var adminlist = fs.readJSONSync('./admins.txt')
module.exports = {
    name: 'block',
    async execute(client, message, args) {
      if (!adminlist.admins.includes(message.author.id)) {
        message.channel.send(':x: Access Denied. You must have `BOT_ADMIN`');
        return
        }
      let person = message.content.slice(8).removepings()
      botbans.bans.push(person);
      const embed = new Discord.MessageEmbed()
      .setColor('#ff0000')
      .setTitle('Blocked User')
      .setDescription('User Banned: '+person)
      .setThumbnail('https://cdn.discordapp.com/attachments/676219827282509843/788948802773319720/vglitch.png')
      fs.writeFileSync('botbans.txt', JSON.stringify(botbans))
      message.channel.send('Success! Swinged the ban hammer on ' + person + ". They will no longer be able to interact RetroJBOT. \n\nhttps://media1.tenor.com/images/ae83976e867ebc2722054a632ff045ad/tenor.gif?itemid=11035060");
      client.channels.cache.get('476209927128612864').send(embed)
      return;
    }
}