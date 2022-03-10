module.exports = {
	name: 'ctf',
	async execute({ input }) {
		if (input === "") return ":x: Syntax Error! Syntax: j.ctf <#>";
		input = +input;
		const celfinal = 32 + 1.8 * input
		return `:thermometer: ${celfinal}°F`;
	}
}