const fs = require('fs-extra')
var ver = fs.readFileSync('./Bot Files/ver.txt', {"encoding": "utf-8"})
require('dotenv').config()
console.log("########  ######## ######## ########   #######        ## ########   #######  ########")
console.log("##     ## ##          ##    ##     ## ##     ##       ## ##     ## ##     ##    ## ")
console.log("##     ## ##          ##    ##     ## ##     ##       ## ##     ## ##     ##    ## ")
console.log("########  ######      ##    ########  ##     ##       ## ########  ##     ##    ## ")
console.log("##   ##   ##          ##    ##   ##   ##     ## ##    ## ##     ## ##     ##    ##  ")
console.log('##     ## ########    ##    ##     ##  #######   ######  ########   #######     ##    ')
console.log('                            ╭─────────────────────────────╮')
console.log('                            │ Connecting to discord.js... │')
console.log('                            ╰─────────────────────────────╯')
console.log('                    v'+ver) // Input a version number or something.
const Discord = require('discord.js')
const path = require('path')
const chalk = require('chalk')
let services_stopped = 0;
var counter = 0;
var adminlist = fs.readJSONSync('./admins.txt')
var ssbans = fs.readJSONSync('./ssbans.txt')
//const animals = require('random-animals-api');
//var ProgressBar = require('progress');
//var bar = new ProgressBar(':bar :current/:total', { total: 103 });
const waves = 0
const superagent = require('superagent');
String.prototype.removepings = function() {
    return this
        .replace(/(@(?:everyone|here))/gi, 'no') //@everyone/here ping
        .replace(/<@&(\d+)>/gi, "no") //role ping
        .replace(/<@!?(\d+)>/gi, "no") //user ping

};
String.prototype.rpremovepings = function() {
    return this
        .replace(/(@(?:everyone|here))/gi, 'no')
        .replace(/<@&(\d+)>/gi, "no")

};
String.prototype.aremovepings = function() {
  return this
      .replace('`', '\'')
      .replace(/<@&(\d+)>/gi, "no")
      .replace(/(@(?:everyone|here))/gi, 'no')
      .replace(/<@&(\d+)>/gi, "no")
};
String.prototype.aremovepingsh = function() {
  return this
      .replace('`', '\'')
      .replace(/<@&(\d+)>/gi, "(a)")
      .replace(/(@(?:everyone|here))/gi, '(a)')
      .replace(/<@&(\d+)>/gi, "no")
};



const client = new Discord.Client()
client.login(process.env.TOKEN) // Your token goes here
client.commands = new Discord.Collection() 
let errors = []

console.log("                               ╭───────────────────────────────────╮")
console.log("                               │ Connected to discord. Now finding │")
console.log("                               | javascript files.                 │")
console.log("                               ╰───────────────────────────────────╯")

const modules = fs
    .readdirSync('Commands')
    .filter(file => fs.statSync(path.join('Commands', file)).isDirectory())

modules.forEach(module => {
    console.log(chalk.green(`Loading Module: ${module}`))

    const CMDFiles = fs
        .readdirSync(path.resolve(`Commands/${module}`))
        .filter(file => !fs.statSync(path.resolve('Commands', module, file)).isDirectory())
        .filter(file => { return file.endsWith('.js')})
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
/*/
client.on('message', message => {
    function aaaaa(){
        if (message.guild.id === "462290884537352202"){
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
      if (message.guild.id === "462290884537352202"){
      if (message.content.startsWith('pls buy retrojbot')) {
        message.channel.send('Are you going to adopt me?!')
      }
      if (message.content.startsWith('pls buy ojchan')){
        message.channel.send('you fucking what')
      }
    }
    });
    /*/

     //fuck you slash commands