const fs = require('fs-extra');
var ssbans = fs.readJSONSync('ssbans.txt')
const Discord = require('discord.js')
var adminlist = fs.readJSONSync('./admins.txt')
module.exports = {
	name: 'sunban',
	async execute({ message, client, input }) {
		if (!adminlist.admins.includes(message.author.id)) {
			message.channel.send(':x: Access Denied. You must have `BOT_ADMIN`');
			return
		}
		const person = ssbans.bans.indexOf(input)
		ssbans > -1 ? ssbans.splice(ssbans, 1) : false
		const embed = new Discord.MessageEmbed()
			.setColor('#ff0000')
			.setTitle('User unbanned From Serversend!')
			.setDescription(`User unbanned: ${person}`)
			.setThumbnail('https://cdn.discordapp.com/attachments/676219827282509843/788948802773319720/vglitch.png');
		fs.writeFileSync('ssbans.txt', JSON.stringify(ssbans));
		client.channels.cache.get('476209927128612864').send(embed);
		return `Succesfully unbanned user: ${message.content.slice(9)}`;
	}
}

