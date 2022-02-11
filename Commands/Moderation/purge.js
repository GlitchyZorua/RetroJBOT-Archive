String.prototype.removepings = function() {
  return this
      .replace(/(@(?:everyone|here))/gi, 'no') //@everyone/here ping
      .replace(/<@&(\d+)>/gi, "no") //role ping
      .replace(/<@!?(\d+)>/gi, "no") //user ping
};
const Discord = require('discord.js')
module.exports = {
    name: 'purge',
    async execute(client, message) {
     message.channel.send(':x: Being rewritten.');
  }