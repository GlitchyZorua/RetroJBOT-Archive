const { MessageEmbed } = require("discord.js");

// Pretty simple, yet amazing 8ball. 
const ball = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful", "No"];
module.exports = {
	name: '8ball',
	help: "Asks the magic 8ball a question.",
	async execute({ slash, input }) {
		if (slash) {
			return new MessageEmbed()
				.setTitle(input ?? "")
				.setDescription(`:8ball: *${ball[Math.floor(Math.random() * ball.length)]}*`)
				.setColor("#222222");
		}
		return `:8ball: ${ball[Math.floor(Math.random() * ball.length)]}`;
	},
	slash({ options, callCommand }) {
		callCommand(options.getString("question"))
	},
	options: [{
		type: "STRING",
		name: "question",
		description: "The question to ask the magic 8ball.",
	}]
}