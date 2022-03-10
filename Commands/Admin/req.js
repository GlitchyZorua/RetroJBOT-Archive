const fs = require('fs-extra')
module.exports = {
	name: 'req',
	async execute({ message }) {
		if (!adminlist.admins.includes(message.author.id)) {
			return ":x: Error: Nothing found.";
		}
		return ':heavy_check_mark: Success: Found ID in `admins.txt`';
	}
}