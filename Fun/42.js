const Discord = require("discord.js");
module.exports = {
    name: '42',
    async execute(client, message, args) {
      if (message.channel instanceof Discord.DMChannel) {
        message.channel.send(':no_entry_sign: You cannot use this command in dms.');
        return;
      }
      if (!message.member.hasPermission('MANAGE_WEBHOOKS')) {
      message.channel.send(":x: You must have `MANAGE_WEBHOOKS` to perform this action")
      return
      }
      message.channel.send('<a:Loading_Color:759914061696860202>').then(msg => {
        message.channel.createWebhook('System42', { avatar: 'https://cdn.discordapp.com/avatars/480276421252612098/98426f23b3bfab6b0cd8c00e2da3750b.png?size=1024' }).then(webhook => {
          console.log('[MSG] <a:Loading_Color:759914061696860202>');
          const webhooksend = new Discord.WebhookClient(webhook.id, webhook.token);
          webhooksend.send('𝓘 𝓽𝓱𝓲𝓷𝓴 𝓷𝓸𝓽.')
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