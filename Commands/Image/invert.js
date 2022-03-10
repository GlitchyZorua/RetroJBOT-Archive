const fs = require('fs');
const Jimp = require('jimp');
module.exports = {
	name: 'invert',
	async execute({ input, message, send }) {
		message.channel.send('<a:Loading_Color:759914061696860202> *Please wait...*').then(msg => {
			let image;
			if (message.attachments.first()) {
				let imbib = message.attachments.first().name.toLowerCase();
				if (imbib.endsWith('.gif') || imbib.endsWith('.png') || imbib.endsWith('.jpg')) image = message.attachments.first();
				else return ':x: File not supported.';
			} else if (message.mentions.users.first()) {
				let aaaa = message.mentions.users.first();
				image = `https://cdn.discordapp.com/avatars/${aaaa.id}/${aaaa.avatar}.png?size=1024`;
			} else return ":x: No image attached!";
			console.log(image)
			Jimp.read(image, async (err, img) => {
				if (err){
					throw err;
				}
				msg.delete();
				message.channel.startTyping();
				await img
						.invert()
						.write('invert.png');
				message.channel.stopTyping(true);
				send({ files: ['invert.png'] }, true);
			});
		});
	}
}


