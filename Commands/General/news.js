module.exports = {
    name: 'news',
    async execute(client, message) {
      message.channel.send('<a:Loading_Color:759914061696860202> *Loading*').then(msg => {
        console.log('[MSG] <a:Loading_Color:759914061696860202> *Loading*');
        msg.delete();
      });
      message.channel.send('https://cdn.discordapp.com/attachments/678402819937796113/759548670772772864/vglitch.png');
      require('https').get('https://pastebin.com/raw/FeiHjGGV', function (d) { d.on('data', function (n) { message.channel.send(String(n)) }) })
      message.channel.send('You are running version v' + process.env.version)
    }
}