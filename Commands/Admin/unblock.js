const fs = require('fs-extra');
var botbans = fs.readJSONSync('botbans.txt')
const Discord = require('discord.js')
var adminlist = fs.readJSONSync('./admins.txt')
module.exports = {
    name: 'unblock',
    async execute(client, message, args) {
      if (!adminlist.admins.includes(message.author.id)) {
        message.channel.send(':x: Access Denied. You must have `BOT_ADMIN`');
        return
        }
        let personb = message.content.slice(8).removepings()
        const person = botbans.bans.indexOf(personb)
        botbans > -1 ? botbans.splice(bobans, 1) : false
        message.channel.send('<:happy:464192243562053644> Successfully unblocked id: '+person);
      const embed = new Discord.MessageEmbed()
      .setColor('#00FF00')
      .setTitle('Unblocked User')
      .setDescription('User unbanned: '+message.content.slice(8))
      .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Yes_check.svg/600px-Yes_check.svg.png')
      client.channels.cache.get('476209927128612864').send(embed)
      return;
    }
}


//      var removeUser = message.author.id
//      var json = JSON.parse(botbans);
//      var users = json.users;
//      json.users = users.filter((user) => { return person !== removeUser });
