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
    name: 'purgecus',
    async execute(client, message) {
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
      message.channel.send(thingtosend)
      }
    }
}