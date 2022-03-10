module.exports = {
	name: 'microwave',
	async execute({ input, message }) {
		if (input === "") return ":x: Syntax error! Synax: j.microwave <text>";
		return `*${message.author.tag} throws ${input} in the microwave!*`;
	}
}