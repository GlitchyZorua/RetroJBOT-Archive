// const WolframAlphaAPI = require('wolfram-alpha-api');
// const waApi = WolframAlphaAPI('G3UG26-V9K9QVY5JA'); // vuln, jacob fix this
const Discord = require('discord.js')
module.exports = {
	name: 'pokemon',
	async execute({ input }) {
		return "Fail command"
		waApi.getFull({
			input: input,
			includepodid: 'Statistics:PokemonData',
			format: 'plaintext',
		}).then(queryresult => {
			return new Discord.MessageEmbed()
				.setColor('#00b7ff')
				.setTitle('Pokémon Info - ' + input)
				.setDescription(queryresult.pods[0].subpods[0].plaintext);
		}).catch(err => {
			console.error(err);
			return ":x: An error occurred. This could happen if the pokemon you put in does not exist or if the wolfram alpha servers are down. If that isn't the case, then please report the bug with j.feedback or just dm my creator.";
		});
	}
}