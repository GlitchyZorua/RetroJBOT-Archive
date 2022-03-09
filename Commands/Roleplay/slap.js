module.exports = {
	name: 'slap',
	async execute({ input, message }) {
		if (input == "") return ":x: Syntax error! Synax: j.slap <text>";
		return `*${message.author.tag} slaps ${input}!*`;
	}
}