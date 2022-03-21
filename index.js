require('dotenv').config();
const fs = require('fs-extra');
var ver = fs.readFileSync('./Bot Files/ver.txt', { "encoding": "utf-8" })
console.log('Hello world!')
console.log(`\
########  ######## ######## ########   #######        ## ########   #######  ########
##     ## ##          ##    ##     ## ##     ##       ## ##     ## ##     ##    ## 
##     ## ##          ##    ##     ## ##     ##       ## ##     ## ##     ##    ## 
########  ######      ##    ########  ##     ##       ## ########  ##     ##    ## 
##   ##   ##          ##    ##   ##   ##     ## ##    ## ##     ## ##     ##    ##  
##     ## ########    ##    ##     ##  #######   ######  ########   #######     ## 
                            ╭─────────────────────────────╮
                            │ Connecting to discord.js... │
                            ╰─────────────────────────────╯
                    v${ver}`);
const Discord = require('discord.js');
console.log("Got discord.js package.")
const path = require('path');
const chalk = require('chalk');
//const animals = require('random-animals-api');
//var ProgressBar = require('progress');
//var bar = new ProgressBar(':bar :current/:total', { total: 103 });
const superagent = require('superagent');
console.log("Getting the stupid intents that discord forces us to use...")
const { Intents } = require('discord.js');
const client = new Discord.Client({ intents: new Intents(13825) });
console.log('Now logging in to client...') 
client.login(process.env.TOKEN); // Your token goes here
client.commands = new Discord.Collection();
let errors = []
console.log("                               ╭───────────────────────────────────╮")
console.log("                               │ Connected to discord. Now finding │")
console.log("                               | javascript files.                 │")
console.log("                               ╰───────────────────────────────────╯")

const modules = fs
	.readdirSync('Commands')
	.filter(file => fs.statSync(path.join('Commands', file)).isDirectory());

modules.forEach(module => {
	console.log(chalk.green(`Loading Module: ${module}`))
	    if (!fs.existsSync("./Commands/")) {
		console.error("The commands are missing")
	    }
		if (!fs.existsSync("./Events/")){
			console.error("Yup... EVENTS ARE GONE TOO!")
		}
		if (!fs.existsSync("./Bot Files/")){
			console.error("BOT FILES ARE GONE!")
		}
		if (!fs.existsSync(".env")){
			console.error("ENV file is gone.")
		    console.log("WHAT HAVE YOU DONE?!")
			console.log("Double Checking...")
				if (!fs.existsSync(".env")){
					console.error("YUP THIS IS >GONE<")
					console.error("Oh no this is bad this is bad this is bad!")
					console.error("Cannot start up retrojbot. enviroment is missing.")
					console.error("EMERGENCY DISCONNECT >> DROPPED.")
					client.destroy()
					return
				}
		 }
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
})

client.on('message', message => {
	function aaaaa() {
		if (message.guild.id === "462290884537352202") {
			message.reply("⛔ Look. I know its fun and all, but this command is disabled to prevent people from grabbing and leaving the server. If you are one of those people who goes around and starts stealing shit and leaving, Fuck off. Don't come back here ever again. Sorry to ruin the fun.")
		}
	}
	if (message.content.startsWith('pls rob')) {
		aaaaa()
	}
	if (message.content.startsWith('pls steal')) {
		aaaaa()
	}
	if (message.content.startsWith('pls bankrob')) {
		aaaaa()
	}
	if (message.content.startsWith('pls ripoff')) {
		aaaaa()
	}
	if (message.content.startsWith('pls heist')) {
		aaaaa()
	}
	if (message.guild.id === "462290884537352202") {
		if (message.content.startsWith('pls buy retrojbot')) {
			message.channel.send('Are you going to adopt me?!')
		}
		if (message.content.startsWith('pls buy ojchan')) {
			message.channel.send('you fucking what')
		}
	}
});
