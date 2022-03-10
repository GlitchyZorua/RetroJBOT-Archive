module.exports = {
	name: 'uppercase',
	async execute({ input }) {
		if (input === "") return ":x: syntax error! synax: j.uppercase <text>";
		return input.toUpperCase();
	}
}