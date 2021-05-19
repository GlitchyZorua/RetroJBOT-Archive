module.exports = {
    name: 'thispersondoesnotexist',
    async execute(client, message) {
      message.channel.send('<a:Loading_Color:759914061696860202> *Loading...*').then(msg => {
        var thispersondoesnotexist = require('thispersondoesnotexist');
        thispersondoesnotexist().then(jpeg => message.channel.send(jpeg)); // <Buffer ...>
        msg.delete();
    });
  }
  }