const Discord = require('discord.js')
String.prototype.rpremovepings = function() {
  return this
      .replace(/(@(?:everyone|here))/gi, '(a)everyone')
      .replace(/<@&(\d+)>/gi, "no. stop.")
      .replace("nigger", "no")
      .replace("Nigger", "no")
};


module.exports = {
    name: 'hug',
    async execute(client, message) {
      let thingtosend = message.content.slice(5).rpremovepings()
      if (thingtosend == ""){
        message.channel.send(":x: Syntax error! Synax: j.hug <text>")
          return
        }
      message.channel.send("*" + message.author.tag + " is hugging "+thingtosend+"!*")
      var gif = ["https://media.giphy.com/media/3M4NpbLCTxBqU/giphy.gif","https://media.giphy.com/media/ZBQhoZC0nqknSviPqT/giphy.gif","https://media.giphy.com/media/3oEdv4hwWTzBhWvaU0/giphy.gif",'https://media.giphy.com/media/l4FGpP4lxGGgK5CBW/giphy.gif','https://media.giphy.com/media/Hld9vKjLk3irC/giphy.gif','https://media.giphy.com/media/qLEDGdMoyTT9e/giphy.gif','https://media.giphy.com/media/X8WmtjOhnWEommigCy/giphy.gif']
      const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setImage(gif[Math.floor(Math.random() * gif.length)])
        .setFooter('Want to submit your own gif? Type j.feedback <gif link>. It must be a link, not an attachment -- Thanks!', '');
      message.channel.send(exampleEmbed);
    }
}