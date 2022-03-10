module.exports = {
	name: 'revive',
	async execute({ input, message }) {
		if (input === "") return ":x: Syntax error! Synax: j.revive <text>";
		message.channel.send(`*${message.author.tag} revives ${input}!*`);
	}
}