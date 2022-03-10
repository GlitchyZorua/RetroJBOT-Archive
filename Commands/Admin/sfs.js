const fs = require('fs-extra')
var adminlist = fs.readJSONSync('./admins.txt')

module.exports = {
	name: 'sfs',
	async execute({client, message, input}) {
		if (!adminlist.admins.includes(message.author.id)) return ':x: Access Denied. You must have `BOT_ADMIN`';
		client.channels.cache.get('617865643307434025').send(`${message.author.tag} [ADMIN] (id: ${message.author.id}): ${input}`);
		return ':white_check_mark: Message sent to my server.';
	}
}