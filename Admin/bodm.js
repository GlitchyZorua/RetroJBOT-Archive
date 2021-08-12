const fs = require('fs-extra')
var adminlist = fs.readJSONSync('./admins.txt')
const Discord = require('discord.js')
module.exports = {
    name: 'bodm',
    async execute(client, message) {
      /*/
      let args = message.content.slice(8).split(" ")
      args.shift();
      let text = args.join(" ");

    const embed = new Discord.MessageEmbed()
    .setColor('#ffff00')
    .setTitle('Admin DM')
    .setDescription('ID: '+args+'\n'+"Message: "+text)
    .setThumbnail('https://cdn.discordapp.com/attachments/676219827282509843/788949455876653078/vglitch.png')
    client.channels.cache.get('476209927128612864').send(embed)
    client.users.cache.get(args).send(text)
    message.channel.send(':heavy_check_mark: Sent.');
    /*/
    }
}