const Discord = require('discord.js');
const xkcd = require('xkcd-api');

module.exports = {
	name: 'xkcd',
	async execute({ input, send }) {
		// Random comic
		if (input === "random") {
			xkcd.random(function (error, response) {
				if (error) {
					console.error(error);
					send(":x: Oops. an error occurred!");w
					return
				} else {
					console.log(response);
					send("https://xkcd.com/" + response.num);
					return
				}
			});
		}
		/* Latest comic
		if (thingtosend == "latest") {
		  xkcd.random(function (error, response) {
			if (error) {
			  console.error(error);
			  message.channel.send(":x: Oops. an error occurred!")
			  return
			} else {
			  console.log(response);
			  message.channel.send(response)
			  return
			}
		  });
		}*/
		// Get particular comic
		xkcd.get(input, function (error, response) {
			if (error) {
				console.error(error);
				return ":x: funny error"
			} else {
				return `https://xkcd.com/${response.num}`;
			}
		});
	}
}