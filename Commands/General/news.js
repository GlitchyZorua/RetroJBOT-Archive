module.exports = {
    name: 'news',
    async execute(client, message) {
      message.channel.send('<a:Loading_Color:759914061696860202> *Loading*').then(msg => {
        console.log('[MSG] <a:Loading_Color:759914061696860202> *Loading*');
        msg.delete();
      });
      message.channel.send('https://cdn.discordapp.com/attachments/678402819937796113/759548670772772864/vglitch.png');
      require('https').get('https://gist.githubusercontent.com/Jacobwworkman/38498562ade0ed1b587acb3172a8a1d4/raw/fbc0e0acd24ebd39441cb82d48762182191e80b8/gistfile1.txt', function (d) { d.on('data', function (n) { message.channel.send(String(n)) }) })
      message.channel.send('You are running version v' + version)
    }
}