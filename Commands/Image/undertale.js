const Discord = require('discord.js');
module.exports = {
	name: 'undertale',
	async execute({ input }) {
		if (input === "") return ":x: Syntax Error! j.undertale <text>\nFor advanced people: j.undertale <text> <[<text>=<text>]>\nConfused? Visit https://www.demirramon.com/help/undertale_text_box_generator and/or look at https://www.demirramon.com/help/undertale_text_box_generator_dev";
		return new Discord.MessageEmbed()
			.setTitle("Undertale Text box. (click here to download if it doesn't show)")
			.setURL("https://www.demirramon.com/utgen.png?message=" + encodeURIComponent(input))
			.setImage("https://www.demirramon.com/utgen.png?message=" + encodeURIComponent(input));
	}
}