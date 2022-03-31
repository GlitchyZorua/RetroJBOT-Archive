const Discord = require('discord.js')
module.exports = {
	name: 'slowmode',
	async execute({ input, message }) {
		if (message.channel instanceof Discord.DMChannel) return ':no_entry_sign: You cannot use this command in dms.';
		if (input === "") return ":x: Syntax Error! Syntax: j.slowmode (<#|off>)";
		if (input === "jacobw") return "Heyyy ;)";
		if (!message.member.permissions.has("MANAGE_CHANNELS")) return ':no_entry: You must have `MANAGE_CHANNELS` permission to do this.';
		if (isNaN(input)) return ':x: Numbers only. (tip: you can type j.slowmode off or 0 to turn it off)';
		if (input > 21600) return ':x: You cannot go higher then 21600.';
		if (input < 0) return ':x: You cannot go lower then 0.';

		if (["off", "0", "disable","false","no","zero","0"].includes(input.toLowerCase())) {
			message.channel.setRateLimitPerUser(0);
			return '> :snail: ❎ Slowmode is off.';
		}
		message.channel.setRateLimitPerUser(input);
		return '> :snail: :white_check_mark: Slowmode time has been set to ' + input;
	}
}
