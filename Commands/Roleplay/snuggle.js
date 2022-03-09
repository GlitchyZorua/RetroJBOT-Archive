module.exports = {
	name: 'snuggle',
	async execute({ input, message }) {
		if (input === "") return ":x: Syntax error! Synax: j.snuggle <text>";
		return `*${message.author.tag} snuggles ${input}! OwO*`;
	}
}