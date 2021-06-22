String.prototype.removepings = function() {
  return this
      .replace(/(@(?:everyone|here))/gi, 'no') //@everyone/here ping
      .replace(/<@&(\d+)>/gi, "no") //role ping
      .replace(/<@!?(\d+)>/gi, "no") //user ping
      .replace("nigger", "no")
      .replace("Nigger", "no")
};
const Discord = require('discord.js')
module.exports = {
    name: 'ban',
    async execute(client, message) {
      if (message.channel instanceof Discord.DMChannel) { //do not execute
        message.channel.send(':no_entry_sign: You cannot use this command in dms. You can\'t just ban me off of my DMS! That\'s IMPOSSIBLE.');
        return;
      }
        if (!message.member.hasPermission("BAN_MEMBER")) {
          message.reply(':hammer: :no_entry: Your permissions forbid you to ban someone. You must have `BAN_MEMBER`');
          return
        }
        
  
        //    if (permArray.indexOf(true) == -1) {
        //      message.reply('Your permissions forbid you to ban someone.');
        //      return
        //    } HAHAHA, THIS ONE I SHIT MY SELF ON. LOL
       const user = message.mentions.users.first();
       // If we have a user mentioned
         // Now we get the member from the user
         const member = message.guild.member(user);
         let args = message.content.slice(5).split(" ")
         args.shift();
         let reasona = args.join(" ");
         message.guild.members.unban(user, reasona);
         message.message.send("Successfully ")
      }
}

/*/
module.exports = {
    name: 'bodm',
    async execute(client, message) {
        if (message.content.slice(5) === "") {
          message.channel.send(":x: Syntax Error! Syntax: j.bodm <id> <text>")
          return;
        }
         // Now we get the member from the user
         const member = message.guild.member(user);
         let args = message.content.slice(4).split(" ")
         args.shift();
         let reasona = args.join(" ");
         client.users.cache.get(args).send(reasona)
      }
}
/*/