module.exports = {
	name: 'cl',
	async execute({ input }) {
		if (input === "") return ":x: Syntax Error! Syntax: j.cl <text>";
		const letterCount = input.replace(/\s/g, '').length;
		const wordCount = input.match(/(\w+)/g).length;
		return `🔢 **Words and Letters**\nLetters: ${letterCount}\nWords: ${wordCount}`;
	}
}