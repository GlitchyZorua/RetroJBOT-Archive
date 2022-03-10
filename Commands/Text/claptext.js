module.exports = {
	name: 'claptext',
	async execute({ input }) {
		let clap = input.replace(/ /g, '👏');
		if (clap === "") return ":clap: PUT :clap: SOMETHING :clap: NEXT :clap: TO :clap: THE :clap: FUCKING :clap: COMMAND\n:x: Syntax error! Syntax: j.claptext <text>";
		return clap;
	}
}