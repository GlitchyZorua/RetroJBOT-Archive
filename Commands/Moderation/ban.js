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
        
        if (message.content.slice(5) === "") {
          message.channel.send(":x: Syntax Error! Syntax: j.ban <@> [reason]")
          return;
        }
  
        //    if (permArray.indexOf(true) == -1) {
        //      message.reply('Your permissions forbid you to ban someone.');
        //      return
        //    } HAHAHA, THIS ONE I SHIT MY SELF ON. LOL
       const user = message.mentions.users.first();
       // If we have a user mentioned
       if (user) {
         // Now we get the member from the user
         const member = message.guild.member(user);
         let args = message.content.slice(5).split(" ")
         args.shift();
         let reasona = args.join(" ");
         // If the member is in the guild
         if (member) {
           /**
            * Ban the member
            * Make sure you run this on a member, not a user!
            * There are big differences between a user and a member
            * Read more about what ban options there are over at
            * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
            */
           member
             .ban({
               reason: reasona,
             })
             .then(() => {
               if (reasona == undefined) {
               reasona = "No reason provided"
               }
              message.channel.send(`:hammer: :white_check_mark: Successfully Banned ${user.tag}!  Reason: `+reasona);
              const aaaa = new Discord.MessageEmbed()
              .setImage("https://cdn.discordapp.com/attachments/464188047664087040/800819721682812928/external-content.duckduckgo.com.gif")
              message.channel.send(aaaa);
               // We let the message author know we were able to ban the person
               console.log('[MSG] :hammer: :white_check_mark: Successfully Banned ${user.tag}!  Reason: '+reasona)
               console.log('[MSG] [EMBED] [IMAGE] https://cdn.discordapp.com/attachments/464188047664087040/800819721682812928/external-content.duckduckgo.com.gif')
             })
             .catch(err => {
               // An error happened
               // This is generally due to the bot not being able to ban the member,
               // either due to missing permissions or role hierarchy
               message.channel.send(':x: I was unable to ban the member. `This is generally due to the bot not being able to ban the member, either due to missing permissions or role hierarchy. if that is not the case, please contact my creator.`');
              console.log('[MSG] [ERROR] :x: I was unable to ban the member. `This is generally due to the bot not being able to ban the member, either due to missing permissions or role hierarchy. if that is not the case, please contact my creator.`')
               // Log the error
               console.error(err);
             });
         } else {
           // The mentioned user isn't in this guild
           message.channel.send(":warning: That user isn't in this guild!");
           console.log("[MSG] [WARN] :warning: That user isn't in this guild!");
         }
       } else {
         // Otherwise, if no user was mentioned
         message.reply(":no_pedestrians: You didn't mention the user to ban!\n`Syntax: j.ban <@mention> [reason]`");
         console.log("[MSG] [ERROR] :warning: That user isn't in this guild!");
       }
    }
}