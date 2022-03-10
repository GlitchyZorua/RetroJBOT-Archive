const { send } = require('process');

module.exports = {
	name: 'cowsay',
	async execute({ input, send }) {
		if (input === "") return ":x: Syntax error! Syntax: j.cowsay <text>";
		const msg = await send('<a:Loading_Color:759914061696860202> *Moooooooo!*');
		require('http').get(`http://cowsay.morecode.org/say?message=${encodeURIComponent(input)}&format=text`, function (d) {
			d.on('data', function (n) {
				send(`\`\`\`${String(n)}\`\`\``);
				msg.delete();
			});
		});
	}
}