module.exports = {
    name: 'pinktext',
    async execute(client, message) {
      message.channel.send('<a:Loading_Color:759914061696860202> *Loading...*').then(msg => {
        require('http').get('https://coveryourselfinoil.com/text/osmium.php?t=' + message.content.slice(8), function (d) { d.on('data', function (n) { message.channel.send(String(n)) }) })
        msg.delete();
    });
  }
  }