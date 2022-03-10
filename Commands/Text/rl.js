const letters = [..."QWERTYUIOPASDFGHJKLZXCVBNMqwertuiopasdfhjklzxcvbnm"]
module.exports = {
	name: 'rl',
	async execute() {
		return letters[Math.floor(Math.random() * letters.length)];
	}
}