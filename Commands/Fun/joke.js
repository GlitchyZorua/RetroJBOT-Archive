module.exports = {
    name: 'joke',
    async execute(client, message, args) {
      message.channel.send('<a:Loading_Color:759914061696860202> *Loading...*').then(msg => {
        require('https').get('https://v2.jokeapi.dev/joke/Any?format=txt&safe-mode', function (d) { d.on('data', function (n) { message.channel.send(String(n)) }) })
        msg.delete();
        return;
      });
    }
}