const covid = require('corona-info');
var loading = ["mmk, loading",'loading','please wait','corona sucks']
var args = message.content.slice(9)
module.exports = {
    name: 'covid',
    async execute(client, message) {
      message.channel.send('<a:Loading_Color:759914061696860202> '+loading[Math.floor(Math.random() * loading.length)]).then(msg => {

      msg.delete()
      });
      }
  }
