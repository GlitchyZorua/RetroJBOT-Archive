var yahooFinance = require('yahoo-finance');
const Discord = require('discord.js')

module.exports = {
	name: 'stock',
	async execute() {
		return ":x: this command is disabled";
		return
		let args = message.content.slice(8).toUpperCase()
		yahooFinance.quote({
			symbol: 'AAPL',
			modules: ['price', 'summaryDetail', 'earnings']
		}, function (err, quotes) {
			const exampleEmbed = new MessageEmbed()
				.addFields(
					{ name: 'Price', value: price },
					{ name: 'Summary Detail', value: summaryDetail, inline: true },
					{ name: 'Earnings', value: earnings, inline: true },
				)
				.addField('Inline field title', 'Some value here', true)
		});
	}
}