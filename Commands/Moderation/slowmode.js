String.prototype.removepings = function() {
  return this
      .replace(/(@(?:everyone|here))/gi, 'no') //@everyone/here ping
      .replace(/<@&(\d+)>/gi, "no") //role ping
      .replace(/<@!?(\d+)>/gi, "no") //user ping
};
const Discord = require('discord.js')
module.exports = {
    name: 'slowmode',
    async execute(client, message) {
      if (message.channel instanceof Discord.DMChannel) { //do not execute
        message.channel.send(':no_entry_sign: You cannot use this command in dms.');
        return;
      }
      let thingtosend = message.content.slice(11).removepings()
      if (thingtosend === ""){
        message.channel.send(":x: Syntax Error! Syntax: j.slowmode (<#|off>)")
      return;
      }
      if (thingtosend.toLowerCase() == "jacobw") {
        message.channel.send('Heyyy ;)');
        return;
      }
      if (message.channel instanceof Discord.DMChannel) {
        message.channel.send(':no_entry_sign: You cannot use this command in dms.');
        return;
      }
      if (!message.member.hasPermission("MANAGE_CHANNELS")) {
        message.reply(':no_entry: You must have `MANAGE_CHANNELS` Permission to do this.');
        return;
      }
      if (thingtosend.toLowerCase() == "off") {
        message.channel.setRateLimitPerUser(0)
        message.channel.send('> :snail: :white_check_mark: Slowmode is off.');
        return;
      }
      if (thingtosend.toLowerCase() == 0) {
        message.channel.setRateLimitPerUser(0)
        message.channel.send('> :snail: :white_check_mark: Slowmode is off.');
        return;
      }
      if (isNaN(thingtosend)) {
        message.reply(':x: Numbers only. (tip: you can type j.slowmode off or 0 to turn it off)');
        return;
      }
      if (thingtosend > 21600) {
        message.reply(':x: You cannot go higher then 21600.');
        return;
      }
      if (thingtosend < 0) {
        message.reply(':x: You cannot go lower then 0.');
        return;
      }
      message.channel.setRateLimitPerUser(thingtosend)
      message.channel.send('> :snail: :white_check_mark: Slowmode time has been set to '+thingtosend)
    return;
    }
}