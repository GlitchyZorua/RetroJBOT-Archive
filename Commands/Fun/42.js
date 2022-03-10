const Discord = require("discord.js");
module.exports = {
    name: '42',
    async execute({ input, message }) {
      if (message.channel instanceof Discord.DMChannel) return ':no_entry_sign: You cannot use this command in dms.';
      if (!message.member.hasPermission('MANAGE_WEBHOOKS')) return ":x: You must have `MANAGE_WEBHOOKS` to perform this action";
      message.channel.send('<a:Loading_Color:759914061696860202>').then(msg => {
        message.channel.createWebhook('System42', { avatar: 'https://cdn.discordapp.com/avatars/480276421252612098/98426f23b3bfab6b0cd8c00e2da3750b.png?size=1024' }).then(webhook => {
          const webhooksend = new Discord.WebhookClient(webhook.id, webhook.token);
          webhooksend.send('𝓘 𝓽𝓱𝓲𝓷𝓴 𝓷𝓸𝓽.')
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