module.exports = {
	name: 'ftc',
	async execute({ input }) {
		if (input === "") return ":x: Syntax error! Syntax: j.ftc <#>";
		return `:thermometer: ${(+input - 32) / 1.8}°C`;
	}
}