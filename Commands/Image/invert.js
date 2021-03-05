module.exports = {
    name: 'invert',
    async execute(client, message) {
      const Jimp = require('jimp');
    message.channel.send('<a:Loading_Color:759914061696860202> *Please wait...*').then(msg => {
      if(message.attachments.first()) {
        var imbib = message.attachments.first()
        var imbibi = imbib.name.toLowerCase()
        if(imbibi.endsWith('.gif') || imbibi.endsWith('.png') || imbibi.endsWith('.jpg')) { var image = message.attachments.first() } else { return message.reply(':x: `File not supported.`') };
      } else if(message.mentions.users.first()) {
        var aaaa = message.mentions.users.first()
        var image = 'https://cdn.discordapp.com/avatars/' + aaaa.id + '/' + aaaa.avatar + '.png?size=1024'
      } else {
        return message.reply(':warning: You need to attach an image! Syntax: `j.invert <image>`')
      }
      Jimp.read(image, (err, img) => {
        if (err) throw err;
        message.channel.startTyping();
        img
          .invert()
          .write('invert.png')
          message.reply({files: ['invert.png']})
          message.channel.stopTyping(true);
      });
  msg.delete();
});
        return;
    }
}