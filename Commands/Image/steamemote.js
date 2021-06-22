module.exports = {
    name: 'steamemote',
    async execute(client, message) {
        var thingtosend = message.content.slice(13)
        var idkwattocallthislol = require('https').get('https://steamcommunity-a.akamaihd.net/economy/emoticon/'+encodeURIComponent(thingtosend))
        if (thingtosend === "") {
          message.channel.send(":octagonal_sign: Specify a name of a steam emote, Please.\nSyntax: j.steamemote <text>")
          return;
        }
        if (idkwattocallthislol === "") {
          message.channel.send(":warning: `Emoji not found`")
          return;
        }
        if (thingtosend === ('porn') || thingtosend === ('penis') || thingtosend === ('ass')) {
          message.channel.send(":no_entry: bitch no.")
          return;
        }
        const aaaa = new Discord.MessageEmbed()
          .setImage("https://steamcommunity-a.akamaihd.net/economy/emoticon/" + encodeURIComponent(thingtosend))
          message.channel.send(aaaa)
        return;
    }
}