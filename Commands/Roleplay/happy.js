const Discord = require('discord.js')
var gif = ['https://media.giphy.com/media/Lb4IZLmCfALhm/giphy.gif','https://media.giphy.com/media/MeIucAjPKoA120R7sN/giphy.gif','https://media.giphy.com/media/11sBLVxNs7v6WA/giphy.gif','https://media.giphy.com/media/DYH297XiCS2Ck/giphy.gif','https://media.giphy.com/media/TdfyKrN7HGTIY/giphy.gif','https://media.giphy.com/media/CKOh1Chw6Mwi4/giphy.gif','https://media.giphy.com/media/1EnVAKJGFjoM8/giphy.gif']

  module.exports = {
    name: 'happy',
    async execute(client, message) {
      const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle("*" + message.author.tag + " is happy!*")
	.setImage(gif[Math.floor(Math.random() * gif.length)])
  .setFooter('Want to submit your own gif? Type j.feedback <gif link>. It must be a link, not an attachment -- Thanks!', '');
      message.channel.send(exampleEmbed);
    }
}