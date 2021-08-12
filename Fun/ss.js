const talkedRecently = new Set();
const Discord = require("discord.js");
const fs = require("fs-extra");
var adminlist = fs.readJSONSync('./admins.txt')
var ssbans = fs.readJSONSync('C:\\Users\\Jacob Workman\\Desktop\\RetroJBOT-main\\ssbans.txt')
module.exports = {
    name: 'ss',
    async execute(client, message, args, services_stopped) {
//message.channel.send(":x: You cannot use Serversend because this version of RetroJBOT doesn't support sas yet. SAS needs to be rewritten due to the whole retrojbot code being rewritten. We aplogize for any inconvenience.")
//return
      if (talkedRecently.has(message.author.id)) {
            message.channel.send(":alarm_clock: **Cooldown** You can only send one message per minute, Please slowdown. *tick tock* ");
      } else {
    
      
      if (services_stopped === 1) {
        message.channel.send(":x: Server Send has shutdown for now.. Please come again.")
        return;
      }
          if (message.channel.nsfw) {//message.channel.send(":x: Server Send has shutdown for 5 days. Please come again. `Reason: Example`")
          
          message.channel.send(":x: Sorry, this command is not allowed in NSFW channels. **Bypassing this resriction will be a ban without any warning.** See `j.srules` for more info.")
            console.log('[MSG] :x: Sorry, this command is not allowed in NSFW channels. **Bypassing this resriction will be a ban without any warning.** See `j.srules` for more info.');
            return;
          }
          if (ssbans.bans.includes(message.author.id)) {
            const yes = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle(':no_entry: You have been banned from using serversend.')
            .setDescription("You have been banned from using serversend. To appeal, please visit https://forms.gle/njmHVkYrFgCUckWbA.")
            .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Stop_x_nuvola.svg/240px-Stop_x_nuvola.svg.png')
            message.channel.send(yes)
            return;
          }
          let thingtosend = message.content.slice(5).removepings()
          //let len = message.content.split(' ')[0].length ==  12 ? 12 : 5 //jacob u suck
          client.channels.cache.get('617865643307434025').send(message.author.tag + `(id: ${message.author.id})` + ": " + thingtosend)
          var tipzero = [""," You can join my server with j.invite"]
          message.channel.send(':white_check_mark: Sent to my server!'+tipzero[Math.floor(Math.random() * tipzero.length)])
          console.log('[MSG] [SERVERSEND] <NUM>' + message.author.tag + ": " + message.content.slice(5));
        //  ssnum++;
          talkedRecently.add(message.author.id);
          setTimeout(() => {
            // Removes the user from the set after a minute
            talkedRecently.delete(message.author.id);
          }, 60000);
        }
    }
}