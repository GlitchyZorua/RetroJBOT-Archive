const Discord = require('discord.js')
String.prototype.removepings = function() {
  return this
      .replace(/(@(?:everyone|here))/gi, 'no') //@everyone/here ping
      .replace(/<@&(\d+)>/gi, "no") //role ping
      .replace(/<@!?(\d+)>/gi, "no") //user ping
      .replace("nigger", "no")
      .replace("Nigger", "no")
};
module.exports = {
    name: 'nsay',
    async execute(client, message) {
      if (message.channel instanceof Discord.DMChannel) { //do not execute
        message.channel.send(':no_entry_sign: You cannot use this command in dms.');
        return;
      }
      let thingtosend = message.content.slice(7).removepings()
      if (thingtosend == ""){
        message.channel.send(":x: Syntax error! Synax: j.nsay <text>")
          return
        }
      //message.channel.send(':x: this command is disabled.')
      message.delete().catch(_O_o => { }); //deletes previous messages. Sneaky, Sneaky, right?
      // let thingtosend = message.content.slice(7).replace(/(@(?:everyone|here))/gi, 'nope')
   //   if (thingtosend != '') 
      message.channel.send(thingtosend) //sends the message
      console.log(message.content.slice(7))
      return;
    }
}