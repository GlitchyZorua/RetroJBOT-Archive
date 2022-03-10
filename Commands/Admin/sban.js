const fs = require('fs-extra');
const ssbans = fs.readJSONSync('ssbans.txt');
const Discord = require('discord.js');
const adminlist = fs.readJSONSync('./admins.txt');
module.exports = {
	name: 'sban',
	async execute({ message, send, input }) {
		if (!adminlist.admins.includes(message.author.id)) {
			return ':x: Access Denied. You must have `BOT_ADMIN`';
		}
		ssbans.bans.push(input);
		const embed = new Discord.MessageEmbed()
			.setColor('#ff0000')
			.setTitle('User Banned From Serversend!')
			.setDescription(`User Banned: ${input}`)
			.setThumbnail('https://cdn.discordapp.com/attachments/676219827282509843/788948802773319720/vglitch.png');
		fs.writeFileSync('ssbans.txt', JSON.stringify(ssbans));
		send(`Success! Swinged the banned hammer on ${input} from using Serversend https://media1.tenor.com/images/ae83976e867ebc2722054a632ff045ad/tenor.gif?itemid=11035060\n:warning: You can sban people, but most of the RetroJBOT services aren't available.`);
		client.channels.cache.get('476209927128612864').send(embed);
		return;
	}
}