const Discord = require("discord.js");
module.exports = {
    name: 'winxp',
    async execute(client, message, args) {
      if (message.channel instanceof Discord.DMChannel) { //do not execute
        message.channel.send(':no_entry_sign: You cannot use this command in dms.');
        return;
      }
      message.channel.send('<a:Loading_Color:759914061696860202>').then(msg => {
        message.channel.createWebhook('Windows XP', { avatar: 'https://cdn.discordapp.com/avatars/757068117846523954/4881f167d7db8fc35b20f8cd3b014613.png?size=1024' }).then(webhook => {
          console.log('[MSG] <a:Loading_Color:759914061696860202>');
          const webhooksend = new Discord.WebhookClient(webhook.id, webhook.token);
          webhooksend.send('Windows XD')
            .then(() => webhook.delete());
          msg.delete();
        }).catch(err => {
          msg.delete();
          message.channel.send(":x: An error occurred. This could happen if `WEBHOOK_PERMISSIONS` is missing.");
          console.error(err);
        });
      });
    }
}