const Discord = require('discord.js')


module.exports = {
	name: 'suicide',
	async execute() {
		return new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle('National Suicide Prevention Hotline')
			.setDescription('You are not alone. \nTo call National Suicide Prevent hotline, call  1-800-273-8255.\n\n\nWebsite: https://suicidepreventionlifeline.org/\nDiscord Trust and safety: https://discord.com/safety/360044103771\n\n\nWe are here for you.❤')
	}
}