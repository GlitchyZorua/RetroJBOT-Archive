module.exports = {
	name: '95error',
	async execute({ input, message }) {
		message.channel.send('<a:Loading_Color:759914061696860202> *Loading...*').then(msg => {
			msg.delete();
			return new Discord.MessageEmbed().setImage(`http://atom.smasher.org/error/98.png.php?icon=Error3&title=Error&url=&text=${encodeURIComponent(input)}&b1=&b2=OK`);
		});
	}
}