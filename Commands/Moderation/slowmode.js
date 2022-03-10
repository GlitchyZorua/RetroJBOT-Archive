const Discord = require('discord.js')
module.exports = {
	name: 'slowmode',
	async execute({ input, message }) {
		if (message.channel instanceof Discord.DMChannel) return ':no_entry_sign: You cannot use this command in dms.';
		if (input === "") return ":x: Syntax Error! Syntax: j.slowmode (<#|off>)";
		if (input === "jacobw") return "Heyyy ;)";
		if (!message.member.hasPermission("MANAGE_CHANNELS")) return ':no_entry: You must have `MANAGE_CHANNELS` Permission to do this.';
		if (isNaN(input)) return ':x: Numbers only. (tip: you can type j.slowmode off or 0 to turn it off)';
		if (thingtosend > 21600) return ':x: You cannot go higher then 21600.';
		if (thingtosend < 0) return ':x: You cannot go lower then 0.';

		if (["off", "0"].includes(input.toLowerCase())) {
			message.channel.setRateLimitPerUser(0);
			return '> :snail: :white_check_mark: Slowmode is off.';
		}
		message.channel.setRateLimitPerUser(input);
		return '> :snail: :white_check_mark: Slowmode time has been set to ' + input;
	}
}
