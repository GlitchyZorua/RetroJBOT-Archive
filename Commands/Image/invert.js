const fs = require('fs')
const channelCache = new Map()
module.exports = {
    name: 'invert',
    async execute(client, message) {
      const Jimp = require('jimp');

      message.channel.send(':Loading_Color: *Please wait...*').then(msg => {
        if(message.attachments.first()) {
          var imbib = message.attachments.first()
          var imbibi = imbib.name.toLowerCase()
          if(imbibi.endsWith('.gif') || imbibi.endsWith('.png') || imbibi.endsWith('.jpg')) { var image = message.attachments.first() } else { return message.reply('File not supported.') };
        } else if(message.mentions.users.first()) {
          var aaaa = message.mentions.users.first()
          var image = 'https://cdn.discordapp.com/avatars/' + aaaa.id + '/' + aaaa.avatar + '.png?size=1024'
        } else {
          return message.reply('You need to send an image!')
        }
        Jimp.read(image, (err, img) => {
          if (err) throw err;
          message.channel.startTyping();
          img
            .invert()
            .write('reverse.png')
            message.reply({files: ['reverse.png']})
            message.channel.stopTyping(true);
        });
  });
          fs.unlink('invert.png', (err) => {
            if (err) {
                throw err;
            }
          });
        return;
    }
}


