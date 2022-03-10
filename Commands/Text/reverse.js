function reverse(txt) {
	return [...txt].reverse().join('');
}
module.exports = {
	name: 'reverse',
	async execute({ input }) {
		if (input === "") return ":x: Syntax error! Syntax: j.reverse <text>";
		return '```' + reverse(input) + '```';
	}
}