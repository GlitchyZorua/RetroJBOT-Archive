module.exports = {
    name: 'cat',
    async execute(client, message, args) {
        message.channel.send('<a:Loading_Color:759914061696860202> *Meow?*').then(msg => {
            console.log('[MSG] <a:Loading_Color:759914061696860202> *Meow?*');
            animals.cat().then(url => message.channel.send(url))
            msg.delete();
          });
    }
}