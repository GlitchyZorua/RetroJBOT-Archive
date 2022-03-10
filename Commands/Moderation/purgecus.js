const Discord = require('discord.js')
module.exports = {
	name: 'purgecus',
	async execute({ message }) {
		if (message.channel instanceof Discord.DMChannel) return ':bomb: :no_entry_sign: You cannot use this command in dms. **The cia has blocked this command from dms.**';
		if (message.author.bot) return ':x: no.';
		if (!message.member.hasPermission("MANAGE_MESSAGES")) return ':bomb: :x: Sorry, but you must have `MANAGE_MESSAGES` to use this command.';

		message.channel.bulkDelete(1000)
		return "Woohoo";
	}
}