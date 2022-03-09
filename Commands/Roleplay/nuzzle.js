const Discord = require('discord.js')
module.exports = {
	name: 'nuzzle',
	async execute({ input, message }) {
		if (input == "") return ":x: Syntax error! Synax: j.nuzzle <text>";
		return `*${message.author.tag} nuzzles ${input}!*`;
	}
}