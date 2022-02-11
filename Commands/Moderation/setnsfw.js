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
    name: 'setnsfw',
    async execute(client, message) {
      if (message.channel instanceof Discord.DMChannel) { //do not execute
        message.channel.send(':no_entry_sign: You cannot use this command in dms.');
        return;
      }
      if (message.content.substring(10) === ""){
        message.channel.send(":x: Syntax Error! syntax: j.setnsfw <(on|off)>")
       return
      }
      if (message.channel instanceof Discord.DMChannel) { //do not execute
        message.channel.send(':no_entry_sign: You cannot use this command in dms. Why the hell would you post nsfw in my dms? You are a creep.');
        return;
      }
        if (!message.member.hasPermission("MANAGE_CHANNELS")) {
          message.reply(':hammer: :underage: No horny. You must have `MANAGE_CHANNELS` in order to do the horny. Why the fuck would I allow you to do this?');
          return
        }
      if (message.content.substring(10) === "on"){
        let channel = message.channel; channel.edit({ nsfw: !channel.nsfw })
        message.channel.send(":underage: :white_check_mark: Alright, NSFW is on. Now go and do what I think you are gonna do... (Gross...)")
      }
      if (message.content.substring(10) === "off"){
        let channel = message.channel; channel.edit({ nsfw: channel.nsfw })
        message.channel.send(":underage: :negative_squared_cross_mark: Alright, NSFW is off... Thank GOD...")
      } else {
        message.channel.send(":underage: :x: Invalid Syntax. Syntax: `j.setnsfw (<on|off>)`")
      }
    }
}
