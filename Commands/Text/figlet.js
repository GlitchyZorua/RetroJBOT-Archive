module.exports = {
	name: 'figlet',
	async execute({ input, send }) {
		const msg = await send('<a:Loading_Color:759914061696860202> *loading...*');
		if (input == "") return ":x: Syntax error! Synax: j.figlet <text>"
		require('https').get(`https://artii.herokuapp.com/make?text=${encodeURIComponent(input)}&font=graffiti`, function (d) {
			d.on('data', function (n) {
				msg.delete();
				send('```' + String(n) + '```');
			});
		});
	}
}