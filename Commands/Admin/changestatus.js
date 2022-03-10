const fs = require('fs-extra')
const adminlist = fs.readJSONSync('./admins.txt')
module.exports = {
	name: 'changestatus',
	async execute({ client, message, input }) {
		if (!adminlist.admins.includes(message.author.id)) {
			return ':no_entry: Bot Admin Only. (`BOT_ADMIN`)';
		}
		if (input === "online") {
			client.user.setStatus('online');
			return ':white_check_mark: The bot status has been set to online';
		}
		if (input === "invisible") {
			client.user.setStatus('invisible');
			return ':white_check_mark: The bot status has been set to offline\n:warning: Please note that even if the status is set to offline, it doesnt mean that the bot is dead. If you want to kill the bot, please use `j.die` instead';
		}
		if (input === "idle") {
			client.user.setStatus('idle');
			return ':white_check_mark: The bot status has been set to idle';
		}
		if (input === "dnd") {
			client.user.setStatus('dnd');
			return ':white_check_mark: The bot status has been set to dnd. (aka do not disturb)';
		}
		return ':x: **Syntax Error** That status doesn\'t exist. Syntax: `j.changestatus (<online|invisible|idle|dnd>)`';
	}
}