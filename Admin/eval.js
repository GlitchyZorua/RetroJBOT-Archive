var eegg = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'https://miro.medium.com/max/455/1*snTXFElFuQLSFDnvZKJ6IA.png', '', '', '', '', '', '', '', '']
const fs = require('fs-extra')
var adminlist = fs.readJSONSync('./admins.txt')
const { inspect } = require('util');
module.exports = {
    name: 'eval',
    async execute(client, message, args) {
    if (!adminlist.admins.includes(message.author.id)) {
      message.channel.send(':x: Bot Admin Only.');
      return
      } else {
      try {
        evaled = await eval(args.join(' '));
        message.channel.send("```js" + "\n" + inspect(evaled) + "```");
        console.log(inspect(evaled));
      }
      catch (error) {
        console.error(error);
        message.channel.send(':x: ***An error occurred during evalation***\n' + eegg[Math.floor(Math.random() * eegg.length)] + "\n```js" + "\n" + inspect(error) + "```");
      }
    }
  }
}
