String.prototype.removepings = function() {
  return this
      .replace(/(@(?:everyone|here))/gi, 'no') //@everyone/here ping
      .replace(/<@&(\d+)>/gi, "no") //role ping
      .replace(/<@!?(\d+)>/gi, "no") //user ping
};
const Discord = require('discord.js')
module.exports = {
    name: 'purgecia',
    async execute(client, message) {
        message.channel.send(':x: being rewritten');
return
      if (message.channel instanceof Discord.DMChannel) { //do not execute
        message.channel.send(':bomb: :no_entry_sign: You cannot use this command in dms. **The cia has blocked this command from dms.**');
        return;
      }
      if (message.author.bot) {
        message.channel.send(':x: no.');
      } else {
  
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
          message.reply(':bomb: :x: Sorry, but you must have `MANAGE_MESSAGES` to use this command.');
          return
        }
        message.channel.bulkDelete(1000)
        message.channel.send("**The CIA has taken down the contents of this channel.**")
      }
    }
}