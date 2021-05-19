String.prototype.removepings = function() {
  return this
      .replace(/(@(?:everyone|here))/gi, 'no') //@everyone/here ping
      .replace(/<@&(\d+)>/gi, "no") //role ping
      .replace(/<@!?(\d+)>/gi, "no") //user ping
      .replace("nigger", "no")
      .replace("Nigger", "no")
};
const Discord = require('discord.js')
module.exports = {
    name: 'veriflvl',
    async execute(client, message) {
      let thingtosend = message.content.slice(11).removepings()
      if (message.channel instanceof Discord.DMChannel) {
        message.channel.send(':no_entry_sign: You cannot use this command in dms.');
        return;
      }
      if (!message.member.hasPermission("MANAGE_GUILD")) {
        message.reply(':no_entry: You must have `MANAGE_GUILD` Permission to do this.');
        return;
      }
      if (thingtosend.toLowerCase() === ('0') || thingtosend.toLowerCase() === ('off') || thingtosend.toLowerCase() === ('none')) {
       message.guild.setVerificationLevel(0).then(g => {
         
        message.channel.send(":negative_squared_cross_mark: Server verification level has been set to none")
      }).catch(err => {
        message.channel.send(":x: An error occurred. This could happen if this is a community server or the `MANAGE_GUILD` permission is missing.");
        console.error(err);
      });
      return
    }
  }
  }