const Discord = require("discord.js");
module.exports = {
	name: 'binarytotext',
	async execute({ input }) {
		if (input === "") return ":x: Syntax error! Syntax: j.binarytotext <text>";
		let text = input.split(" ").map(a => String.fromCharCode(parseInt(a, 2))).join("");
		return new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setDescription(text);
		//https://artii.herokuapp.com/make?text=ASCII+art&font=graffiti
	}
}