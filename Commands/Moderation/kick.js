const Discord = require('discord.js')
module.exports = {
	name: 'kick',
	async execute({ message, input, send }) {
		if (message.channel instanceof Discord.DMChannel) return ':no_entry_sign: You cannot use this command in dms.';
		if (!message.member.hasPermission("KICK_MEMBER")) return '⛔ Your permissions forbid you to kick someone.';
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
					send(`🦶 ✔ Successfully kicked ` + input);
				}).catch(err => {
					// An error happened
					// This is generally due to the bot not being able to kick the member,
					// either due to missing permissions or role hierarchy
					send(':x: I was unable to kick the member. This is generally due to the bot not being able to ban the member, either due to missing permissions or role hierarchy. if that is not the case, please contact my creator, with j.feedback or just dm him. (Jacobw#8117)');
					// Log the error
					console.error(err);
				});
			} else return ':warning: That user isn\'t in this guild!';
			// Otherwise, if no user was mentioned
		} else return ':warning: You didn\'t mention the user to kick!';
	}
}