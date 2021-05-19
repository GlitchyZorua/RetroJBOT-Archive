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
    name: 'hackban',
    async execute(client, message) {
      let thingtosend = message.content.slice(11).removepings()
      if (message.channel instanceof Discord.DMChannel) { //do not execute
        message.channel.send(':no_entry_sign: You cannot use this command in dms.');
        return;
      }
      if (!message.member.hasPermission("BAN_MEMBER")) {
        message.reply('Your permissions forbid you to ban someone.');
        return
      }
      let args = message.content.slice(9).split(" ")
      if (args === ""){
        message.channel.send(":x: Syntax Error! Syntax: j.hackban <@> [reason]")
      }
      args.shift();
      let reasonb = args.join(" ");
             const giflol = new Discord.MessageEmbed()
              .setImage("https://cdn.discordapp.com/attachments/464188047664087040/800819721682812928/external-content.duckduckgo.com.gif")
           
      var userID = args[0];
  if (!userID) return message.channel.send(":x: Please insert a valid user ID")
  if (isNaN (userID)) return message.channel.send(":x: User ID must be a number")
  
  if (!reasonb) reasonb = "No reason provided";
  var id = args[0];
  client.users.fetch(id).then(async user => {
  
    await message.guild.members.ban(user.id, {reason: reasonb});
    message.channel.send(`:hammer: :white_check_mark: Successfully Banned ${user.tag} outside of this server!  Reason: `+reasonb);
    message.channel.send(giflol)
  
    return
  }).catch(err => {
  message.channel.send("Unable to ban this user. They are probably not in a server that retrojbot is in, or Missing `BAN_MEMBER` Permission. If this error happends even if the arguments are correct, then this might be a bug. Contact my creator if it is.")
  console.error(err);
  });
    }
}