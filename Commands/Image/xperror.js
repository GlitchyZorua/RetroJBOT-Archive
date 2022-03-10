module.exports = {
    name: 'xperror',
    async execute({ input }) {
            return new Discord.MessageEmbed()
				.setImage("http://atom.smasher.org/error/xp.png.php?icon=Error3&title=Error&url=&text=" + encodeURIComponent(input) + "&b1=&b2=OK");
    }
}