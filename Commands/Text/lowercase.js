module.exports = {
	name: 'lowercase',
	async execute({ input }) {
		if (input === "") return ":x: syntax error! synax: j.figlet <text>";
		return input.toLowerCase();
	}
}