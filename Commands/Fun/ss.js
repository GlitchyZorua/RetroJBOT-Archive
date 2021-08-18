const Discord = require("discord.js");
const fs = require("fs-extra");
var adminlist = fs.readJSONSync('./admins.txt')
var ssbans = fs.readJSONSync('C:\\Users\\Jacob Workman\\Desktop\\RetroJBOT-main\\ssbans.txt')
const ok = new Set();
module.exports = {
    name: 'ss',
    async execute(client, message, args, services_stopped) {
    if (ok.has(message.author.id)) {
     message.channel.send(":alarm_clock: **Cooldown** You can only send one message per minute, Please slowdown. *tick tock* ");
     return
     }
      let thingtosend = message.content.slice(5).removepings()
      if (services_stopped === 1) {
        message.channel.send(":x: Server Send has shutdown for now... Please come again.")
        return;
      }
      if (message.channel.nsfw) {//message.channel.send(":x: Server Send has shutdown for 5 days. Please come again. `Reason: Example`")
        message.channel.send("🔞 Sorry, this command is not allowed in NSFW channels. **Bypassing this restrictions will be a ban without any warning.**")
          return;
      }
      if (thingtosend === "") {//message.channel.send(":x: Server Send has shutdown for 5 days. Please come again. `Reason: Example`")
        message.channel.send(":warning: Syntax Error! Syntax: j.ss <text>")
          return;
      }
      ok.add(message.author.id);
      setTimeout(() => {
        // Removes the user from the set after a minute
        ok.delete(message.author.id);
      }, 60000);
          if (ssbans.bans.includes(message.author.id)) {
            const yes = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle(':no_entry: You have been banned from using serversend.')
            .setDescription("You have been banned from using serversend. To appeal, please visit https://forms.gle/njmHVkYrFgCUckWbA.")
            .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Stop_x_nuvola.svg/240px-Stop_x_nuvola.svg.png')
            message.channel.send(yes)
            return;
          }
          const no = new Discord.MessageEmbed()
          .setColor('RANDOM')
          .setTitle(message.author.tag + " (id: " + message.author.id+")")
          .setDescription(thingtosend)
          .setThumbnail(message.author.avatarURL())
          //let len = message.content.split(' ')[0].length ==  12 ? 12 : 5 //jacob u suck
          client.channels.cache.get('617865643307434025').send(no)
          var tipzero = [""," You can join my server with j.invite"]
          message.channel.send(':white_check_mark: Sent to my server!'+tipzero[Math.floor(Math.random() * tipzero.length)])
          console.log(message.author.tag + ": " + message.content.slice(5));
        //  ssnum++;
        }
        }