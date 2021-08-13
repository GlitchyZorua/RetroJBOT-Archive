
const talkedRecently = new Set();
const Discord = require("discord.js");
const fs = require("fs-extra");
var adminlist = fs.readJSONSync('./admins.txt')
var ssbans = fs.readJSONSync('C:\\Users\\Jacob Workman\\Desktop\\RetroJBOT-main\\ssbans.txt')
var waves = process.env.wave
module.exports = {
    name: 'sswave',
    async execute(client, message, args, services_stopped) {
      let thingtosend = message.content.slice(5).removepings()
//message.channel.send(":x: You cannot use Serversend because this version of RetroJBOT doesn't support sas yet. SAS needs to be rewritten due to the whole retrojbot code being rewritten. We aplogize for any inconvenience.")
//return
      if (talkedRecently.has(message.author.id)) {
            message.channel.send(":alarm_clock: **Cooldown** You can only send one wave message per hour, Please slowdown. *tick tock*"); 
      } else {
      if (services_stopped === 1) {
        message.channel.send(":x: Server Send has shutdown for now... Please come again.")
        return;
      }
      if (message.channel.nsfw) {//message.channel.send(":x: Server Send has shutdown for 5 days. Please come again. `Reason: Example`")
        message.channel.send("🔞 A wave can't be sent in a nsfw channel.")
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
          const no = new Discord.MessageEmbed()
          .setColor('RANDOM')
          .setTitle(message.author.tag + " (id: " + message.author.id+")")
          .setDescription(message.author.tag + ' sent a wave! Hello on the other side!\n\n\nTotal Waves: '+waves)
          .setThumbnail('https://media.discordapp.net/attachments/676219827282509843/875554282173243412/resize.png')
          client.channels.cache.get('617865643307434025').send(no)
          message.channel.send(':white_check_mark: Sent a wave! Hello on the other side!')
          ++waves 
          process.env.wave = waves;
          
          talkedRecently.add(message.author.tag)
          setTimeout(() => {
            // Removes the user from the set after a minute
            talkedRecently.delete(message.author.id);
          }, 60000);
        }
    }
}