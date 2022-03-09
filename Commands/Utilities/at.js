var thisDate;
thisDate = new Date();
const Discord = require('discord.js')
module.exports = {
	name: 'at',
	async execute(client, message) {
		let currentTime = new Date(),
			hours = currentTime.getHours(),
			minutes = currentTime.getMinutes(),
			year = thisDate.getFullYear(),
			date = thisDate.getDate(),
			month = thisDate.getMonth() + 1

		const suffix = hours >= 12 ? "PM" : "AM";
		hours = hours % 13;
		let seconds = thisDate.getSeconds()
		const unixTime = Math.floor(Date.now() / 1000);
		return new Discord.MessageEmbed()
			.setColor('#00b7ff')
			.setTitle(`Advanced Time - <t:${unixTime}:T>`)
			.setDescription(`Full Time: ${hours}:${minutes}:${seconds} ${suffix}\nSecond: ${seconds}\nMinute: ${minutes}\nHour: ${hours}\nSuffix:${suffix}\nUnixTime:${unixTime}\nTime Zone: ${currentTime.getTimezoneOffset()}\nFull date: ${month}/${date}/${year}\nMonth: ${month}\nDay: ${date}\nYear: ${year}\n\n RetroJBOT Clock/Calendar`)
	}
}