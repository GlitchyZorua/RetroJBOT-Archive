String.prototype.removepings = function() {
  return this
      .replace(/(@(?:everyone|here))/gi, 'no') //@everyone/here ping
      .replace(/<@&(\d+)>/gi, "no") //role ping
      .replace(/<@!?(\d+)>/gi, "no") //user ping
};
const Discord = require('discord.js')
module.exports = {
    name: 'kick',
    async execute(client, message) {
      if (message.channel instanceof Discord.DMChannel) { //do not execute
        message.channel.send(':no_entry_sign: You cannot use this command in dms.');
        return;
      }
        if (!message.member.hasPermission("KICK_MEMBER")) {
          message.channel.send('⛔ Your permissions forbid you to kick someone.');
          return
        }
        //    if (permArray.indexOf(true) == -1) {
        //      message.reply('Your permissions forbid you to ban someone.');
        //      return
        //    } HAHAHA, THIS ONE I SHIT MY SELF ON. LOL
        // Assuming we mention someone in the message, this will return the user
        // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
        const user = message.mentions.users.first();
        // If we have a user mentioned
        if (user) {
          // Now we get the member from the user
          const member = message.guild.member(user);
          // If the member is in the guild
          if (member) {
            /**
             * Kick the member
             * Make sure you run this on a member, not a user!
             * There are big differences between a user and a member
             */
            member.kick('Kicked by RetroJBOT').then(() => {
              // We let the message author know we were able to kick the person
              message.channel.send(`🦶 ✔ Successfully kicked ` + message.content.slice(6));
            }).catch(err => {
              // An error happened
              // This is generally due to the bot not being able to kick the member,
              // either due to missing permissions or role hierarchy
              message.reply(':x: I was unable to kick the member. This is generally due to the bot not being able to ban the member, either due to missing permissions or role hierarchy. if that is not the case, please contact my creator, with j.feedback or just dm him. (Jacobw#8117)');
              // Log the error
              console.error(err);
            });
          } else {
            // The mentioned user isn't in this guild
            message.reply(':warning: That user isn\'t in this guild!');
          }
          // Otherwise, if no user was mentioned
        } else {
          message.reply(':warning: You didn\'t mention the user to kick!');
        }
        return
      }
    }