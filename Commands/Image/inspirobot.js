module.exports = {
	name: 'inspirobot',
	async execute({ message, send }) {
		message.channel.send('<a:Loading_Color:759914061696860202> *Loading...*').then(async msg => {
			require('https').get('https://inspirobot.me/api?generate=true', function (d) {
				d.on('data', function (n) {
					send(n.toString());
					msg.delete();
				});
			});
		});
		//pyramid of doom tis looks cool also it sucks
	}
}