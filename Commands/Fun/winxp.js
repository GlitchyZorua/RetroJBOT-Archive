const Discord = require("discord.js");
module.exports = {
    name: 'winxp',
    async execute({ input, message }) {
      if (message.channel instanceof Discord.DMChannel) return ':no_entry_sign: You cannot use this command in dms.';
      if (!message.member.hasPermission('MANAGE_WEBHOOKS')) return ":x: You must have `MANAGE_WEBHOOKS` to perform this action";
      message.channel.send('<a:Loading_Color:759914061696860202>').then(msg => {
        message.channel.createWebhook('System42', { avatar: 'https://cdn.discordapp.com/avatars/757068117846523954/4881f167d7db8fc35b20f8cd3b014613.png?size=1024' }).then(webhook => {
          const webhooksend = new Discord.WebhookClient(webhook.id, webhook.token);
          webhooksend.send('Windows XD')
            .then(() => webhook.delete());
          msg.delete();
        }).catch(err => {
          msg.delete();
          console.error(err);
          return ":x: An error occurred. This could happen if `WEBHOOK_PERMISSIONS` is missing.";
        });
      });
    }
}