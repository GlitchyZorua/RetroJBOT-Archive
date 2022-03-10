const Discord = require('discord.js');
module.exports = {
    name: 'nsay',
    async execute({ message, input }) {
      if (message.channel instanceof Discord.DMChannel) return ':no_entry_sign: You cannot use this command in dms.';
      if (input === "") return ":x: Syntax error! Synax: j.nsay <text>";
      message.delete().catch(_O_o => 0); //deletes previous messages. Sneaky, Sneaky, right?
      return input;
    }
}