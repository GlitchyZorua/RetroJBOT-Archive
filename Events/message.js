const chalk = require('chalk')
const Discord = require('discord.js')
let userSchema = require('../Models/User')
module.exports = (client, message) => {
    if (message.author.bot) return
    if (message.channel.type === 'dm') {
        
    } else {
        var prefix = process.env.Prefix
        var escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        var prefixRegex = new RegExp(`^(<@!?${client.user.id}> |<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`)
        if (!prefixRegex.test(message.content)) return
        var [, matchedPrefix] = message.content.match(prefixRegex)
    
                //console.log(matchedPrefix.length)
    
        console.log(chalk.yellow(`(${message.author.id} || ${message.author.tag}) Checking client to see if command`))
            
        var cmdCall = message.content.slice(matchedPrefix.length).split(' ').shift().toLowerCase()
        var command = client.commands.get(cmdCall) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdCall))
        var args = message.content.split(' ')
        if (RegExp(`^(<@!?${client.user.id}>)\\s*`).test(message.content)) {
            args = args.slice(1)
        }
        if (command) {
            console.log(chalk.greenBright(`(${message.author.id} || ${message.author.tag}) Has used command: ${command.name}`))
            args = args.slice(1)
            if (command.owner === true && message.author.id !== "376901199225552898") return message.reply("no")
            if (command.permission && !message.member.hasPermission(command.permission)) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(`You need the **${command.permission}** permission to use this command`))
            try {
                command.execute(client, message, args)
            } catch (e) {
                console.log(e)
                message.channel.send(new Discord.MessageEmbed()
                    .setColor('RED')
                    .setDescription('I am broken, My Dev Team has been notified of this issue')
                    .setTitle('Error')
                )
            }
        }
    }
}