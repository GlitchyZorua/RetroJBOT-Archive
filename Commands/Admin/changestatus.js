const fs = require('fs-extra')
var adminlist = fs.readJSONSync('./admins.txt')
module.exports = {
    name: 'changestatus',
    async execute(client, message, args) {
        if (!adminlist.admins.includes(message.author.id)) {
            message.channel.send(':no_entry: Bot Admin Only. (`BOT_ADMIN`)')
            return
            }
            let text = message.content.slice(15)
            if (text == "online"){
              client.user.setStatus('online')
              message.channel.send(':white_check_mark: The bot status has been set to online')
            return
            }
            if (text == "invisible"){
                client.user.setStatus('invisible')
                message.channel.send(':white_check_mark: The bot status has been set to offline\n:warning: Please note that even if the status is set to offline, it doesnt mean that the bot is dead. If you want to kill the bot, please use `j.die` instead')
            return
              }
            if (text == "idle"){
                  client.user.setStatus('idle')
                  message.channel.send(':white_check_mark: The bot status has been set to idle')
                  return
              }
              if (text == "dnd"){
                client.user.setStatus('dnd')
                message.channel.send(':white_check_mark: The bot status has been set to dnd. (aka do not disturb)')
            return
              }
              message.channel.send(':x: **Syntax Error** That status doesn\'t exist. Syntax: `j.changestatus (<online|invisible|idle|dnd>)`')
              }
    }