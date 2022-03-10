module.exports = {
	name: 'unixtime',
	async execute() {
		const unixTime = Math.floor(Date.now() / 1000);
		return `🕒 ${unixTime}`;
	}
}