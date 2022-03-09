const Discord = require('discord.js')
module.exports = {
	name: 'hackban',
	async execute({ args, client, message }) {
		if (message.channel instanceof Discord.DMChannel) return ":no_entry_sign: You cannot use this command in dms.";
		if (!message.member.hasPermission("BAN_MEMBER")) return "Your permissions forbid you to ban someone.";
		if (args === []) return ":x: Syntax Error! Syntax: j.hackban <@> [reason]";

		const reason = args.slice(1).join(" ");
		const giflol = new Discord.MessageEmbed()
			.setImage("https://cdn.discordapp.com/attachments/464188047664087040/800819721682812928/external-content.duckduckgo.com.gif");

		var userID = args[0];
		if (!userID) return ":x: Please insert a valid user ID";
		if (isNaN(userID)) return ":x: User ID must be a number";

		reason = reason || "No reason provided"; //really wanna use ??= here
		var id = args[0];
		client.users.fetch(id).then(async user => {
			await message.guild.members.ban(user.id, { reason: reason });
			await send(`:hammer: :white_check_mark: Successfully Banned ${user.tag} outside of this server!  Reason: ` + reason);
			send(giflol);
		}).catch(err => {
			console.error(err);
			send("Unable to ban this user. They are probably not in a server that retrojbot is in, or Missing `BAN_MEMBER` Permission. If this error happends even if the arguments are correct, then this might be a bug. Contact my creator if it is.");
		});
	}
}