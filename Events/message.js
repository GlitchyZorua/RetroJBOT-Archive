const chalk = require('chalk');
const Discord = require('discord.js');
const fs = require('fs-extra');
const prefix = process.env.Prefix;
const botbans = fs.readJSONSync('./botbans.txt');
const serverbans = fs.readJSONSync('./excludedservers.txt');
const defaultMessageOptions = { allowedMentions: { parse: [] } };
const methods = {
	removePings(content) {
		return { content: content, ...defaultMessageOptions } // implemented badly, will redo later
	}
}
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
let disableddms = false;
let disableinteractions = false;

module.exports = (client, message) => {
	if (message.author.bot) return;

	const prefixRegex = new RegExp(`^(<@!?${client.user.id}> |<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
	if (!prefixRegex.test(message.content)) return;
	var [, matchedPrefix] = message.content.match(prefixRegex);

	
	if (message.channel.type === 'dm' && disableddms) return message.channel.send(":no_entry: DMS are disabled by the bot creator.");
	if (disableinteractions) return message.channel.send(":x: RetroJBOT commands are disabled by the bot owner. Sorry!");
	console.log(chalk.yellow(`(${message.author.id} || ${message.author.tag}) Checking client to see if command`))

	if (!message.channel.type === 'dm') {
		if (serverbans.es.includes(message.guild.id)) {
			console.log(chalk.red(`(${message.author.id} || ${message.author.tag}) An error occurred: Server Excluded.`));
			message.channel.send('⛔ **Oops. This server is excluded from RetroJBOT, Sorry!**');
			return;
		}
	}
	if (botbans.bans.includes(message.author.id)) {
		console.log(chalk.red(`(${message.author.id} || ${message.author.tag}) An error occurred: User account id banned`))
		message.channel.send(":no_entry: This account has been blocked from RetroJBOT.\n\nTo appeal, please visit https://forms.gle/njmHVkYrFgCUckWbA. Any ALT accounts will be punished.")
		return;
	}

	const cmdCall = message.content.slice(matchedPrefix.length).split(' ').shift().toLowerCase();
	const command = client.commands.get(cmdCall) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdCall));
	let args = message.content.split(' ');
	if (RegExp(`^(<@!?${client.user.id}>)\\s*`).test(message.content)) {
		args = args.slice(1)
	}
	if (command) {
		console.log(chalk.greenBright(`(${message.author.id} || ${message.author.tag}) Has used command: ${command.name}`))
		args = args.slice(1);
		try {
			//hack... so lame. bad code on my part
			const sendOutput = (n) => {
				if (!n) return;
				if (typeof n === "string") n = { content: n };
				if (n instanceof Discord.MessageEmbed) n = { embeds: [n] } 
				n = { ...defaultMessageOptions, ...n };
				return message.channel.send(n);
			};
			const output = command.execute({
				client: client,
				message: message,
				caller: message.author,
				authorId: message.author.id, //dont use this
				args: args,
				methods: methods, //dont use this
				input: args.join(" "),
				slash: false,
				send: sendOutput,
			});
			//send the output, wait if the output is a promise
			if (output instanceof Promise) output.then(n => sendOutput(n)); else sendOutput(output);
		} catch (e) {
			console.error(e);
			message.channel.send(new Discord.MessageEmbed()
				.setColor('RED')
				.setDescription('The bot has detected something REALLY wrong with the bots files. You really shouldnt see this message, Please contact my creator: Jacobw#8117. Software Halted. I have printed out an emergency error message below. \n\n\n```js\n' + e + '```')
				.setTitle('Critical Error')
				.setImage('https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061132_960_720.png')
			)
		}
	} else {
		console.log(chalk.red(`(${message.author.id} || ${message.author.tag}) An error occurred: Command not found.`))
		const a = new Discord.MessageEmbed()
			.setColor('RED')
			.setDescription('Invalid Command. If in doubt, check if: \n- You spelled the command incorrectly\n- Check that its a valid command (j.help)\n - If you want, you can suggest this command with `j.feedback <text>`')
			.setTitle(':no_entry: Oops.')
        message.channel.send({ embeds: [a] })
	}
}