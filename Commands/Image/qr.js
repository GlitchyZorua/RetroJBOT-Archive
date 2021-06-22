const Discord = require("discord.js");
module.exports = {
    name: 'qr',
    async execute(client, message) {
        var thingtosend = message.content.slice(4)
        if (thingtosend === "") {
          message.channel.send(":octagonal_sign: Syntax Error. Syntax: j.qr <text>")
          return;
        }
        const aaaa = new Discord.MessageEmbed()
          .setImage("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(thingtosend))
          message.channel.send(aaaa)
        return;
    }
}