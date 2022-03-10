const Discord = require('discord.js')
const gif = ["https://media.giphy.com/media/7SF5scGB2AFrgsXP63/giphy.gif", 'https://media.giphy.com/media/BEob5qwFkSJ7G/giphy.gif', 'https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif', 'https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif', 'https://media.giphy.com/media/Ty9Sg8oHghPWg/giphy.gif', 'https://media.giphy.com/media/qQdL532ZANbjy/giphy.gif']

module.exports = {
	name: 'sad',
	async execute({ message }) {
		return new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle(`*${message.author.tag} is sad... cheer up my friend.*`)
			.setImage(gif[Math.floor(Math.random() * gif.length)])
			.setFooter('Want to submit your own gif? Type j.feedback <gif link>. It must be a link, not an attachment -- Thanks!', '');
	}
}