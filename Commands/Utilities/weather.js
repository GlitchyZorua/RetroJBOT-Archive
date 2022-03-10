const weather = require('weather-js');
const Discord = require('discord.js');
const loading = ["Alright hold on, I need to go outside", "Loading...", 'Please wait...', "Ok, hold on.", "jacob was here...", "Alright, I hope i don't die from natural disaster."]
module.exports = {
	name: 'weather',
	async execute({ input, message, send }) {
		message.channel.send('<a:Loading_Color:759914061696860202> ' + loading[Math.floor(Math.random() * loading.length)]).then(msg => {
			weather.find({ search: input, degreeType: 'F' }, function (error, result) {
				// 'C' can be changed to 'F' for fahrenheit results
				if (Math.floor(Math.random() * 100) === 4) {
					return send("This message is suppose to be an easter egg, if this is your first time of seeing this message, then congrats. Take a screen shot of it, and send it to me. (j.invite). You can stop spamming (if you haven't already) this command");
				}
				if (error) return send(`:x: An error occurred: ${error}`);
				if (!input[0]) return send(':x: Please specify a location. Syntax: j.weather <location>');
				if (result === undefined || result.length === 0) return send(':question: That location doesn\'t exist.');
				/*/
				if (current.skytext == "Sunny") {
				image = "https://i.imgur.com/PB1DFIa.png"
				}
				if (current.skytext == ""){
				image = "https://i.imgur.com/HsJJFEG.png"
				}//https://cdn.discordapp.com/attachments/676219827282509843/862500228820500500/vglitch.png
				/*/
				//.addField(':test_tube: Degree Type', '°F and °C (using j.ftc, might not be accurate)', true)
				/// not fixed...s
				const current = result[0].current;
				const location = result[0].location;
				const fah = Number(current.temperature);
				const fahfinal = Math.round((fah - 32) / 1.8);
				const faha = Number(current.feelslike);
				const fahfinala = Math.round((faha - 32) / 1.8);
				const kelvin = Math.round((faha - 32) / 1.8) + 273.15;
				const weatherinfo = new Discord.MessageEmbed()
					.setDescription(` **${current.skytext}**`)
					.setAuthor(`⚠ Be careful! Do not choose where you live if you are issuing the command from a public server. To Respect your privacy, it is highly recommended that you run this command in dms\n\n\nWeather forecast for ${current.observationpoint}`)
					//.setThumbnail(current.imageUrl)
					.setColor(0x111111)
					.addField(':clock3: Timezone', `UTC${location.timezone}`, true)
					//.addField(':test_tube: Degree Type', '°F and °C (using j.ftc, might not be accurate)', true)
					.addField(':thermometer: Temperature', `Fahrenheit: ${current.temperature}°F \nCelsius: ` + fahfinal + '°C ' + '\nKelvin: ' + kelvin + ' K', true)
					.addField(':wind_blowing_face: Wind', current.winddisplay, true)
					.addField('Feels like', `Fahrenheit: ${current.feelslike}°F\nCelsius: ` + fahfinala + '°C' + '\nKelvin: ' + kelvin + ' K', true)
					.addField('Humidity', `${current.humidity}%`, true);
				send(weatherinfo);
				msg.delete();
			});
		});
	}
}