const Discord = require("discord.js");
const fs = require("fs-extra");
const tipzero = ["", " You can join my server with j.invite"];
const ssbans = fs.readJSONSync('./ssbans.txt')
const ok = new Set();
function hidden(...args){
    return { content: String.raw(...args), ephemeral: true };
}
module.exports = {
	name: 'ss',
	help: "Send a message to the RetroJBot server.",
	async execute({ message, input, caller, client }) {

		if (ok.has(caller.id)) return hidden`:alarm_clock: **Cooldown** You can only send one message per minute, Please slowdown. *tick tock*`;
		if (message.channel.nsfw) return hidden`🔞 Sorry, this command is not allowed in NSFW channels. **Bypassing this restrictions will be a ban without any warning.**`;
		if (input === "") return ":warning: Syntax Error! Syntax: j.ss <text>";
		ok.add(caller.id);
		setTimeout(() => {
			// Removes the user from the set after a minute
			ok.delete(caller.id);
		}, 60000);
		if (ssbans.bans.includes(caller.id)) {
			return new Discord.MessageEmbed()
				.setColor('#FF0000')
				.setTitle(':no_entry: You have been banned from using serversend.')
				.setDescription("You have been banned from using serversend. To appeal, please visit https://forms.gle/njmHVkYrFgCUckWbA.")
				.setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Stop_x_nuvola.svg/240px-Stop_x_nuvola.svg.png');
		}
		const no = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setTitle(`${caller.tag} (id: ${caller.id})`)
			.setDescription(input)
			.setThumbnail(caller.avatarURL());
		client.channels.cache.get('617865643307434025').send({embeds:[no]});
		return `:white_check_mark: Sent to my server!${tipzero[Math.floor(Math.random() * tipzero.length)]}`;
		//  ssnum++;
	},
	slash({ callCommand, options }){
		callCommand(options.getString("message"));
	},
	options: [{
		type: "STRING",
		name: "message",
		description: "The message to send to my server.",
		required: true
	}]
}