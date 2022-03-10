const Discord = require("discord.js")
module.exports = {
	name: 'steamemote',
	async execute({ input }) {
		if (input === "") return ":octagonal_sign: Specify a name of a steam emote, Please.\nSyntax: j.steamemote <text>";
		if ( /^(porn|penis|ass)/.test(input)) return ":no_entry: bitch no.";
		let emoji = require('https').get('https://steamcommunity-a.akamaihd.net/economy/emoticon/' + encodeURIComponent(input))
		if (!emoji) return ":warning: `Emoji not found`"; //i dont this this works
		return new Discord.MessageEmbed()
			.setImage("https://steamcommunity-a.akamaihd.net/economy/emoticon/" + encodeURIComponent(input));
	}
}