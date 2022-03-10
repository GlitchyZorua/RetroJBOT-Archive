const Discord = require("discord.js");
const fs = require("fs-extra");
const tipzero = ["", " You can join my server with j.invite"];
const ssbans = fs.readJSONSync('./ssbans.txt')
const ok = new Set();
module.exports = {
  name: 'sswave',
  async execute({ message, input }) {
    if (ok.has(message.author.id)) return ":alarm_clock: **Cooldown** You can only send one message per minute, Please slowdown. *tick tock*";
    if (message.channel.nsfw) return "🔞 Sorry, this command is not allowed in NSFW channels. **Bypassing this restrictions will be a ban without any warning.**";
    if (input === "") return ":warning: Syntax Error! Syntax: j.ss <text>";
    ok.add(message.author.id);
    setTimeout(() => {
      // Removes the user from the set after a minute
      ok.delete(message.author.id);
    }, 60000);
    if (ssbans.bans.includes(message.author.id)) {
      return yes = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle(':no_entry: You have been banned from using serversend.')
        .setDescription(message.author.tag + ' sent a wave! Hello on the other side!')
        .setThumbnail('https://media.discordapp.net/attachments/676219827282509843/875554282173243412/resize.png');
    }
    const no = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle(message.author.tag + " (id: " + message.author.id + ")")
      .setDescription(message.author.tag + ' sent a wave! Hello on the other side!')
      .setThumbnail('https://media.discordapp.net/attachments/676219827282509843/875554282173243412/resize.png')
    client.channels.cache.get('617865643307434025').send(no)
    return ':white_check_mark: Sent a wave! Hello on the other side!'
    //  ssnum++;
  }
}