var eegg = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'https://miro.medium.com/max/455/1*snTXFElFuQLSFDnvZKJ6IA.png', '', '', '', '', '', '', '', '']
const fs = require('fs-extra')
var adminlist = fs.readJSONSync('./admins.txt')
const { inspect } = require('util');
module.exports = {
    name: 'eval',
    async execute(client, message, args) {
    if (!adminlist.admins.includes(message.author.id)) {
      message.channel.send(':x: *You told the bot to do something, the bot refused, It seems like you need `BOT_ADMIN` to use this command.*');
      return
      } else {
      try {
        evaled = await eval(args.join(' '));
        message.channel.send("```js" + "\n" + inspect(evaled) + "```");
        console.log(inspect(evaled));
      }
      catch (error) {
        console.error(error);
        message.channel.send(':x: ***Oops! An error occurred!***\n' + eegg[Math.floor(Math.random() * eegg.length)] + "\n```js" + "\n" + inspect(error) + "```");
            }
    }
  }
}
