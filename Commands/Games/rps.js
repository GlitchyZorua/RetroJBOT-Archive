const Discord = require("discord.js");
const a = (r) => { return Math.floor(Math.random() * r.length) };
const b = (r) => { return r.replace('rock', ':rock:').replace('paper', ':pencil:').replace('scissors', ':scissors:'); };
const c = (r, h) => { if (r == 'rock' && h == 'scissors' || r == 'paper' && h == 'rock' || r == 'scissors' && h == 'paper') { return 'You lost!'; } else if (h == 'rock' && r == 'scissors' || h == 'paper' && r == 'rock' || h == 'scissors' && r == 'paper') { return 'You won!'; } else if (h == 'rock' && r == 'rock' || h == 'paper' && r == 'paper' || h == 'scissors' && r == 'scissors') { return 'Tie!'; } else { return 'Unknown choice' }; };
const choice = ['rock', 'paper', 'scissors'][a(['rock', 'paper', 'scissors'])];
module.exports = {
	name: 'rps',
	async execute({ args }) {
		//this one is so bad ill bsother later sorry haryie 
		const userchoice = args[1];
		const embed = new Discord.MessageEmbed()
			.setColor(65280)
			.addField('You chose', b(userchoice))
			.addField('I chose', b(choice))
			.setFooter(c(choice, userchoice));
		return { embed: embed }
	}
}

// Code created by haryie.
// Rest in peace haryie, you will be missed.
//             2005 - 2021🌹