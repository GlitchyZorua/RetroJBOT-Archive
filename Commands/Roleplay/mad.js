const Discord = require('discord.js')
var gif = ["https://media.giphy.com/media/11tTNkNy1SdXGg/giphy.gif", 'https://media.giphy.com/media/aNFT7eG2rIKK715uLk/giphy.gif', 'https://media.giphy.com/media/3o9bJX4O9ShW1L32eY/giphy.gif', 'https://media.giphy.com/media/3o7bu8mwh3U6SXtLjy/giphy.gif', 'https://media.giphy.com/media/ZebTmyvw85gnm/giphy.gif', 'https://media.giphy.com/media/u0kxUtHbdCKs0/giphy.gif', 'https://media.giphy.com/media/XEVHFzjPzjQy1uCulo/giphy.gif', 'https://media.giphy.com/media/8hFJfKMGbbwCQ/giphy.gif', 'https://media.giphy.com/media/WH85q8e201wlO/giphy.gif', 'https://media.giphy.com/media/XEVHFzjPzjQy1uCulo/giphy.gif', 'https://media.giphy.com/media/8hFJfKMGbbwCQ/giphy.gif', 'https://media.giphy.com/media/URcmhQ5PpztC0/giphy.gif', 'https://media.giphy.com/media/ik10lqhr0HTUc/giphy.gif', 'https://media.giphy.com/media/ik10lqhr0HTUc/giphy.gif']


module.exports = {
	name: 'angry',
	async execute({ message }) {
		return new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle("*" + message.author.tag + " is so angry, that he smashed there keyboard and throwed it out of the window!*")
			.setImage(gif[Math.floor(Math.random() * gif.length)])
			.setFooter('Want to submit your own gif? Type j.feedback <gif link>. It must be a link, not an attachment -- Thanks!');
	}
}