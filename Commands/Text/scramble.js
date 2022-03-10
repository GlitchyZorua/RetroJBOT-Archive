function shuffle(string) {
	let array = [...string.replace(/  /gi, ' ')]
	array.sort(() => Math.random() - 0.5);
	return array.join("");
}
module.exports = {
	name: 'scramble',
	async execute({ input }) {
		if (input === "") return ":x: Syntax error! Syntax: j.scramble <text>";
		return shuffle(input);
	}
}