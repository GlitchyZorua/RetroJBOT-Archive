const fs = require('fs')
module.exports = {
    name: 'grayscale',
    async execute(client, message) {
      const Jimp = require('jimp');
      message.channel.send(":x: Command disabled. Fix me Ojproj! FIX ME!")
      return
      message.channel.send('<a:Loading_Color:759914061696860202> *Please wait...*').then(msg => {
        if(message.attachments.first()) {
          var imbib = message.attachments.first()
          var imbibi = imbib.name.toLowerCase().message.content.slice(11)
          if(imbibi.endsWith('.gif') || imbibi.endsWith('.png') || imbibi.endsWith('.jpg')) { var image = message.attachments.first() } else { return message.reply('File not supported.') };
        } else if(message.mentions.users.first()) {
          var aaaa = message.mentions.users.first()
          var image = 'https://cdn.discordapp.com/avatars/' + aaaa.id + '/' + aaaa.avatar + '.png?size=1024'
        } else {
        message.channel.send(":x: No image attached! (Cache will be implimented later)")
        }
        Jimp.read(image, (err, img) => {
          if (err) throw err;
          message.channel.startTyping();
          img
            .grayscale()
            .write('gs.png')
            message.channel.send({files: ['gs.png']})
            message.channel.stopTyping(true);
        });
        fs.unlink('gs.png', (err) => {
          if (err) {
              throw err;
          }
        });
  });
    }
}


