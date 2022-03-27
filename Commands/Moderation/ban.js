const Discord = require('discord.js')
module.exports = {
	name: 'ban',
	async execute({ args, message, send }) {
		if (message.channel instanceof Discord.DMChannel) return ':no_entry_sign: You cannot use this command in dms. You can\'t just ban me off of my DMS! That\'s IMPOSSIBLE.';
		if (!message.member.permissions.has("BAN_MEMBERS")) return ':hammer: :no_entry: Your permissions forbid you to ban someone. You must have `BAN_MEMBER`';

		const user = message.mentions.users.first();
		// If we have a user mentioned
		if (user) {
			// Now we get the member from the user
			const member = message.guild.member(user);
			args.shift();
			let reason = args.join(" ");
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
						reason: reason,
					})
					.then(() => {
						reason = reason || "No reason provided";
						message.channel.send(`:hammer: :white_check_mark: Successfully Banned ${user.tag}!  Reason: ` + reason);
						send(new Discord.MessageEmbed().setImage("https://cdn.discordapp.com/attachments/464188047664087040/800819721682812928/external-content.duckduckgo.com.gif"));
					})
					.catch(err => {
						// An error happened
						// This is generally due to the bot not being able to ban the member,
						// either due to missing permissions or role hierarchy
						send(':x: I was unable to ban the member. `This is generally due to the bot not being able to ban the member, either due to missing permissions or role hierarchy. if that is not the case, please contact my creator.`');
					});
			} else return ":warning: That user isn't in this guild!";
		} else return ":no_pedestrians: You didn't mention the user to ban!\n`Syntax: j.ban <@mention> [reason]`";
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