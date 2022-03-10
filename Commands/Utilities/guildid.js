module.exports = {
	name: 'guildid',
	async execute({ message }) {
		if (message.channel instanceof Discord.DMChannel) return ':no_entry_sign: You cannot use this command in dms.';
		return message.guild.id.toString();
	}
}