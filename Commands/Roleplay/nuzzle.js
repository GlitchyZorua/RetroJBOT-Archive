const Discord = require('discord.js')
String.prototype.rpremovepings = function() {
    return this
        .replace(/(@(?:everyone|here))/gi, 'no')
        .replace(/<@&(\d+)>/gi, "no")
        .replace("nigger", "no")
        .replace("Nigger", "no")
};
module.exports = {
    name: 'nuzzle',
    async execute(client, message) {
      let thingtosend = message.content.slice(8).rpremovepings()
      if (thingtosend == ""){
        message.channel.send(":x: Syntax error! Synax: j.nuzzle <text>")
          return
        }
      message.channel.send("*" + message.author.tag + " nuzzles " + thingtosend + "!*");
    }
}