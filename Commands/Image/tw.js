module.exports = {
    name: 'undertale',
    async execute(client, message) {
      message.channel.send('<a:Loading_Color:759914061696860202> *Loading...*').then(msg => {
        require('http').get('http://api.img4me.com/?font=sans&fcolor=000000&size=35&type=png&text=' + message.content.slice(5), function (d) { d.on('data', function (n) { message.channel.send(String(n)) }) })
        msg.delete();
    });
  }
  }