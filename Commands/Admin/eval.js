var eegg = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'https://miro.medium.com/max/455/1*snTXFElFuQLSFDnvZKJ6IA.png', '', '', '', '', '', '', '', '']
const fs = require('fs-extra')
var adminlist = fs.readJSONSync('./admins.txt')
const { inspect } = require('util');
var donotsendoutput = 0
module.exports = {
    name: 'eval',
    async execute(client, message, args) {
    if (!adminlist.admins.includes(message.author.id)) {
      message.channel.send(':x: Bot Admin Only.');
      return
      } else {
      try {
        evaled = await eval(args.join(' '));
        console.log(inspect(evaled));
        if (donotsendoutput == 1){ 
          return
        }
        message.channel.send("```js" + "\n" + inspect(evaled) + "```");
      }
      catch (error) {
        console.error(error);
        /*/
        let letterCount = error.replace(/\s+/g, '').length;
        if (letterCount > 3894) { message.channel.send('⛔ An error occurred, but the error was so long that it couldn\'t be displayed. It has been logged.')
        console.log('log error')
        return }
        if (letterCount > 3940) {  message.channel.send('⛔ ***An error occurred during evalation*** \n ```js' + "\n" + inspect(error) + "```");
        console.log("no dog")
        return }
        /*/
        message.channel.send('⛔ ***An error occurred during evalation***\n' + eegg[Math.floor(Math.random() * eegg.length)] + "\n```js" + "\n" + inspect(error) + "```");
      }
    }
  }
}
