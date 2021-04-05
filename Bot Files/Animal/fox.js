module.exports = {
    name: 'fox',
    async execute(client, message, args) {
        message.channel.send('<a:Loading_Color:759914061696860202> *What does the fox say?*').then(msg => {
            console.log('[MSG] <a:Loading_Color:759914061696860202> *What does the fox say?*');
            animals.fox().then(url => message.channel.send(url))
            msg.delete();
          });
    }
}