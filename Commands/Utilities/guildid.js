module.exports = {
    name: 'guildid',
    async execute(client, message) {
      if (message.channel instanceof Discord.DMChannel) { //do not execute
        message.channel.send(':no_entry_sign: You cannot use this command in dms.');
        return
      }
      message.channel.send(message.guild.id);
      console.log('[MSG]' + message.guild.id);
    }
}