module.exports = {
    name: 'owl',
    async execute(client, message, args) {
        message.channel.send('<a:Loading_Color:759914061696860202> *Loading*').then(msg => {
            console.log('[MSG] <a:Loading_Color:759914061696860202> *Loading*');
           animals.owl().then(url => message.channel.send(url))
          // message.channel.send(':x: Command Disabled')
            msg.delete();
        });
    }
}