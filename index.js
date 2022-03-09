require('dotenv').config();
const fs = require('fs-extra');
var ver = fs.readFileSync('./Bot Files/ver.txt', { "encoding": "utf-8" })
console.log(`\
########  ######## ######## ########   #######        ## ########   #######  ########
##     ## ##          ##    ##     ## ##     ##       ## ##     ## ##     ##    ## 
##     ## ##          ##    ##     ## ##     ##       ## ##     ## ##     ##    ## 
########  ######      ##    ########  ##     ##       ## ########  ##     ##    ## 
##   ##   ##          ##    ##   ##   ##     ## ##    ## ##     ## ##     ##    ##  
##     ## ########    ##    ##     ##  #######   ######  ########   #######     ## 
                            ╭─────────────────────────────╮')
                            │ Connecting to discord.js... │')
                            ╰─────────────────────────────╯')
                    v${ver}`);
const Discord = require('discord.js');
const path = require('path');
const chalk = require('chalk');
//const animals = require('random-animals-api');
//var ProgressBar = require('progress');
//var bar = new ProgressBar(':bar :current/:total', { total: 103 });
const superagent = require('superagent');
const { Intents } = require('discord.js');
const client = new Discord.Client({ intents: new Intents(13825) });
client.login(process.env.TOKEN); // Your token goes here
client.commands = new Discord.Collection();
let errors = [];

console.log("                               ╭───────────────────────────────────╮")
console.log("                               │ Connected to discord. Now finding │")
console.log("                               | javascript files.                 │")
console.log("                               ╰───────────────────────────────────╯")

const modules = fs
	.readdirSync('Commands')
	.filter(file => fs.statSync(path.join('Commands', file)).isDirectory());

modules.forEach(module => {
	console.log(chalk.green(`Loading Module: ${module}`))

	const CMDFiles = fs
		.readdirSync(path.resolve(`Commands/${module}`))
		.filter(file => !fs.statSync(path.resolve('Commands', module, file)).isDirectory())
		.filter(file => { return file.endsWith('.js') })
	// console.log(chalk.blueBright(`╭────────────────────┬──╮`))
	CMDFiles.forEach(CMD => {
		try {
			const command = require(`./Commands/${module}/${CMD}`)
			const FittedCMDName = `${command.name}`.padEnd(20)
			//console.log(chalk.blueBright(`│${FittedCMDName}│✅│\n├────────────────────┼──┤`))
			command.module = module
			client.commands.set(command.name, command)
			// bar.tick()
		} catch (error) {
			const FittedCMDName = `${CMD}`.padEnd(20)
			//console.log(chalk.blueBright(`│${FittedCMDName}│❌│\n├────────────────────┼──┤`))
			errors.push(error)
		}
	})
	// console.log(chalk.blueBright(`╰────────────────────┴──╯`))
})
if (errors.length > 0) {
	console.log(errors)
	errors.forEach(err => {
		console.log(chalk.red(err))
	})
}

fs.readdir('./Events', (err, files) => {
	if (err) return console.log(chalk.red(err))
	console.log(chalk.green("Events Handler"))
	//   console.log(chalk.blueBright(`╭────────────────────┬──╮`))
	files.forEach(file => {
		if (!file.endsWith('.js')) return
		const evt = require(`./Events/${file}`)
		let evtName = file.split('.')[0]
		const FittedEVTName = `${evtName}`.padEnd(20)
		//  console.log(chalk.blueBright(`│${FittedEVTName}│✅│`))
		client.on(evtName, evt.bind(null, client))
	})
	// console.log(chalk.blueBright(`╰────────────────────┴──╯`))
});