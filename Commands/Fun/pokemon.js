const WolframAlphaAPI = require('wolfram-alpha-api');
const waApi = WolframAlphaAPI('G3UG26-V9K9QVY5JA');
const Discord = require('discord.js')
module.exports = {
    name: 'pokemon',
    async execute(client, message, args) {
      let thingtosend = message.content.slice(10).removepings()
      waApi.getFull({
        input: thingtosend,
        includepodid: 'Statistics:PokemonData',
        format: 'plaintext',
      }).then((queryresult) => {
        console.log(queryresult.pods[0].subpods[0].plaintext)
    
      var embed = new Discord.MessageEmbed()
      .setColor('#00b7ff')
      .setTitle('Pokémon Info - '+thingtosend)
      .setDescription(queryresult.pods[0].subpods[0].plaintext)
      
      message.channel.send(embed);
      return
    }).catch(err => {
      message.reply(":x: An error occurred. This could happen if the pokemon you put in does not exist or if the wolfram alpha servers are down. If that isn't the case, then please report the bug with j.feedback or just dm my creator.");
      console.error(err);
    });
    }
}