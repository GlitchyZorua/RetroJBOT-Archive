const chalk = require('chalk')
const Discord = require('discord.js')
const fs = require('fs-extra')
const { isAnyArrayBuffer } = require('util/types')
var botbans = fs.readJSONSync('./botbans.txt')
var eee = fs.readJSONSync('./excludedservers.txt')
var disableddms = 0
var disableinteractions = 0
var logmode = 0
module.exports = (client, message) => {
    if (logmode == 1){
        //For testing purposes only. doesn't save messages.
        console.log(`(${message.author.id}) ${message.author.tag}: ${message.content}`)
        return
    }
    if (message.author.bot) return
    if (message.channel.type === 'dm') {
    if (disableddms === 1){
        message.channel.send(":no_entry: DMS are disabled by the bot creator.");
        return
        }
    }
        var prefix = process.env.Prefix
        var escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        var prefixRegex = new RegExp(`^(<@!?${client.user.id}> |<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`)
        if (!prefixRegex.test(message.content)) return
        var [, matchedPrefix] = message.content.match(prefixRegex)
                //console.log(matchedPrefix.length)
    
        console.log(chalk.yellow(`(${message.author.id} || ${message.author.tag}) Checking client to see if command`))
        if (eee.es.includes(message.guild.id)){
        console.log(chalk.red(`(${message.author.id} || ${message.author.tag}) An error occurred: Server Excluded.`))
         message.channel.send('⛔ **Oops. This server is excluded from RetroJBOT, Sorry!**')
         return
        }
        if (botbans.bans.includes(message.author.id)) {
            console.log(chalk.red(`(${message.author.id} || ${message.author.tag}) An error occurred: User account id banned`))
            message.channel.send(":no_entry: This account has been blocked from RetroJBOT.\n\nTo appeal, please visit https://forms.gle/njmHVkYrFgCUckWbA. Any ALT accounts will be punished.")
            return;
        }
        if (disableinteractions == 1){
            message.channel.send(":x: RetroJBOT commands are disabled by the bot owner. Sorry!")
            return
        }
        var cmdCall = message.content.slice(matchedPrefix.length).split(' ').shift().toLowerCase()
        var command = client.commands.get(cmdCall) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdCall))
        var args = message.content.split(' ')
        if (RegExp(`^(<@!?${client.user.id}>)\\s*`).test(message.content)) {
            args = args.slice(1)
        }
        if (command) {
            console.log(chalk.greenBright(`(${message.author.id} || ${message.author.tag}) Has used command: ${command.name}`))
            args = args.slice(1)
            //if (command.owner === true && message.author.id !== "376901199225552898") return message.reply("no")
            //if (command.permission && !message.member.hasPermission(command.permission)) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(`You need the **${command.permission}** permission to use this command`))
            try {
                command.execute(client, message, args)
            } catch (e) {
                console.error(e)
                message.channel.send(new Discord.MessageEmbed()
                    .setColor('RED')
                    .setDescription('The bot has detected something REALLY wrong with the bots files. You really shouldnt see this message, Please contact my creator: Jacobw#8117. Software Halted. I have printed out an emergency error message below. \N\n\n```js\n'+e+'```')
                    .setTitle('Critical Error')
                    .setImage('https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061132_960_720.png')
                )
        
            }
        } else {
        console.log(chalk.red(`(${message.author.id} || ${message.author.tag}) An error occurred: Command not found.`))
        message.channel.send(new Discord.MessageEmbed()
        .setColor('RED')
        .setDescription('Invalid Command. If in doubt, check if: \n- You spelled the command incorrectly\n- Check that its a valid command (j.help)\n - If you want, you can suggest this command with `j.feedback <text>`')
        .setTitle(':no_entry: Oops.')
        )
        }
    }