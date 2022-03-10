const easteregg = ['Loading...', 'You just got to have a loading animation.', 'Loading...', 'Loading...', 'Loading...', 'HeY gUys lOok aT thIS cOOl LoaDing AnImATioN!', 'Please wait...', 'Haryie, why do you think this loading animation is cringe?', 'Loading...', '[Insert loading message here]', 'Loading...', 'Loading...', 'Loading...', 'Loading...', 'Loading...', 'Loading...', 'Loading...', 'Loading...', 'Loading...', 'Loading...', 'Loading...', '<a:HELP:782090880370212886> i AM TRYING TO LOAD, BUT I AM STRUGGLING PAINFULLY PDJHGKIPHJMGFLK HaLP'];
module.exports = {
	name: 'fact',
	help: "Tells you a random fact.",
	async execute({ message, slash, send }) {
		if (!slash) send('<a:Loading_Color:759914061696860202> ' + easteregg[Math.floor(Math.random() * easteregg.length)])
			.then(msg => msg.delete()); //why jacob why

		//hack
		require('https').get('https://uselessfacts.jsph.pl/random.txt?language=en', function (d) {
			d.on('data', function (n) {
				send(n.toString());
			});
		});
	},
	slash({ callCommand }) {
		callCommand();
	},
	options: []
}