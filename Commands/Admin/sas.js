const Discord = require('discord.js')
module.exports = {
	name: 'sas',
	async execute({client, message, args, services_stopped}) {
		return "There is no point of this function. J";
		//    message.channel.send(":x: Sas can't be used at this time")
		//    return
		if (message.content.substring(6) === "on") {
			const embed = new Discord.MessageEmbed()
				.setColor('#ff0000')
				.setTitle('SAS Enabled')
				.setDescription('All services has been offline until further notice')
				.setThumbnail('https://cdn.discordapp.com/attachments/676219827282509843/788942412927467580/vglitch.png')
			client.channels.cache.get('617865643307434025').send(":warning: Serversend is down. Check back later")
			client.channels.cache.get('476209927128612864').send(embed)
			message.channel.send(":white_check_mark: :octagonal_sign: Successfully stopped all services");
			services_stopped = true;
		}
		if (message.content.substring(6) === "off") {
			const embed = new Discord.MessageEmbed()
				.setColor('#00ff00')
				.setTitle('SAS Disabled')
				.setDescription('All services is online.')
				.setThumbnail('https://cdn.discordapp.com/attachments/676219827282509843/788945688762646548/vglitch.png')
			client.channels.cache.get('617865643307434025').send(":ballot_box_with_check: Serversend is back online.")
			client.channels.cache.get('476209927128612864').send(embed)
			message.channel.send(":white_check_mark: OK, all service are back online.");
			services_stopped = false;
		}
	}
}