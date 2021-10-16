
String.prototype.removepings = function() {
  return this
      .replace("`", "'")
};
const Discord = require("discord.js");
module.exports = {
    name: 'binarytotext',
    async execute(client, message) {
      var a = message.content.slice(15).split(" ").map(a => String.fromCharCode(parseInt(a, 2))).join("")
      const yes = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(a)
            message.channel.send(yes)
 //https://artii.herokuapp.com/make?text=ASCII+art&font=graffiti
        if (message.content.slice(15) == ""){
          message.channel.send(":x: Syntax error! Synax: j.binarytotext <text>")
            return
          }
    }
}