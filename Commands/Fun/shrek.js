const Discord = require('discord.js')
module.exports = {
    name: 'shrek',
    async execute({ input, message }) {
      if (message.channel instanceof Discord.DMChannel) return ':no_entry_sign: You cannot use this command in dms.';
      if (!message.member.hasPermission('MANAGE_WEBHOOKS')) return ":x: You must have `MANAGE_WEBHOOKS` to perform this action";
      message.channel.send('<a:Loading_Color:759914061696860202>').then(msg => {
        message.channel.createWebhook('System42', { avatar: 'https://cdn.discordapp.com/avatars/757068148511080529/c986c8cde4521200fe42540acec0fba0.png?size=1024' }).then(webhook => {
          const webhooksend = new Discord.WebhookClient(webhook.id, webhook.token);
          webhooksend.send('I AM SHREK.')
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