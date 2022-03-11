module.exports = {
	name: 'lowercase',
	async execute({ input }) {
		if (input === "") return ":x: syntax error! syntax: j.lowercase <text>";
		return input.toLowerCase();
	}
}