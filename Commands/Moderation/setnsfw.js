const Discord = require('discord.js')
module.exports = {
	name: 'setnsfw',
	async execute({ message, input }) {
		if (message.channel instanceof Discord.DMChannel) return ':no_entry_sign: You cannot use this command in dms.';
		if (input === "") return ":x: Syntax Error! syntax: j.setnsfw <(on|off)>";
		if (!message.member.hasPermission("MANAGE_CHANNELS")) return ':hammer: :underage: No horny. You must have `MANAGE_CHANNELS` in order to do the horny. Why the fuck would I allow you to do this?';

		const channel = message.channel;
		if (input === "on") {
			channel.edit({ nsfw: false })
			return ":underage: :white_check_mark: Alright, NSFW is on. Now go and do what I think you are gonna do... (Gross...)";
		} else if (message.content.substring(10) === "off") {
			channel.edit({ nsfw: true });
			return ":underage: :negative_squared_cross_mark: Alright, NSFW is off... Thank GOD...";
		} else return ":underage: :x: Invalid Syntax. Syntax: `j.setnsfw (<on|off>)`";
	}
}
