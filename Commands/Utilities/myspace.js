/*/
const superagent = require('superagent');
const Discord = require("discord.js")


module.exports = {
    name: 'myspace',
    async execute(client, message, args) {
		const { body } = await superagent
		.get("https://myspace.windows93.net/api.php?id="+message.content.slice(9));
	
if (message.content.slice(9) == "") {
message.channel.send(":x: Syntax Error! Syntax: j.myspace <id>")
return
}
if (message.content.slice(9) == isNaN) {
    message.channel.send(":x: Numbers only.")
    return
}
 const m = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle(`${body.name}`)
	.setURL('https://myspace.windows93.net/?id='+message.content.slice(9))
	.setDescription('**About Me:**\n'+`${body.about}`+'\n**Who I\'d like to meet:**'+`${body.meet}`+"\n\nSong: https://myspace.windows93.net/u/"+message.content.slice(9)+"/audio.mp3")
	.setThumbnail(`${body.avatar}`)
    .addFields(
		{ name: 'Age', value: `${body.age}` },
		{ name: '\u200B', value: '\u200B' },
		{ name: "Gender", value: `${body.gender}`, inline: true },
		{ name: 'Motto', value: `${body.credo}`, inline: true }
	)
 message.channel.send(m)
 return
    }
}
/*/
