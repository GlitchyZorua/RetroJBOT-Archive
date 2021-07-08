const Discord = require('discord.js')
module.exports = {
    name: 'shrek',
    async execute(client, message, args) {
      if (message.channel instanceof Discord.DMChannel) {
        message.channel.send(':no_entry_sign: You cannot use this command in dms.');
        return;
      }
      if (!member.hasPermission('MANAGE_WEBHOOKS')) {
      message.channel.send(":x: You must have `MANAGE_WEBHOOKS` to perform this action")
      return
      }
      message.channel.send('<a:Loading_Color:759914061696860202>').then(msg => {
        message.channel.createWebhook('Shrek', { avatar: 'https://cdn.discordapp.com/avatars/757068148511080529/c986c8cde4521200fe42540acec0fba0.png?size=1024' }).then(webhook => {
          console.log('[MSG] <a:Loading_Color:759914061696860202>');
          const webhooksend = new Discord.WebhookClient(webhook.id, webhook.token);
          webhooksend.send('I AM SHREK')
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