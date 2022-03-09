const gif = ["https://media.giphy.com/media/3M4NpbLCTxBqU/giphy.gif", "https://media.giphy.com/media/ZBQhoZC0nqknSviPqT/giphy.gif", "https://media.giphy.com/media/3oEdv4hwWTzBhWvaU0/giphy.gif", 'https://media.giphy.com/media/l4FGpP4lxGGgK5CBW/giphy.gif', 'https://media.giphy.com/media/Hld9vKjLk3irC/giphy.gif', 'https://media.giphy.com/media/qLEDGdMoyTT9e/giphy.gif', 'https://media.giphy.com/media/X8WmtjOhnWEommigCy/giphy.gif']
const Discord = require('discord.js')
module.exports = {
	name: 'hug',
	async execute({ message, input, send }) {
		if (input === "") return ":x: Syntax error! Synax: j.hug <text>";
		send(`*${message.author.tag} is hugging ${input}!*`)
		return new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setImage(gif[Math.floor(Math.random() * gif.length)])
			.setFooter('Want to submit your own gif? Type j.feedback <gif link>. It must be a link, not an attachment -- Thanks!', '');
	}
}