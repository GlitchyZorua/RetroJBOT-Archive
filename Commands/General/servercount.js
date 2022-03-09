
module.exports = {
	name: 'servercount',
	async execute() {
		return "I am in " + client.guilds.cache.size + " servers";
	}
}